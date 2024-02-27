import sql from "./db.js";

sql`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )
`
    .then(() => {
        console.log("ok");
    })
    .catch((err) => {
        console.log(err);
    });
