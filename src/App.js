import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Client/Home';
import CreateProduct from './Admin/CreateProduct';
import Product from './Admin/Product';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path='/admin/products/add' component={CreateProduct} />
					<Route path='/admin/products' component={Product} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
