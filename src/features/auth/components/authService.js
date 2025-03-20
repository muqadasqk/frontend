import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000/auth"; // Fixed the typo (was "ttp://")

export const login = async (email, password) => {
  try {
    const response = await axios.post("/login", { email, password });
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
    const formData = new FormData();
    // Add text fields
    for (const key in userData) {
      if (key !== "image") {
        formData.append(key, userData[key]);
      }
    }
    // Add the image file
    if (userData.image) {
      formData.append("image", userData.image);
    }
    const response = await axios.post("/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Signup failed", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};