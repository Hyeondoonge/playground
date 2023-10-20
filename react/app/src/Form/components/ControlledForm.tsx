import { FormEvent, useState } from 'react';

interface IFormInputs {
  userName: string;
  userAge: number;
  phoneNumber: string;
}

export default function ControlledForm() {
  const [data, setData] = useState<IFormInputs>({
    userName: '',
    userAge: 0,
    phoneNumber: ''
  });

  console.log('rerendering');

  const onChangeHandler = (event: FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setData({ ...data, [name]: value });
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 200 }}>
      <input
        name='userName'
        required
        maxLength={5}
        value={data.userName}
        onChange={onChangeHandler}
      />
      {!(data.userName === '') && 'userName is required'}
      <input
        type='number'
        name='userAge'
        required
        value={data.userAge}
        onChange={onChangeHandler}
      />
      {!data.userAge && 'userAge is required'}
      <input
        name='phoneNumber'
        pattern='^\d{3}-\d{3,4}-\d{4}$'
        value={data.phoneNumber}
        onChange={onChangeHandler}
      />
      {!/^\d{3}-\d{3,4}-\d{4}$/.test(data.phoneNumber) && 'phoneNumber has to match with pattern'}
      <input type='submit' />
    </form>
  );
}
