import { randomUUID } from "crypto";
import sql from "./db.js";

export class DataBasePostgres {
    #user = new Map();

    async list(query = "") {
        let user;
        if (query) {
            return await (user = sql`select * from users where name ilike ${
                "%" + query + "%"
            }`);
        }

        user = await sql`select * from users`;

        return user;
    }

    async create(user) {
        const { name, email } = user;
        userID = randomUUID();

        await sql`
            insert into users (id, name, email)
            values (${userID}, ${name}, ${email})
        `;
    }

    update(id, user) {}

    delete(id) {}
}
