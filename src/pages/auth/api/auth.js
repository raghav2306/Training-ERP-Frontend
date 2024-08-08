import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;

export const login = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchNewAccessToken = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/auth/refresh`, {
      withCredentials: true,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  try {
    await axios.post(
      `${baseURL}/api/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return true;
  } catch (err) {
    throw err;
  }
};
