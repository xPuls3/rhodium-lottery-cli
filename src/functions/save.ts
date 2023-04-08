import * as fs from "fs";
import * as path from "path";
import Application from "../application";

export default async (): Promise<void> => {

    return new Promise<void>((resolve) => {

        const filePath = "./data.json";

        const data = {};

        let x = 0;

        for (let username in Application.tickets) {

            const tickets = Application.tickets[username];

            let range = [x + 1, x + tickets];
            let rhodium = tickets * 100;

            x += tickets;

            data[username] = { rhodium, tickets, range };

        }

        fs.writeFile(path.resolve(filePath), JSON.stringify(data, null, 4), () => {
            return resolve();
        });

    });

}
