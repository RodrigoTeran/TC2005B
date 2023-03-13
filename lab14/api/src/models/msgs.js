const fs = require("fs");
const path = require("path");

module.exports = class Msg {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }

    save() {
        fs.readdir(path.join(__dirname, "../memories"), (err, files) => {
            const createStream = fs.createWriteStream(path.join(__dirname, `../memories/memory${files.length == 0 ? "" : "(" + files.length + ")"}.txt`));
            createStream.write(this.name + "\n");
            createStream.write(this.message);
            createStream.end();
        });
    }

    static async fetchAll() {
        const files = fs.readdirSync(path.join(__dirname, "../memories"));
        return await Promise.all(files.map(async (filename) => {
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(__dirname, "../memories/", filename), 'utf-8', function (err, content) {
                    if (err) {
                        reject();
                        return;
                    }
                    resolve({
                        name: content.split("\n")[0],
                        message: content.split("\n")[1],
                    });
                });
            });
        }));
    }

    static deleteAll() {
        fs.readdirSync(path.join(__dirname, "../memories")).forEach(f => {
            try {
                fs.unlinkSync(path.join(__dirname, `../memories/${f}`));
            } catch (error) {
                console.log("error", error);
            }
        });;
    }
}