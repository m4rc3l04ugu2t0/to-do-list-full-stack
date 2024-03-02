import { connect } from "../services/database";

export const getTasks = async () => {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT * FROM tasks");
    return rows;
};
