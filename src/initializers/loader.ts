import * as fs from "fs";
import * as path from "path";
import Application from "../application";

export default async (): Promise<void> => {

    return new Promise<void>((resolve, reject) => {

        const filePath = "./data.json";

        fs.readFile(path.resolve(filePath), "utf8", (error: any, data: string) => {

            if (error) return reject(error);

            data = JSON.parse(data);

            const users = Object.keys(data);

            for (let i = 0; i < users.length; i++) {

                const username = String(users[i]).toLowerCase();
                Application.tickets[username] = Number(String(data[users[i]].tickets));

                if (isNaN(Application.tickets[username])) {
                    throw new Error("Invalid ticket count for user " + username);
                }

            }

            return resolve();

        });

    }).catch(() => process.exit());

}
