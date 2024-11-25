import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  sharetribe: {
    clientId: process.env.SHARETRIBE_CLIENT_ID || "",
    clientSecret: process.env.SHARETRIBE_CLIENT_SECRET || "",
    baseUrl: process.env.SHARETRIBE_BASE_URL || "",
    authUrl: process.env.SHARETRIBE_AUTH_URL || "",
  },
};
