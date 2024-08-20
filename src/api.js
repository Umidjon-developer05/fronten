import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-web-virid.vercel.app",
});

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);
