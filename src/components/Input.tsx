import { ChangeEvent, InputHTMLAttributes } from 'react';
import '../styles/components/Input.css';

export type InputProps = {
  id: string;
  label: string;
  value: string|number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
};

export function Input({ id, label, value, type, onChange }: InputProps) {
  return (
    <div className="input-group-component">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type || 'text'}
        id={id} />
    </div>
  );
}