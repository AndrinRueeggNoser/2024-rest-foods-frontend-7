import { defaultAxiosInstance } from "./MenuFetch";

export const login = async (email: string, password: string) => {
  try {
    const response = await defaultAxiosInstance.post("login", {
      email: email,
      password: password,
    });
    const accessToken = response.headers["authorization"];
    console.log(response.data.userRole.roleName);
    localStorage.setItem("role", response.data.userRole.roleName);
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    throw error;
  }
};
