import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const signUp = async (data) => {
		if (data) {
			data['rule'] = 0;
			try {
				await axios.post(' http://localhost:3001/register', data);
				alert('register successfully');
			} catch (error) {
				alert('register failure');
			}

			return;
		}
		alert('register failure');
	};

	return (
		<div>
			<form onSubmit={handleSubmit(signUp)}>
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
				<button type='submit'>register</button>
			</form>
		</div>
	);
};

export default Register;
