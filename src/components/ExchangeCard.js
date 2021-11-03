import React from 'react'
import Grid from '@mui/material/Grid'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

const ExchangeCard = (props) => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            padding={2}
            backgroundColor={!props.save ? 'black' : '#1c1717'}
            marginTop={2}>
            <Grid
                item
                color={'gray'}>
                {props.name}
            </Grid>
            <Grid
                item
                color={'white'}>
                {props.price}
            </Grid>
            <Grid
                item
                color={Math.sign(props.change) === -1 ? 'red' : 'green'}>
                {props.change}
            </Grid>
            <Grid
                item
                color={'white'}>
                {props.volume}
            </Grid>
            <Grid
                item
                color={'white'}>
                <div>
                    {props.save && <StarRoundedIcon style={{ fill: "yellow" }} onClick={() => { props.handleUpdateExchange(props.exchangeIndex, props.coinIndex) }} />}
                    {!props.save && <StarBorderRoundedIcon style={{ fill: "yellow" }} onClick={() => { props.handleUpdateExchange(props.exchangeIndex, props.coinIndex) }} />}
                </div>
            </Grid>
        </Grid>

    )


}

export default ExchangeCard