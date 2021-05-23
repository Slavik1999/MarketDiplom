import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { createStyles, makeStyles } from '@material-ui/core';
import { useEffect } from "react";
import {fetchOrder } from "../../redux/actions/ordersActions";
import { fetchProfile } from "../../redux/actions/profileAction";
import { BASE_URL } from "../../constants/constants";

const useStyles = makeStyles((theme) =>
	createStyles({
        root: {
            width: '100%',
            padding: '20px',
            boxSizing: 'border-box'
        },
        rootHeader: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '140px',
        },
        rootContent: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        },
        ordersRoot: {
            width: '55%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0px 10px 8px 0px rgba(50, 50, 50, 0.25)',
            backgroundColor: 'rgba(50, 50, 50, 0.05)',
            padding: '20px',
            boxSizing: 'border-box'
        },
        ordersTotal: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '20px'
        },
        orderItems: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        orderItem: {
            height: '150px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            boxShadow: '0px 10px 8px 0px rgba(50, 50, 50, 0.05)',
            marginTop: '20px',
            backgroundColor: 'white'
        },
        orderItemLeft: {
            display: 'flex',

        },
        orderItemImg: {
            width: '30%',
            objectFit: 'cover',
            marginRight: "20px",
        },
        orderItemInfo: {
            display: 'flex',
            flexDirection: 'column'
        },
        orderItemTotal: {

        },
        ordersDelivery: {
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            boxShadow: '0px 10px 8px 0px rgba(50, 50, 50, 0.25)',
            backgroundColor: 'rgba(50, 50, 50, 0.05)',
            padding: '40px',
            boxSizing: 'border-box',
        },
        deliveryTop: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid rgba(50, 50, 50, 0.15)',
            paddingBottom: '20px',
            boxSizing: 'border-box'
        },
        deliveryMid: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px'
        },
        deliveryBot: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px'
        },
        textGray: {
            fontWeight: 500,
            color: 'gray',
            fontSize: '15px'
        },
        textBlue: {
            fontWeight: 500,
            color: 'blue',
            fontSize: '17px'
        }
    })
)

export default function OrderDetails(){
    const classes = useStyles();
    const params = useParams();
    const dispatch = useDispatch();
    const order = useSelector((store) => store.orders.order);
    const user = useSelector((store) => store.profile.profileData);

    useEffect(() => {
        dispatch(fetchOrder(params.id))
        dispatch(fetchProfile());
    }, [dispatch, params])

    useEffect(() => {
        console.log('order', order);
        console.log(user);
    }, [order, user])

    return (
        <div className={classes.root}>
            <div className={classes.rootHeader}>
                <h3>Детали заказа</h3>
                <span className={classes.textGray}>Код заказа: {order.id}</span>
                <span className={classes.textGray}>Статус транзакции: {order.transactionStatus}</span>
            </div>
            <div className={classes.rootContent}>
                <div className={classes.ordersRoot}>
                    <div className={classes.orderItems}>
                        {order?.orderItems && order?.orderItems.map(orderItem => (
                            <div key={orderItem.id} className={classes.orderItem}>
                                <div className={classes.orderItemLeft}>
                                    <img className={classes.orderItemImg} src={`${BASE_URL}${orderItem.product.photo}`} alt='orderPhoto'/>
                                    <div className={classes.orderItemInfo}>
                                        <span className={classes.textBlue}>{orderItem.product.name}</span>
                                        <span  style={{marginTop: "20px"}} className={classes.textGray}>$ {orderItem.product.price} x ${orderItem.quantity}</span>
                                        <span className={classes.textGray}>Статус: {orderItem.orderStatus}</span>
                                    </div>
                                </div>
                                <span  className={classes.textGray}>
                                    $ {orderItem.price}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div  className={classes.ordersTotal}>
                        <span className={classes.textGray}>
                           Общая сумма: $ {order?.totalSum}
                        </span>
                    </div>
                </div>
                <div className={classes.ordersDelivery}>
                    <div className={classes.deliveryTop}>
                        <span  className={classes.textBlue}>
                            Доставка для: 
                        </span>
                        <span style={{marginTop: "20px"}}  className={classes.textGray}>{user?.name} {user?.suname}</span>
                        <span  className={classes.textGray}>{user?.email}</span>
                    </div>
                    <div className={classes.deliveryMid}>
                        <span  className={classes.textGray}>{order?.address}</span>
                        <span  className={classes.textGray}>{order?.city}</span>
                        <span  className={classes.textGray}>{order?.country}</span>
                    </div>
                    <div className={classes.deliveryBot}>
                        <span  className={classes.textGray}>Спасибо за покупки с нами!</span>
                        <span  className={classes.textGray}>Вы можете отслеживать статус покупки на этой странице</span>
                    </div>
                </div>
            </div>
        </div>
            
    )
}