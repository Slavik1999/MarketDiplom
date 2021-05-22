import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {fetchProfile} from '../../redux/actions/profileAction'

const useStyles = makeStyles((theme) =>
	createStyles({
        root: {
            width: '40%',
            boxShadow: '0px 10px 8px 0px rgba(50, 50, 50, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '40px',
            boxSizing: 'border-box',
            margin: '0 auto'
        },
        title: {

        },
        info: {
            display: 'flex',
            flexDirection: 'column',
        },
        text: {
            fontWeight: 500,
            color: 'gray',
            marginTop: "20px"
        },
        button: {
            marginTop: '20px'
        }
    })
)

export default function Profile(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const profileData = useSelector((store) => store.profile.profileData);
    const history = useHistory();


    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch])

    return (
        <div className={classes.root}>
            <h3  className={classes.title}>Профиль</h3>
            <div  className={classes.info}>
                <span  className={classes.text}>Имя: {profileData?.name}</span>
                <span  className={classes.text}>Почта: {profileData?.email}</span>
                <span  className={classes.text}>Телефон: {profileData?.phone}</span>
                <Button onClick={() => history.push('my-orders')} className={classes.button} color='primary' variant="contained">Мои покупки</Button>
                <Button onClick={() => history.push('my-products')} className={classes.button} color='primary' variant="contained">Мои продукты</Button>
                <Button onClick={() => history.push('my-auctions')} className={classes.button} color='primary' variant="contained">Мои аукционы</Button>
            </div>
        </div>
    )
}