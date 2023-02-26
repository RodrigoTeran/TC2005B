const dotenv = require("dotenv");
dotenv.config();

const app = require("./server");

async function main() {
  try {
    app.listen(app.get("port"));
    console.log(`Server on port: ${app.get("port")}`);
  } catch (error) {
    console.error(`Unable to connect: ${error}`);
  }
}

main();
