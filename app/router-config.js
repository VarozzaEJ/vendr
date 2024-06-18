import { MoneyController } from "./controllers/MoneyController.js";
import { Snack } from "./controllers/SnacksController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [Snack, MoneyController],
    view: /*html*/`

    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])