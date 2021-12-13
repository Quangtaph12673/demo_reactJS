import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='text-red-600'>
			<ul>
				<li>
					<Link to='/admin/products'>products</Link>
				</li>
				<li>
					<Link to='/admin/products/add'>add products</Link>
				</li>
				<li>
					{' '}
					<Link to='/login'>login</Link>
				</li>
				<li>
					<Link to='/register'>register</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
