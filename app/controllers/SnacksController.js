import { AppState } from "../AppState.js"
import { vendingService } from "../services/VendingService.js";


export class Snack {
    constructor() {
        console.log("Snack Controller Loaded");
        this.drawSnacks()

    }

    drawSnacks() {
        const snacks = AppState.snacks
        console.log("Drawing the Snacks", AppState.snacks)
        let innerHTMLString = ''
        snacks.forEach((snack) => innerHTMLString += snack.vendingMachineHTMLTemplate)
        let vendingSnacksElem = document.getElementById("vendingSnacks")
        vendingSnacksElem.innerHTML = innerHTMLString
    }
    buySnack(snackName) {
        vendingService.buySnack(snackName)
    }
}
//TODO Button to add money to the vending machine!