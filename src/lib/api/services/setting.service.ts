// lib/api/services/settings.service.ts
import apiClient from "../apiClient";
import { ENDPOINTS } from "@/lib/api/apiEndpoints";

// Định nghĩa kiểu dữ liệu cho response
interface SettingsResponse {
  primary_color: string;
  facebook_url: string;
  site_title: string;
}

export const getGlobalSettings = (): Promise<SettingsResponse> => {
  return apiClient(ENDPOINTS.SETTINGS.GET); // Giả sử em có ENDPOINTS.SETTINGS.GET = "/api/public/settings"
};
