import Cookies from "js-cookie";

export const setToken = (token) => {
  Cookies.set("token", token, {expires: 7}); // Token disimpan di cookie selama 7 hari
};

export const getToken = () => {
  return Cookies.get("token");
};

export const isAuthenticated = () => {
  return !!getToken(); // Return true jika token ada
};

export const removeToken = () => {
  Cookies.remove("token");
};

export const getUserProfile = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/auth/profile`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
