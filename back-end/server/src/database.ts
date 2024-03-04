import { createPool } from "mysql2/promise";

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

console.log({ MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE });

export async function connect() {
    const connection = await createPool({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
    });

    return connection;
}
