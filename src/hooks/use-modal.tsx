import React, { useState, ReactChild } from "react";

import { Modal } from "../components/modal";

interface Props {
  children: ReactChild;
}

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = ({ children }: Props) => (
    <>{isVisible && <Modal closeModal={hide}>{children}</Modal>}</>
  );

  return {
    show,
    hide,
    isVisible,
    RenderModal,
  };
};
