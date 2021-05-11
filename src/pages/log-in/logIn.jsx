import { createStyles, makeStyles, Button, Input } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			width: '100%',
			marginTop: '80px',
			display: 'flex',
			justifyContent: 'center'
		},
		card: {
			width: '100%',
			maxWidth: '500px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			boxShadow: '0px 10px 8px 0px rgba(50, 50, 50, 0.3)',
			padding: '20px'
		},
		form: {
			display: 'flex',
			width: '100%',
			flexDirection: 'column',
			alignItems: 'center'
		},
		submitButton: {
			marginTop: '40px'
		},
		input: {
			marginTop: '20px',
			width: '100%',
			padding: '5px'
		}
	})
);

export default function SignUp() {
	const classes = useStyles();

	const onSubmit = (e) => {
		e.preventDefault();

		console.log('Submit');
	};

	return (
		<div className={classes.root}>
			<div className={classes.card}>
				<h2>Войти</h2>
				<form className={classes.form} onSubmit={onSubmit}>
					<Input className={classes.input} id="standard-basic" placeholder="Почта" type="text" />
					<Input className={classes.input} id="standard-basic" placeholder="Пароль" type="password" />
					<Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
						отправить
					</Button>
				</form>
			</div>
		</div>
	);
}
