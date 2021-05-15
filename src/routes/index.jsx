import { BrowserRouter, Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import Nav from '../components/nav/nav';
import LogIn from '../pages/log-in/logIn';
import SignUp from '../pages/sign-up/SignUp';
import Catalog from '../pages/catalog/catalog';
import Auctions from "../pages/auction/auctions";
import AuctionBid from "../pages/auction/auctionBid";
import Product from '../pages/product/product'
import Auction from "../pages/auction/auction";

export default function RootRouter() {
	return (
		// style={{ position: "relative" }}
		<main>
			<BrowserRouter>
				<Route component={Nav} path="*" />
				<NotAuthedPrivateRoute component={LogIn} path="/log-in" />
				<NotAuthedPrivateRoute component={SignUp} path="/sign-up" />
				<Route exact component={Auctions} path="/auctions" />
				<Route exact component={Auction} path="/auctions/:id" />
				<Route component={Catalog} path='/catalog'/>
				<Route component={Product} path='/product/:id'/>
				{/* <NotAuthedPrivateRoute
                            component={ForgotPasswordPages}
                            path="/forgot-password"
                        /> */}
				{/* <Route
                            exact
                            component={MainAssetPage}
                            path="/asset-view/:id"
                        /> */}
				{/* <AuthedPrivateRoute
                            component={IssuerPages}
                            path="/issuer" /> */}
				{/* <Route exact component={LandingPage} path="/" /> */}
                {/* <Redirect from="/" to="/catalog" /> */}
				{/* <Redirect to='/' />  */}
				{/* <Route component={Footer} path="*" /> */}
			</BrowserRouter>
		</main>
	);
}

export const AuthedPrivateRoute = (props) => {
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("token") ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/log-in",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export const NotAuthedPrivateRoute = (props) => {
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("token") ? (
                    <Redirect
                        to={{
                            pathname: "/catalog",
                            state: { from: props.location },
                        }}
                    />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};
