import { AppState } from "../AppState.js"

class MoneyService {
    addCashToVending() {
        AppState.money += .25
        console.log(AppState.money)
    }

}

export const moneyService = new MoneyService()