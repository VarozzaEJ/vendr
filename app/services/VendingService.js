import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";

class VendingService {
    drawSnack() {
        const snacks = AppState.snacks
        console.log("Drawing the Snacks", AppState.snacks)
        let innerHTMLString = ''
        snacks.forEach((snack) => innerHTMLString += snack.vendingMachineHTMLTemplate)
        let vendingSnacksElem = document.getElementById("vendingSnacks")
        vendingSnacksElem.innerHTML = innerHTMLString
    }
    buySnack(snackName) {
        const snacks = AppState.snacks
        let specificSnack = snacks.find((specificSnack) => specificSnack.name == snackName)
        console.log("found the right snack", snackName)
        if (specificSnack.price <= AppState.money) {
            AppState.money -= specificSnack.price
            console.log(AppState.money)
        }
        AppState.activeSnack = specificSnack
        console.log('active snack in the appstate', AppState.activeSnack);
    }
}

export const vendingService = new VendingService()