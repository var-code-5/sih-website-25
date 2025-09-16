import { TokenManager } from "./tokenManager";

interface ApiClientOptions {
  baseUrl: string;
  headers?: HeadersInit;
}

interface RequestOptions extends RequestInit {
  /**
   * Whether the request requires authentication
   * @default true
   */
  authenticated?: boolean;
}

/**
 * API client that automatically handles authentication with Firebase tokens
 */
export class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(options: ApiClientOptions) {
    this.baseUrl = options.baseUrl;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...options.headers,
    };
  }

  /**
   * Get headers with authentication token
   */
  private async getAuthHeaders(): Promise<HeadersInit> {
    const token = await TokenManager.getIdToken();
    
    if (!token) {
      throw new Error("User is not authenticated");
    }

    return {
      ...this.defaultHeaders,
      Authorization: `Bearer ${token}`,
    };
  }
  
  /**
   * Get headers without authentication token
   */
  private getHeaders(): HeadersInit {
    return {
      ...this.defaultHeaders,
    };
  }

  /**
   * Make an API request with optional authentication
   * @param endpoint API endpoint to call
   * @param options Request options
   * @param options.authenticated Whether the request requires authentication (default: true)
   */
  async request<T = any>(
    endpoint: string, 
    options: RequestOptions = {}
  ): Promise<T> {
    // Default to authenticated request unless explicitly set to false
    const isAuthenticated = options.authenticated !== false;
    const url = `${this.baseUrl}${endpoint}`;
    
    try {
      // Get appropriate headers based on authentication requirement
      const headers = isAuthenticated 
        ? await this.getAuthHeaders() 
        : this.getHeaders();
      
      // Make the request
      const response = await fetch(url, {
        ...options,
        headers: {
          ...headers,
          ...options.headers,
        },
      });

      // Only try token refresh for authenticated requests
      if (isAuthenticated && response.status === 401) {
        // Token might be invalid despite our refresh logic
        // Force refresh and try again (but only once)
        const newToken = await TokenManager.getIdToken(true);
        
        if (!newToken) {
          throw new Error("Failed to refresh authentication token");
        }

        // Retry the request with the new token
        const retryResponse = await fetch(url, {
          ...options,
          headers: {
            ...headers,
            Authorization: `Bearer ${newToken}`,
            ...options.headers,
          },
        });

        return this.handleResponse<T>(retryResponse);
      }

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  /**
   * Handle API response
   */
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      // Try to get error details from response
      let errorDetails = "";
      try {
        const errorData = await response.json();
        errorDetails = JSON.stringify(errorData);
      } catch (e) {
        // Ignore JSON parsing errors
      }

      throw new Error(
        `API request failed with status ${response.status}: ${errorDetails || response.statusText}`
      );
    }

    // Check if the response is empty
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      // Return empty object for non-JSON responses
      return {} as T;
    }

    return await response.json() as T;
  }

  /**
   * Convenience method for GET requests
   * @param endpoint API endpoint
   * @param options Request options
   * @param options.authenticated Whether the request requires authentication (default: true)
   */
  async get<T = any>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  /**
   * Convenience method for POST requests
   * @param endpoint API endpoint
   * @param data Request body data
   * @param options Request options
   * @param options.authenticated Whether the request requires authentication (default: true)
   */
  async post<T = any>(
    endpoint: string, 
    data?: any, 
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * Convenience method for PUT requests
   * @param endpoint API endpoint
   * @param data Request body data
   * @param options Request options
   * @param options.authenticated Whether the request requires authentication (default: true)
   */
  async put<T = any>(
    endpoint: string, 
    data?: any, 
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * Convenience method for DELETE requests
   * @param endpoint API endpoint
   * @param options Request options
   * @param options.authenticated Whether the request requires authentication (default: true)
   */
  async delete<T = any>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
  
  /**
   * Convenience method for unauthenticated GET requests
   * @param endpoint API endpoint
   * @param options Request options
   */
  async getPublic<T = any>(endpoint: string, options: Omit<RequestOptions, 'authenticated'> = {}): Promise<T> {
    return this.get<T>(endpoint, { ...options, authenticated: false });
  }
  
  /**
   * Convenience method for unauthenticated POST requests
   * @param endpoint API endpoint
   * @param data Request body data
   * @param options Request options
   */
  async postPublic<T = any>(
    endpoint: string, 
    data?: any, 
    options: Omit<RequestOptions, 'authenticated'> = {}
  ): Promise<T> {
    return this.post<T>(endpoint, data, { ...options, authenticated: false });
  }
}
