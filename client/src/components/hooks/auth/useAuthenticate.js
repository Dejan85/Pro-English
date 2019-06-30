const useAuthenticate = () => {
  const authenticate = data => {
    localStorage.setItem("jwt", JSON.stringify(data));
  };

  return {
    authenticate,
  };
};

export default useAuthenticate;
