export default async (): Promise<void> => {

    const VERSION = "1.0";
    const NODE_VERSION = process.version || null;

    console.log(`Launching Lottery CLI v${VERSION}`);
    console.log("Designed and developed by Puls3 (puls3@puls3.dev)");
    console.log("Copyright (c) Puls3, all rights reserved");

    if (NODE_VERSION) console.log(`Using Node.js ${NODE_VERSION}`);

}
