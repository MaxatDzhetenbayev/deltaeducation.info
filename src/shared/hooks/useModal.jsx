import { useEffect, useState } from "react";

export const useModal = () => {
  const [isModalView, setIsModalView] = useState(false);

  const modalOpen = () => {
    setIsModalView(true);
    document.body.classList.add("scroll-lock");
  };

  const modalClose = () => {
    setIsModalView(false);
    document.body.classList.remove("scroll-lock");
  };

  return [isModalView, modalOpen, modalClose];
};
