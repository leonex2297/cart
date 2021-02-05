import React from 'react'
import "./Appbar.css"
import { FaShoppingCart } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import {useGlobalContext} from "../Context"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Appbar = () => {
    const {amount}=useGlobalContext()
    const classes = useStyles();
    return (
        <div className="App__header">
            <h1>Cart</h1>
            <div className={classes.root}>
                <Badge badgeContent={amount} color="primary">
                    <FaShoppingCart style={{ height: "30px", width: "30px" }} />
                </Badge>
            </div>
        </div>
    )
}

export default Appbar
