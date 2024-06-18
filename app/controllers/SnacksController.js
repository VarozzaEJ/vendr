import { AppState } from "../AppState.js"
import { vendingService } from "../services/VendingService.js";


export class Snack {
    constructor() {
        console.log("Snack Controller Loaded");
        this.drawSnacks()

    }

    drawSnacks() {
        vendingService.drawSnack()
    }
    buySnack(snackName) {
        vendingService.buySnack(snackName)
    }
}
//TODO Button to add money to the vending machine!