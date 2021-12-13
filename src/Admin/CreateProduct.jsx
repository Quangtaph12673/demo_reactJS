import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateProduct = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const history = useHistory();
	useLayoutEffect(() => {
		if (Number(sessionStorage.getItem('auth')) !== 1) {
			history.push('/');
		}
	}, [history]);
	const create = async (data) => {
		if (data) {
			try {
				await axios.post('http://localhost:3001/products', data);
				alert('add successfully');
				history.push('/admin/products');
			} catch (error) {
				alert('add failure');
			}
			return;
		}
		alert('add failure');
	};
	return (
		<div>
			<form onSubmit={handleSubmit(create)}>
				<label htmlFor=''>
					title <input {...register('title', { required: true })} type='text' />
				</label>
				{errors.title && <span>this is required</span>}
				<br />
				<label htmlFor=''>
					img <input {...register('photo', { required: true })} type='text' />
				</label>
				{errors.photo && <span>this is required</span>}
				<br />
				<label htmlFor=''>
					price{' '}
					<input {...register('price', { required: true })} type='number' />
				</label>
				{errors.price && <span>this is required</span>}
				<br />
				<label htmlFor=''>
					desc <input {...register('desc')} type='text' />
				</label>
				<br />
				<button type='submit'>add</button>
			</form>
		</div>
	);
};

export default CreateProduct;
