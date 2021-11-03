import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCoins, updateCoins, updateExchange, setCoins } from '../state/actions/coinsActions'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ExchangeCard from '../components/ExchangeCard';
import { Btc, Xrp, Ltc } from 'react-cryptocoins';


const Trading = () => {
    const coins = useSelector((state) => state.coinsReducer.coins)
    const dispatch = useDispatch()

    const handleCoinsToHide = (index) => {
        dispatch(updateCoins(index))

    }

    const handleUpdateExchange = (exchangeIndex, coinIndex) => {
        dispatch(updateExchange(exchangeIndex, coinIndex))

    }

    useEffect(() => {
        const localCoinsArr = localStorage.getItem('coins')
        if (localCoinsArr) {
            const initialCoinsArr = JSON.parse(localCoinsArr)
            dispatch(setCoins(initialCoinsArr))
        } else {
            dispatch(getCoins())

        }
    }, [dispatch])






    return (
        <Grid
            container
            backgroundColor='black'
            padding={2}>
            <Grid
                container
                spacing={2}>
                {coins && coins.map((item, i) => {
                    return (
                        <Grid
                            item
                            xs={4}
                            key={i}
                        >
                            <Button
                                value={item.name}
                                spacing={2}
                                style={{ backgroundColor: item.hide ? 'darkblue' : 'blue', color: 'gray', width: '90%' }}
                                onClick={() => handleCoinsToHide(i)}
                            > {item.name}
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid
                container
                backgroundColor='black'
                justifyContent='center'
                padding={2}>
                {coins && coins.map((item, index) => {
                    const logo = item.logoUrl
                    return (
                        !item.hide &&
                        <Grid
                            item
                            xs={12}
                            color={'white'}
                            key={index}
                        >
                            <div style={{
                                display:'flex', 
                                flexDirection:'row', 
                                alignItems:'center', 
                                justifyContent:'space-around', 
                                width:'70px'}}>
                                {/* <img
                                    src={logouRL}
                                    alt=""
                                    width="20"
                                    height="20"
                                /> */}
                                {item.name === 'BTC' && <Btc/>}
                                {item.name === 'XRP' &&<Xrp/>}
                                {item.name === 'LTC' &&<Ltc/>}
                                <p key={item.name}>{item.name}</p>

                            </div>
                            {item.exchange.map((exchangeItem, i) => {
                                return (
                                    <ExchangeCard
                                        key={i}
                                        name={exchangeItem.name}
                                        price={exchangeItem.price}
                                        change={exchangeItem.change}
                                        volume={exchangeItem.volume}
                                        save={exchangeItem.save}
                                        handleUpdateExchange={handleUpdateExchange}
                                        coinIndex={index}
                                        exchangeIndex={i}
                                    />

                                )
                            })}
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>

    )
}

export default Trading