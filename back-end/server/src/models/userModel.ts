import { connect } from "../database";
import { User } from "../types/user";

// export const getUsersBD = async (id: string) => {
//     const conn = await connect();
//     const [user] = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
//     return user;
// };

export const createUserBD = async (user: User) => {
    const conn = await connect();
    const [createdUser] = await conn.query("INSERT INTO users SET ?", user);
    return createdUser;
};

export const updatedUserBD = async (id: string, user: User) => {
    const conn = await connect();
    const [updatedUser] = await conn.query("UPDATE users SET ? WHERE id = ?", [
        user,
        id,
    ]);
    return updatedUser;
};

export const deleteUserBD = async (id: string) => {
    const conn = await connect();
    const [deletedUser] = await conn.query("DELETE FROM users WHERE id = ?", [
        id,
    ]);
    return deletedUser;
};
