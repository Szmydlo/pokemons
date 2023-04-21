import React, { ReactNode } from "react";

const ShortcutButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button className="text-cyan-400" onClick={onClick}>
      {children}
    </button>
  );
};

export default ShortcutButton;
