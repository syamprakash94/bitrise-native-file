import { apiManager } from ".";
import { apiEndpoints, baseURL } from "./config";
import { PortfolioAppData, PortfolioResponse } from "./models/portfolioModel";

export type ResponseData = {
  success: boolean;
  message: string;
  data?: any;
  error?: any;
};

export const getMeditationDetails = async (): Promise<PortfolioAppData> => {
  const apiData = {
    method: "get",
    endPoint: `${baseURL}`,
    params: {},
  };

  const response = await apiManager(apiData);

  // 👇 unwrap axios response
  const apiResponse = response.data;

  console.log("UNWRAPPED API RESPONSE 👉", apiResponse);

  if (!apiResponse?.success) {
    throw new Error(apiResponse?.message ?? "API failed");
  }

  return apiResponse.data; // 👈 PortfolioAppData
};



