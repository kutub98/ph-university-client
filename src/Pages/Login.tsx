import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../Redux/auth/authApi';

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: "admin13"
    }
  });
  const [login, { data, isError }] = useLoginMutation();

  console.log(data, 'data')
  console.log(isError, 'data is isError')
  const onSubmit = (userData) => {
    const userInfor = {
      id: userData.id,
      password: userData.password
    }
    console.log(userInfor)
    login(userInfor)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <img style={{height:"200px", width:"200px"}} src="../assets/undraw_coding_re_iv62.svg" alt="" />
        </div>
        <div>
          <label htmlFor="id">ID</label>
          <input type="text" id='id'  {...register('id')} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id='passwrod' {...register('password')} />
        </div>
        <div>
          <Button htmlType="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;