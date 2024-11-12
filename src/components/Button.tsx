import { PropsWithChildren } from 'react';
import '../styles/components/Button.css';

export type ButtonProps = {
  disabled?: boolean;
  onHandler: () => void;
} & PropsWithChildren;

export function Button({ disabled, onHandler, children }: ButtonProps) {
  return (
    <button className="button-component" onClick={onHandler} disabled={disabled}>
      {children}
    </button>
  );
}