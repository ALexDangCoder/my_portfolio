// Feature flags configuration for Alex Dang Portfolio
// Allows turning the public portfolio display on/off remotely via Firestore or locally.

export const FEATURE_FLAGS = {
  // Local fallback if Firebase is unreachable
  DEFAULT_SITE_ENABLED: true,

  // Admin secret key to unlock private mode or access the live toggle bar
  // Access via URL: https://alexdangcoder.github.io/my_portfolio/?admin=alex2026
  // Or enter this passcode on the maintenance screen
  ADMIN_PASSCODE: 'alex2026',

  // Firestore sync configuration
  FIRESTORE_COLLECTION: 'settings',
  FIRESTORE_DOC: 'site',
};
