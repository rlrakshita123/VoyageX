export const saveToken = (token) => {
  localStorage.setItem("voyagex_token", token);
};

export const getToken = () => {
  return localStorage.getItem("voyagex_token");
};

export const removeToken = () => {
  localStorage.removeItem("voyagex_token");
};

export const saveUser = (user) => {
  localStorage.setItem("voyagex_user", JSON.stringify(user));
};

export const getUser = () => {
  const u = localStorage.getItem("voyagex_user");
  return u ? JSON.parse(u) : null;
};

export const isLoggedIn = () => {
  return !!getToken();
};
