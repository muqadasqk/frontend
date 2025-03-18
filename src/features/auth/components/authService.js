import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3300/api/auth"; // Global base URL

export const login = async (email, password) => {
  try {
    const response = await axios.post("/login", { email, password }); // No need to repeat base URL
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Login failed", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post("/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};
