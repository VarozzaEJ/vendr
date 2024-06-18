import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";

export class MoneyController {
    constructor() {
        console.log("MoneyController is Loaded");
        AppState.on('money', this.drawMoney)
        this.drawMoney()
    }
    addMoney() {
        console.log("adding CASH MONEY")
        moneyService.addCashToVending()
        this.drawMoney()
    }

    drawMoney() {
        setText('totalInsertedCash', AppState.money)
    }
}