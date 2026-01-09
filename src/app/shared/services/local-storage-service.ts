import { Injectable } from '@angular/core';

type JsonObject = Record<string, unknown>;

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly _storage: Storage = localStorage;
  STORAGE_KEY = 'ndcx_app_data';

  /** Clears all data from localStorage */
  clear(): void {
    this._storage.clear();
  }

  /** Retrieves a raw string value from localStorage */
  get(key: string): string | null {
    return this._storage.getItem(key);
  }

  /** Stores a raw string value in localStorage */
  set(key: string, value: string): void {
    this._storage.setItem(key, value);
  }

  /** Removes a key from localStorage */
  remove(key: string): void {
    this._storage.removeItem(key);
  }

  /** Reads a nested property from a JSON object in localStorage */
  getFromObject(storageKey: string, propertyKey: string): unknown | null {
    const storedValue = this._storage.getItem(storageKey);
    if (!storedValue) return null;

    try {
      const parsed = JSON.parse(storedValue) as JsonObject;
      return Object.prototype.hasOwnProperty.call(parsed, propertyKey) ? parsed[propertyKey] : null;
    } catch (error) {
      console.warn('Invalid JSON in localStorage:', error);
      return null;
    }
  }

  /** Sets a nested property inside a JSON object in localStorage */
  setInObject(storageKey: string, propertyKey: string, value: unknown): void {
    const storedValue = this._storage.getItem(storageKey);

    let parsed: JsonObject = {};
    if (storedValue) {
      try {
        parsed = JSON.parse(storedValue) as JsonObject;
      } catch {
        parsed = {};
      }
    }

    parsed[propertyKey] = value;
    this.set(storageKey, JSON.stringify(parsed));
  }

  /** Removes a nested property from a JSON object in localStorage */
  removeFromObject(storageKey: string, propertyKey: string): void {
    const storedValue = this._storage.getItem(storageKey);
    if (!storedValue) return;

    try {
      const parsed = JSON.parse(storedValue) as JsonObject;

      if (Object.prototype.hasOwnProperty.call(parsed, propertyKey)) {
        delete parsed[propertyKey];
        this.set(storageKey, JSON.stringify(parsed));
      }
    } catch (error) {
      console.warn('Invalid JSON in localStorage:', error);
    }
  }
}
