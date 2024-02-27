import React, { ReactNode } from 'react';

interface ButtonProps {
  handle_click: (e: React.MouseEvent) => void;
  class_name: string;
  children: ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <button className={props.class_name} onClick={props.handle_click}>
      {props.children}
    </button>
  );
}

export default Button;
