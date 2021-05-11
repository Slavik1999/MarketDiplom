import { AppBar, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
	createStyles({
		menuLink: {
			marginRight: theme.spacing(2),
			color: '#ffffff',
			textDecoration: 'none',
			fontSize: 17
		},
		label: {
			fontSize: 20,
			marginRight: theme.spacing(10)
		},
		root: {
			display: 'flex',
			justifyContent: 'space-between',
			flexGrow: 1
		},
		navLeft: {
			display: 'flex',
			alignItems: 'center'
		},
		navRight: {
			display: 'flex',
			alignItems: 'center'
		},
		activeMenuLink: {
			fontWeight: 700
		}
	})
);

export default function Nav() {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar className={classes.root}>
				{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<Menu />
				</IconButton> */}
				<div className={classes.navLeft}>
					<NavLink
						to="/catalog"
						activeClassName={classes.activeMenuLink}
						className={`${classes.menuLink} ${classes.label}`}
					>
						Торговая площадка
					</NavLink>
					<NavLink to="/catalog" activeClassName={classes.activeMenuLink} className={classes.menuLink}>
						Каталог
					</NavLink>
					<NavLink to="/auction" activeClassName={classes.activeMenuLink} className={classes.menuLink}>
						Аукцион
					</NavLink>
					<NavLink to="/busket" activeClassName={classes.activeMenuLink} className={classes.menuLink}>
						Корзина
					</NavLink>
				</div>
				<div className={classes.navRight}>
					<NavLink to="/log-in" activeClassName={classes.activeMenuLink} className={classes.menuLink}>
						Логин
					</NavLink>
					<NavLink to="/sign-up" activeClassName={classes.activeMenuLink} className={classes.menuLink}>
						Регистрация
					</NavLink>
				</div>
			</Toolbar>
		</AppBar>
	);
}
