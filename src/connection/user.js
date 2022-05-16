import api from "./index";

export const findAllUsers = async () => {
  return await api.get("/user");
};

export const findUserById = async (userId) => {
  return await api.get(`/user/${userId}`);
};

export const createUser = async (userInfo) => {
  return await api.post("/user", userInfo);
};

export const editUser = async (userId, userInfo) => {
  return await api.put(`/user/${userId}`, userInfo);
};

export const deleteUser = async (userId) => {
  return await api.delete(`/user/${userId}`);
};
