import Application from "./application";

export default class Initializer {

    public static initialize (): void {

        new Promise<void>(async (resolve) => {

            await require("./initializers/logging").default();
            await require("./initializers/loader").default();

            return resolve();

        }).then(() => Application.main());

    }

}
