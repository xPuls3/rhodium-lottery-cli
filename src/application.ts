import { formatNumber } from "./functions/format-number";

export default class Application {

    public static totalTickets: number = 0;
    public static tickets: { [username: string]: number } = {};

    public static async main (): Promise<void> {

        await Application.recalculate();

        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.on("line", (line) => {

            const command = String(line).toLowerCase().split(" ");

            if (command[0] === "add") {

                if (command.length != 3) console.log("Invalid arguments");

                const username = command[1];

                const rhodium = Number(command[2]);
                const tickets = Number(rhodium / 100);

                if (Application.tickets[username] == undefined) Application.tickets[username] = 0;

                const previous: number = Application.tickets[username];
                const total: number = previous + tickets;

                Application.tickets[username] = Number(total);

                if (previous !== 0) console.log(`@${username} is in with ${tickets} more tickets (${total} total)`);
                else console.log(`@${username} is in with ${tickets} tickets`);

                Application.recalculate();

            } else if (command[0] === "show") {

                let x = 0;

                for (let username in Application.tickets) {

                    const tickets = Application.tickets[username];
                    const odds = tickets / Application.totalTickets;
                    const displayOdds = Math.round(odds * 100000) / 1000;

                    let range = [x + 1, x + tickets];
                    let rhodium = tickets * 100;

                    x += tickets;

                    console.log(`${username} owns ${formatNumber(tickets)} ticket${(tickets === 1 ? "" : "s")} (${formatNumber(rhodium)} rhodium) ` +
                        `(${displayOdds}% chance) [${range[0]} - ${range[1]}]`);

                }

            } else {
                console.log("Unknown command");
            }

        });

    }

    private static async recalculate (): Promise<void> {
        Application.getTotal();
        await Application.save();
    }

    private static async save (): Promise<void> {
        await require("./functions/save").default();
    }

    private static getTotal (): void {

        Application.totalTickets = 0;

        for (const v of Object.values(Application.tickets)) {
            Application.totalTickets += v;
        }

    }

}
