import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { InitialConfigModel } from '@client/models/client-config.interface';
import { LocalStorageService } from '@services/local-storage-service';
import { firstValueFrom } from 'rxjs';

type InitialConfigType = InitialConfigModel | null;

@Injectable({ providedIn: 'root' })
export class InitializeClientConfigService {
  private readonly _CLIENT_CONFIG_JSON = '/static-json-files/client-initial-configs.json';
  private readonly _storage = inject(LocalStorageService);
  private readonly _http = inject(HttpClient);
  private _initialConfig = signal<InitialConfigType>(null);

  getInitialConfig = computed<InitialConfigType>(() => this._initialConfig());

  async initConfig(): Promise<void> {
    // Check if config already exists in localStorage
    const existingConfig = this._storage.get(this._storage.STORAGE_KEY);

    if (existingConfig) {
      try {
        // Try to parse the stored config
        const parsedConfig = JSON.parse(existingConfig) as InitialConfigModel;

        // Validate the parsed config has the required structure
        if (this._isValidConfig(parsedConfig)) {
          this._initialConfig.set(parsedConfig);
          return;
        }

        // If invalid, remove the corrupted data and fetch fresh
        console.warn('Invalid config structure in localStorage, fetching fresh data');
        this._storage.remove(this._storage.STORAGE_KEY);
      } catch (error) {
        // If JSON parsing fails, remove the corrupted data
        console.error('Failed to parse config from localStorage:', error);
        this._storage.remove(this._storage.STORAGE_KEY);
      }
    }

    // If not exists or was invalid, fetch from JSON file
    const config = await firstValueFrom(
      this._http.get<InitialConfigModel>(this._CLIENT_CONFIG_JSON)
    );
    this._initialConfig.set(config);
    this.setConfig(config);
    return;
  }

  private _isValidConfig(config: unknown): config is InitialConfigModel {
    // Type guard to check if config matches InitialConfigModel structure
    if (!config || typeof config !== 'object') {
      return false;
    }

    const cfg = config as Partial<InitialConfigModel>;

    // Check for required fields
    return (
      typeof cfg.token === 'string' &&
      cfg.token.length > 0 &&
      typeof cfg.userInfo === 'object' &&
      cfg.userInfo !== null &&
      typeof cfg.branding === 'object' &&
      cfg.branding !== null &&
      typeof cfg.metaData === 'object' &&
      cfg.metaData !== null &&
      (cfg.appearance === 'light' || cfg.appearance === 'dark' || cfg.appearance === 'system')
    );
  }

  setConfig(config: InitialConfigModel): void {
    this._storage.set(this._storage.STORAGE_KEY, JSON.stringify(config));
  }
}
