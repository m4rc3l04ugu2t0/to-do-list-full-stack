import { HTMLAttributes } from "react";

export const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button type="button" {...props}>
            {props.children}{" "}
        </button>
    );
};
