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
    <div className="fixed w-full bottom-0 top-0 left-0 right-0 bg-white-90">
      <div className="relative">
        <div className="bg-white p-20 md:w-400 mx-auto mt-50">
          <div>
            <span
              onClick={closeModal}
              className="block w-30 h-30 cursor-pointer ml-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>,
    domEl
  );
});
