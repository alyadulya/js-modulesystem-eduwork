export default class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `<tr>`
      d.forEach((i) => {
        open += `
            <td>${i}</td>
        `;
      });
      open += `</tr>`
    });

    return open + close;
  }

  render(element) {
    let table =
      "<table class='table table-hover table-striped'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

export const app = document.getElementById("app");