import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const history = useHistory();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const login = async (data) => {
		if (data) {
			try {
				const user = await axios.post('http://localhost:3001/login', data);
				sessionStorage.setItem('auth', user.data.user.rule);
				history.push('/');
			} catch (error) {
				alert('login failure');
			}
			return;
		}
		alert('login failure');
	};
	return (
		<div>
			<form onSubmit={handleSubmit(login)}>
				<label htmlFor=''>
					{' '}
					email
					<input type='email' {...register('email', { required: true })} />
				</label>
				{errors.email && <span>This field is required</span>}
				<br />
				<label htmlFor=''>
					{' '}
					password
					<input
						{...register('password', { required: true })}
						type='password'
					/>
				</label>
				{errors.password && <span>This field is required</span>}
				<br />
				<button type='submit'>login</button>
			</form>
		</div>
	);
};

export default Login;
