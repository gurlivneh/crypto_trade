import { getAllCoins } from "../../services/requests"

export const setCoins = (coins) => {
    return {
        type: 'SET_COINS',
        coins
    }
}

export const updateCoins = (index) => {
    return {
        type: 'UPDATE_COINS',
        index
    }
}

export const updateExchange= (exchangeIndex, coinIndex) => {
    return {
        type: 'UPDATE_EXCHANGE',
        payload: {exchangeIndex: exchangeIndex, coinIndex:coinIndex}
    }
}

export const getCoins = () => {

    return (dispatch, getState) => {
        
        getAllCoins().then( res => {
            console.log('get all coins res', res)
            //add hide flag
            res.forEach(element => {
              element.hide = false
              element.exchange.forEach(item => {
                  item.save = false
              })  
            });
            dispatch(setCoins(res))
        })

    }
}

