import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export const apiService = {
  // AI Tools
  getTools: async (category?: string) => {
    const params = category ? { category } : {};
    return apiClient.get("/api/tools", { params });
  },

  getTool: async (id: string) => {
    return apiClient.get(`/api/tools/${id}`);
  },

  getToolsByCategory: async (category: string) => {
    return apiClient.get(`/api/tools/category/${category}`);
  },

  // Categories
  getCategories: async () => {
    return apiClient.get("/api/categories");
  },

  // Content
  getPromptExamples: async () => {
    return apiClient.get("/api/content/prompts");
  },

  getLearningResources: async () => {
    return apiClient.get("/api/content/learning");
  },

  // Search
  searchTools: async (query: string) => {
    return apiClient.get("/api/search", { params: { q: query } });
  },
};

export default apiClient;
