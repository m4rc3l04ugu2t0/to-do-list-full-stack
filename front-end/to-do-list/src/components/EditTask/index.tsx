export const EditTask = ({ isEditing }: { isEditing: boolean }) => {
    return (
        <div
            className={`w-4/6 h-2/5 bg-gray-800 absolute right-8 top-6  md:max-w-3xl rounded p-3 ${
                isEditing ? "block" : "hidden"
            }`}
        >
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                ducimus, voluptatum sed a fugit reiciendis! Voluptatem earum
                modi sit obcaecati natus unde tempora, eos molestias quas, in
                iusto eum architecto!
            </p>
        </div>
    );
};
