/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../Redux/auth/authApi';
import { useAppDispatch } from '../Redux/Hooks';
import { setUser, TUser } from '../Redux/auth/authSlice';
import { VerifyToken } from '../Utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: 'admin13',
    },
  });
  const [login] = useLoginMutation();
  // const toastId = toast.loading('loading');
  const onSubmit = async (userData: FieldValues) => {
    try {
      const userInfor = {
        id: userData.id,
        password: userData.password,
      };

      const res = await login(userInfor).unwrap();
      const user = VerifyToken(res.data.accessToken) as TUser;
      const result = dispatch(
        setUser({ user: { user }, token: res.data.accessToken }),
      );
      navigate(`/${user.role}/dashboard`);
      toast.success(
        // <h1 style={{ background: 'green', color: 'white' }}>
        'Successfully loggedIn',
        // </h1>,
      );
      console.log(result.payload);
    } catch (err) {
      toast.error('something went wrong !');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <img
            style={{ height: '200px', width: '200px' }}
            src="../assets/undraw_coding_re_iv62.svg"
            alt=""
          />
        </div>
        <div>
          <label htmlFor="id">ID</label>
          <input type="text" id="id" {...register('id')} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="passwrod" {...register('password')} />
        </div>
        <div>
          <Button htmlType="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
