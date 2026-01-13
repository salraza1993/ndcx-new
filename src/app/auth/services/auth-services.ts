import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { LocalStorageService } from '@services/local-storage-service';
import { firstValueFrom } from 'rxjs';

export interface SignInCredentialsType {
  username: string;
  password: string;
}

interface TokenApiResponse {
  access_token: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  private readonly _storage = inject(LocalStorageService);
  private readonly _http = inject(HttpClient);
  private readonly _router = inject(Router);
  private readonly _isAuthenticated = signal<boolean>(this._checkAuthStatus());

  isAuthenticated = computed(() => this._isAuthenticated());

  // Check if user has valid token on initialization
  private _checkAuthStatus(): boolean {
    const token = this.getToken();
    return !!token;
  }

  async signIn(credentials: SignInCredentialsType): Promise<void> {
    const result = await firstValueFrom(
      this._http.post<TokenApiResponse>(environment.AUTH_API, credentials)
    );
    this.setToken(result.access_token);
    this._isAuthenticated.set(true);
    console.log(result);
    console.log(this.isAuthenticated());
    return result as unknown as void;
  }

  signOut(): void {
    this._isAuthenticated.set(false);
    this.removeToken();
    this._router.navigate(['/login']);
  }

  getUserInfo(): { username: string } | null {
    return this._storage.getFromObject(this._storage.STORAGE_KEY, 'user') as {
      username: string;
    } | null;
  }

  getToken(): string | null {
    return this._storage.getFromObject(this._storage.STORAGE_KEY, 'token') as string | null;
  }

  setToken(token: string): void {
    this._storage.setInObject(this._storage.STORAGE_KEY, 'token', token);
  }
  removeToken(): void {
    this._storage.setInObject(this._storage.STORAGE_KEY, 'token', null);
  }
}
