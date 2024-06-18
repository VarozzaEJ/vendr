export class Snack {
    constructor(snackName, snackPrice, snackPicture) {
        this.name = snackName
        this.price = snackPrice
        this.picture = snackPicture
        console.log("Snack Controller Loaded");
    }

    get vendingMachineHTMLTemplate() {
        return `
        <div class="col-3 bg-light align-items-center d-flex m-3 py-3 flex-column">
          <img role="button" onclick="app.Snack.buySnack('${this.name}')"
            src="${this.picture}"
            alt="${this.name}" class="img-fluid">
          <p class="fs-4 text-dark ">${this.name}</p>
          <p class="fs-5 text-danger">$${this.price.toFixed(2)}</p>
        </div>
        `
    }

    // get moneyHTMLTemplate() {
    //     return
    //     `<span class="fs-4 fw-bold" id="totalInsertedCash">40</span>`
    // }
}