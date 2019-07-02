const useDropMenu = () => {
  const dropMenuHandler = ref => {
    ref.current.classList.toggle("toggle");
  };

  return { dropMenuHandler };
};

export default useDropMenu;
