import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientConfigService {
  private readonly _http = inject(HttpClient);
  private readonly _CLIENT_CONFIG_KEY = 'client_initial_config';

  async fetchClientConfig(): Promise<void> {
    const response = await firstValueFrom(
      // eslint-disable-next-line
      this._http.get<any>(this._CLIENT_CONFIG_KEY)
    );
    // Handle the response as needed
    console.log('Fetched Client Config:', response);
    return response as unknown as void;
  }
}
