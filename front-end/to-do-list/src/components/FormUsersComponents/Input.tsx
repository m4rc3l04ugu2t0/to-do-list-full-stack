import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export const Input = (props: InputProps) => {
    const { register } = useFormContext();
    return <input {...register(props.name)} {...props} />;
};
