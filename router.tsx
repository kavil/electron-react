import React from 'react';
import { router } from 'dva';
const { Router, Switch, Route } = router;
import IntlProvider from './components/IntlProvider';

import Tester from './pages/tester/Tester';
import Index from './pages/index/Index';

function RouterConfig({ history }) {
	// const Login = dynamic({
	//   app,
	//   namespace: 'login',
	//   models: () => [import('./models/Login')],
	//   component: () => import('./routes/Login/Login.tsx'),
	// });

	return (
		<IntlProvider>
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path="/tester" exact component={Tester} />
				</Switch>
			</Router>
		</IntlProvider>
	);
}

export default RouterConfig;
