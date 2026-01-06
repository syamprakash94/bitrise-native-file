// Blog inside formData
export interface Blog {
  title: string;
  content: string;
}

// formData object
export interface PortfolioFormData {
  portfolioPrimaryColor: string;
  portfolioName: string;
  blogs: Blog[];
}

// Main app data
export interface PortfolioAppData {
  _id: string;
  name: string;
  templateId: string;
  creatorId: string;
  formData: PortfolioFormData;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

// API response payload
export interface PortfolioResponse {
  success: boolean;
  message: string;
  data: PortfolioAppData;
}

// Axios-style full response (optional, if you want the whole thing)
export interface AxiosFetchAppResponse {
  data: any;
  status: number;
  headers: Record<string, string>;
  config: {
    url: string;
    method: string;
    headers: Record<string, string>;
    timeout: number;
  };
}
