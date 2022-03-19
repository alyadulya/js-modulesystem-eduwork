import Table, { app } from "./tablemodule.js";

const table = new Table({
    columns: ["Name", "Email", "Country", "Job"],
    data: [
      ["Edi Hartono", "edi.eduwork@gmail.com", "Indonesia", "Programmer"],
      ["Dodi Prakoso", "dodi@upscale.id", "Indonesia", "CEO"],
      ["Alyad Ulya Iman", "alyadulya@gmail.com", "Wakanda", "Watcher"]
    ]
});

table.render(app);