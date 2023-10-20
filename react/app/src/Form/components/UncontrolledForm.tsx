import { useForm } from 'react-hook-form';

interface IFormInputs {
  userName: string;
  userAge: number;
  phoneNumber: string;
}

export default function UncontrolledForm() {
  const {
    register,
    formState: { errors }
  } = useForm<IFormInputs>();

  console.log('rerendering');

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 200 }}>
      <input {...(register('userName'), { required: true, maxLength: 5 })} />
      {errors.userName && 'userName is required'}
      <input type='number' {...register('userAge', { required: true })} />
      {errors.userAge && 'userAge is required'}
      <input {...register('phoneNumber', { pattern: /^\d{3}-\d{3,4}-\d{4}$/ })} />
      {errors.phoneNumber && 'phoneNumber has to match with pattern'}
      <input type='submit' />
    </form>
  );
}
