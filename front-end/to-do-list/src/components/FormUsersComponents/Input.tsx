import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  ref: Ref<HTMLInputElement>;
}

const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const { register } = useFormContext();
  return <input {...register(props.name)} {...props} ref={ref} />;
});

Input.displayName = "Input";

export default Input;
