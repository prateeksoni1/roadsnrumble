import api from ".";

export const verifyToken = () =>
  api.get("/api/v1/admin/status", {
    headers: {
      token: localStorage.getItem("roads_token"),
    },
  });
