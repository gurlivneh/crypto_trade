const defaultState = {
    coins: null
}

const coinsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'SET_COINS':
            localStorage.setItem('coins', JSON.stringify(action.coins))
            return Object.assign({}, state, {
                coins: action.coins
            })
        case 'UPDATE_COINS': {
            const newArray = [...state.coins]
            newArray[action.index].hide = !newArray[action.index].hide
            localStorage.setItem('coins', JSON.stringify(newArray))
            return {
                ...state,
                coins: newArray,
            }
        }
        case 'UPDATE_EXCHANGE': {
            const newArray = [...state.coins]
            newArray[action.payload.coinIndex].exchange[action.payload.exchangeIndex].save = !newArray[action.payload.coinIndex].exchange[action.payload.exchangeIndex].save
            localStorage.setItem('coins', JSON.stringify(newArray))
            return {
                ...state,
                coins: newArray,
            }
        }
        default:
            return state
    }
}

export default coinsReducer;