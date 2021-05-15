// import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { addToBasket } from '../../redux/actions/basketAction';
import { createStyles, makeStyles } from '@material-ui/core';
import { ShoppingBasketOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
	createStyles({})
);

export default function Bakset(){
    const classes = useStyles();
    const basket = useSelector((store) => store.basket.basket);

    function onChangProductQuantity(e, product){
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Магазин покупок</h1>
            <div>
                {basket && basket.map(product => (
                    <div key={product.id}>
                        <img src={`http://afternoon-waters-64991.herokuapp.com/${product.photo}`} alt=''/>
                        <div>
                            <span>{product.name}</span>
                            <span>$ {product.price}</span>
                            <span>Shop: asmnd</span>
                            <div>
                                <span>Quantity:</span>
                                <input type='number' value={product.quantity} onChange={(e) => onChangProductQuantity(e, product)}/>
                                <span>X REMOVE</span>
                            </div>
                        </div>
                        <span>${product.cost}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}