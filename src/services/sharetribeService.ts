import axios from "axios";

const BASE_URL = "https://flex-api.sharetribe.com/v1/integration_api";

const sharetribeClient = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const getAccessToken = async (): Promise<string> => {
  const response = await axios.post(
    "https://flex-api.sharetribe.com/v1/auth/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.SHARETRIBE_CLIENT_ID || "",
      client_secret: process.env.SHARETRIBE_CLIENT_SECRET || "",
    }),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );

  return response.data.access_token;
};

// Configuración de cliente con token dinámico
sharetribeClient.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default sharetribeClient;
