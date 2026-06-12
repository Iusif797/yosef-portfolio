const STORAGE_KEY = 'portfolio-cookie-consent-v1';

export function getStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.analytics !== 'boolean') return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(analytics) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ analytics, updatedAt: Date.now(), version: 1 })
  );
}

export function clearConsent() {
  localStorage.removeItem(STORAGE_KEY);
}
