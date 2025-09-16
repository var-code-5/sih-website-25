import { auth } from "./firebase";

// Default token refresh threshold (5 minutes before expiration)
const DEFAULT_REFRESH_THRESHOLD_MS = 5 * 60 * 1000; 

/**
 * Manages Firebase authentication tokens
 */
export class TokenManager {
  private static refreshThresholdMs = DEFAULT_REFRESH_THRESHOLD_MS;

  /**
   * Get a valid Firebase ID token
   * Automatically refreshes the token if it's expired or about to expire
   */
  static async getIdToken(forceRefresh = false): Promise<string | null> {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.warn("No user is signed in");
        return null;
      }

      // If forceRefresh is true, we'll refresh the token regardless of its expiration
      if (forceRefresh) {
        return await currentUser.getIdToken(true);
      }

      // Get token metadata to check expiration
      const tokenResult = await currentUser.getIdTokenResult();
      const expirationTime = new Date(tokenResult.expirationTime).getTime();
      const nowTime = Date.now();

      // Check if token is about to expire (within the refresh threshold)
      if (expirationTime - nowTime < this.refreshThresholdMs) {
        console.log("Token is about to expire, refreshing...");
        return await currentUser.getIdToken(true);
      }

      // Return the existing token if it's still valid
      return tokenResult.token;
    } catch (error) {
      console.error("Error getting ID token:", error);
      throw error;
    }
  }

  /**
   * Set the refresh threshold (time before expiration when token should be refreshed)
   * @param thresholdMs Threshold in milliseconds
   */
  static setRefreshThreshold(thresholdMs: number): void {
    this.refreshThresholdMs = thresholdMs;
  }
}
