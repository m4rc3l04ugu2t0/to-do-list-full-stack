export default interface Tasks {
    _id: string;
    title: string;
    description: string;
    created?: Date;
    updated?: Date;
    done?: boolean;
}
