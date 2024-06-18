import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";

class VendingService {

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