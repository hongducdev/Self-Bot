const { glob } = require("glob");
const { promisify } = require("util");
const Ascii = require('ascii-table')
const globPromise = promisify(glob);

module.exports = async (client) => {
    // Commands
    const Table_command = new Ascii("Commands Loaded");

    const commandFiles = await globPromise(`${process.cwd()}/Commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }

        if (!file.name) 
            return Table_command.addRow(file.name,`🔶 LỖI Ở TÊN LỆNH(NAME)`)
        if (!file.description)
            return Table_command.addRow(file.name,`🔶 LỖI Ở MỔ TẢ(DESCRIPTION)`)

        Table_command.addRow(file.name,`🔷 THÀNH CÔNG`)
    });

    console.log(Table_command.toString())

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/Events/*.js`);
    eventFiles.map((value) => require(value));
}