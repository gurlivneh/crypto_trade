import {coins} from '../data/mockData'
export const getAllCoins = () => {

    return new Promise((resolve, reject) => {

        if (coins) {
            resolve(coins)
        } else {
            reject({ msg: 'somthing went wrong' })
        }

    })
}
