import { Switch, Route, StaticRouter} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import Main from '../pages';
import login from '../pages/login';
import profile from '../pages/profile';

const Routes = () => (
    <StaticRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={login} />
            <Route exact path="/profile" component={profile} />
        </Switch>
    </StaticRouter>
)
export default Routes;