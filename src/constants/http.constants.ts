export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://fo-api.vercel.app"
    : "http://localhost:7000";
