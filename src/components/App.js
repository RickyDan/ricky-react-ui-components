import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { store, history } from 'STORE';
import routers from 'ROUTE';

const App = () => (
	<Provider store={store}>
		<Router history={history} children={routers} />
	</Provider>
)

export default App;
