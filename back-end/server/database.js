import { randomUUID } from "crypto";

export class DataBase {
    #user = new Map();

    list(query) {
        return Array.from(this.#user.entries())
            .map((userArray) => {
                const id = userArray[0];
                const data = userArray[1];

                return {
                    id,
                    ...data,
                };
            })
            .filter((user) => {
                if (query) {
                    return user.name.includes(query);
                }
                console.log(user);

                return true;
            });
    }

    create(user) {
        const userID = randomUUID();
        this.#user.set(userID, user);
    }

    update(id, user) {
        this.#user.set(id, user);
    }

    delete(id) {
        this.#user.delete(id);
    }
}
