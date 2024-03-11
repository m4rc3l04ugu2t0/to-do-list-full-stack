import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { useFormContext } from "react-hook-form";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  ref: Ref<HTMLTextAreaElement>;
  name: string;
}

const TextArea = forwardRef(
  (props: TextareaProps, ref: Ref<HTMLTextAreaElement>) => {
    const { register } = useFormContext();
    return <textarea {...register(props.name)} {...props} ref={ref} />;
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
