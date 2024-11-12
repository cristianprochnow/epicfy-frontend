import { InputHTMLAttributes } from 'react';
import '../styles/components/Input.css';

export type InputProps = {
  id: string;
  label: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
};

export function Input({ id, label, type }: InputProps) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type || 'text'} id={id} />
    </div>
  );
}