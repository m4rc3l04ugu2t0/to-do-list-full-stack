import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
    name: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
    const {
        formState: { errors },
    } = useFormContext();

    if (!errors[props.name]) {
        return null;
    }

    return <span {...props}>{errors[props.name]?.message?.toString()}</span>;
};
