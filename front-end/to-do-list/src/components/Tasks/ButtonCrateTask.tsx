export const ButtonCreateTask = ({
    className,
    onClick,
}: {
    className?: string;
    onClick: () => void;
}) => {
    return (
        <div className={className}>
            {" "}
            <button
                className="bg-transparent bg-slate-600 rounded bi bi-plus-lg text-3xl"
                onClick={onClick}
            ></button>
        </div>
    );
};
