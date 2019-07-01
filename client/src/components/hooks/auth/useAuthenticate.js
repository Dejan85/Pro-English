const useAuthenticate = () => {
  const authenticate = data => {
    localStorage.setItem("jwt", JSON.stringify(data));
  };

  const isAuthenticated = () => {
    if (typeof window == "undefined") return false;

    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };

  return {
    authenticate,
    isAuthenticated,
  };
};

export default useAuthenticate;
