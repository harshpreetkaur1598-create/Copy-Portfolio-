// Simple IndexedDB helper for persisting uploaded brand logos without localStorage size limits
const DB_NAME = 'HarshpreetPortfolioDB';
const DB_VERSION = 1;
const STORE_NAME = 'brand_logos';

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export interface StoredLogo {
  id: string;
  name: string;
  dataUrl: string;
  timestamp: number;
  scale?: number; // scale multiplier (default 1)
}

export const saveLogosToDB = async (logos: StoredLogo[]): Promise<void> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    // Clear old records
    store.clear();
    // Add all logos
    for (const logo of logos) {
      store.put(logo);
    }
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to save logos to IndexedDB:', err);
  }
};

export const getLogosFromDB = async (): Promise<StoredLogo[]> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('Failed to load logos from IndexedDB:', err);
    return [];
  }
};

export const clearLogosFromDB = async (): Promise<void> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).clear();
  } catch (err) {
    console.warn('Failed to clear logos from IndexedDB:', err);
  }
};
