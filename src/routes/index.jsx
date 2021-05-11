import { BrowserRouter, Redirect } from "react-router-dom";
import { Route } from "react-router";
import Nav from "../components/nav/nav";

export default function RootRouter() {
    return (
        // style={{ position: "relative" }}
        <main>
            <BrowserRouter>
                <Route component={Nav} path="*" />
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
                <Redirect to={"/"} />
                {/* <Route component={Footer} path="*" /> */}
            </BrowserRouter>
        </main>
    );
}

// export const AuthedPrivateRoute = (props: any) => {
//     const { component: Component, ...rest } = props;
//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 localStorage.getItem("token") ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: props.location },
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// };

// export const NotAuthedPrivateRoute = (props: any) => {
//     const { component: Component, ...rest } = props;
//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 localStorage.getItem("token") ? (
//                     <Redirect
//                         to={{
//                             pathname: "/",
//                             state: { from: props.location },
//                         }}
//                     />
//                 ) : (
//                     <Component {...props} />
//                 )
//             }
//         />
//     );
// };
