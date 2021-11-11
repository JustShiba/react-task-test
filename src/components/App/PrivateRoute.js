import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute({ component: Component, ...rest }) {
    let { auth } = useSelector(state => state.authorization)


    return (
        <Route {...rest} render={props => {
            if (!auth) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    );
}