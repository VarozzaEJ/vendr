import { Snack } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  snacks = [
    new Snack(
      'Doritos',
      3.50,
      'https://target.scene7.com/is/image/Target/GUEST_d769c627-2f55-49ae-8ba9-d3f19b81e462?wid=488&hei=488&fmt=pjpeg'
    ),
    new Snack(
      'Snickers',
      3.00,
      'https://m.media-amazon.com/images/I/41NT7YN956L._AC_UF894,1000_QL80_.jpg'
    ),
    new Snack(
      'Fruit Snacks',
      .50,
      'https://m.media-amazon.com/images/I/71OE4h8MXIL.jpg'
    ),
    new Snack(
      'Cosmic Brownie',
      1.25,
      'https://bjs.scene7.com/is/image/bjs/7444?$bjs-Zoom$'
    ),
    new Snack(
      'Coke',
      .75,
      'https://m.media-amazon.com/images/I/818i+Qm07UL._AC_UF894,1000_QL80_.jpg'
    ),
    new Snack(
      'GROSS WATER',
      1.00,
      'https://drinkpathwater.com/cdn/shop/files/spongebob-16oz-water-bottle_bab946d0-0dd2-43d8-871b-e9f61df2d8da.png?v=1699579051'
    )



    // {
    //   name: 'Doritos',
    //   price: 3.50,
    //   imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'
    // },
    // {
    //   name: 'Snickers',
    //   price: 3.00,
    //   imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'
    // },
    // {
    //   name: 'Fruit Snacks',
    //   price: .50,
    //   imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'
    // }

  ]

  activeSnack = null

  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())