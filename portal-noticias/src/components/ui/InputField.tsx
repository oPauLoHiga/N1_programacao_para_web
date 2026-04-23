import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type Base = {
  label: string;
  id: string;
};

type InputFieldProps = Base & {
  multiline?: false;
} & InputHTMLAttributes<HTMLInputElement>;

type TextareaFieldProps = Base & {
  multiline: true;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function InputField(props: InputFieldProps | TextareaFieldProps) {
  const { label, id, multiline, ...rest } = props;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea id={id} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input id={id} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </div>
  );
}
