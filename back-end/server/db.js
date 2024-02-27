import "dotenv/config";
import postgres from "postgres";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres(
    "postgresql://mrcelo014:LmP8UyGQVMY6@ep-wispy-recipe-a544p9jt.us-east-2.aws.neon.tech/todolistBD?sslmode=require",
    {
        host: PGHOST,
        database: PGDATABASE,
        username: PGUSER,
        password: PGPASSWORD,
        port: 5432,
        ssl: "require",
        connection: {
            options: `project=${ENDPOINT_ID}`,
        },
    }
);

export default sql;
