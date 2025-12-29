import toast from "react-hot-toast";

export const logoutUser = (navigate) => {
  // remove authentication data
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  toast.success("Logged out successfully 👋");

  navigate("/login");
};
