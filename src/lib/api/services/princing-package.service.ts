import apiClient from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/apiEndpoints";
import { Pricing, ApiResponse } from "@/types/princing";

const getAll = ({}): Promise<ApiResponse<Pricing>> => {
  const endpoint = ENDPOINTS.PRINCING_PACKAGE.LIST;
  return apiClient(endpoint);
};

export const PrincingService = {
  getAll,
};
