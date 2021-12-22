import React, { ReactChild, memo } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactChild;
  closeModal: () => void;
}

// eslint-disable-next-line react/display-name
export const Modal = memo(({ children, closeModal }: Props) => {
  const domEl = document.getElementById("modal-root");
  if (!domEl) return null;

  return createPortal(
    <div className="fixed w-full bottom-0 top-0 left-0 right-0 bg-white-40">
      <div className="bg-white m-10 p-20">
        <div>
          <span onClick={closeModal} />
        </div>
        {children}
      </div>
    </div>,
    domEl
  );
});
