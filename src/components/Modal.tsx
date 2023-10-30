//Modal.tsx
import React, { useRef } from "react";
import cn from "classnames";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose(): void;
};

export const Modal = ({ children, open, onClose }: Props) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
      onClose();
  });

  const modalClass = cn({
    "modal modal-bottom sm:modal-middle": true,
    "modal-open": open,
  });
  return (
    <div className={modalClass}>
      <div className="modal-box !max-w-2xl" ref={ref}>
        {children}
      </div>
    </div>
  );
};