import api from ".";

export const verifyToken = () =>
  api.get("/api/v1/admin/status", {
    headers: {
      token: `Bearer ${localStorage.getItem("roads_token")}`,
    },
  });

export const login = (values) => api.post("/api/v1/admin/auth", values);
