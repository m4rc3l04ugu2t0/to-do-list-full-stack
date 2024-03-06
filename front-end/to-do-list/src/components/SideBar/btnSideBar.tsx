export const BtnSideBar = ({
    setToggleSideBar,
}: {
    setToggleSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <button
            onClick={() => setToggleSideBar((prevState) => !prevState)}
            className="bi bi-layout-sidebar text-3xl "
            // Adicione ícones ou texto conforme necessário
        ></button>
    );
};
