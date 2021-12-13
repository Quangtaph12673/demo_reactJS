import { useLayoutEffect, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
	const history = useHistory();
	const [products, setProducts] = useState();
	useLayoutEffect(() => {
		if (Number(sessionStorage.getItem('auth')) !== 1) {
			history.push('/');
			return;
		}
	}, [history]);
	useEffect(() => {
		list();
	}, [history]);
	const list = async () => {
		try {
			const { data } = await axios.get('http://localhost:3001/products');
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>title</th>
						<th>img</th>
						<th>price</th>
						<th>desc</th>
					</tr>
				</thead>
				<tbody>
					{products &&
						products.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.title}</td>
									<td>{item.photo}</td>
									<td>{item.price}</td>
									<td>{item.desc}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Product;
