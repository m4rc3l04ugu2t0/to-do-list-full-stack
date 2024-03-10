import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    name: string;
}

export const TextArea = (props: TextareaProps) => {
    const { register } = useFormContext();
    return <textarea {...register(props.name)} {...props} />;
};
