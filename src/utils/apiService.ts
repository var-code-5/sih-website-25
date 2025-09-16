import { ApiClient } from "./apiClient";

// Create a singleton API client instance
const apiClient = new ApiClient({
  // Use the public URL for client-side API calls
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL || "/api/proxy",
});

/**
 * Example API services using the apiClient
 */
export const apiService = {
  // === AUTHENTICATED ENDPOINTS ===
  // These methods require authentication and handle token refreshing automatically
  
  /**
   * Example method to fetch user profile data
   */
  getUserProfile: async () => {
    return apiClient.get<{ id: string; name: string; email: string }>("/user/profile");
  },
  
  /**
   * Example method to update user profile data
   */
  updateUserProfile: async (data: { name?: string; email?: string }) => {
    return apiClient.put<{ success: boolean }>("/user/profile", data);
  },
  
  /**
   * Example method to create a new resource
   */
  createResource: async (data: any) => {
    return apiClient.post<{ id: string }>("/resources", data);
  },
  
  /**
   * Example method to fetch a specific resource
   */
  getResource: async (id: string) => {
    return apiClient.get<any>(`/resources/${id}`);
  },
  
  /**
   * Example method to delete a resource
   */
  deleteResource: async (id: string) => {
    return apiClient.delete<{ success: boolean }>(`/resources/${id}`);
  },
  
  // === PUBLIC ENDPOINTS ===
  // These methods don't require authentication
  
  /**
   * Example method to fetch public data
   */
  getPublicData: async () => {
    return apiClient.getPublic<any>("/public/data");
  },
  
  /**
   * Example method to fetch public announcements
   */
  getAnnouncements: async () => {
    return apiClient.getPublic<Array<{ id: string; title: string; content: string }>>("/public/announcements");
  },
  
  /**
   * Example method to search public resources
   */
  searchPublicResources: async (query: string) => {
    return apiClient.getPublic<any[]>(`/public/resources/search?q=${encodeURIComponent(query)}`);
  },
  
  /**
   * Example method to submit contact form (public endpoint)
   */
  submitContactForm: async (data: { name: string; email: string; message: string }) => {
    return apiClient.postPublic<{ success: boolean }>("/public/contact", data);
  },
  
  /**
   * Example of an explicit unauthenticated request using the regular method
   */
  getPublicStats: async () => {
    return apiClient.get<{ users: number; resources: number }>("/public/stats", { authenticated: false });
  }
};
