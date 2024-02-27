import React, { ReactNode } from 'react';

interface ButtonProps {
  handle_click: (e: React.MouseEvent) => void;
  className: string;
  children: ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <button className={props.className} onClick={props.handle_click}>
      {props.children}
    </button>
  );
}

export default Button;
