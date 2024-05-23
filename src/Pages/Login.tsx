/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'antd';
import { FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../Redux/auth/authApi';
import { useAppDispatch } from '../Redux/Hooks';
import { setUser, TUser } from '../Redux/auth/authSlice';
import { VerifyToken } from '../Utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PhForm from '../Components/Form/PhForm';
import PhFormInput from '../Components/Form/PhFormInput';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const defaultValues = {
    userId: 'A-0001',
    password: 'admin13',
  };
  const onSubmit = async (userData: FieldValues) => {
    try {
      const userInfor = {
        id: userData.userId,
        password: userData.password,
      };

      const res = await login(userInfor).unwrap();

      const user = VerifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: { user }, token: res.data.accessToken }));
      navigate(`/${user.role}/dashboard`);
      toast.success('Successfully loggedIn');
    } catch (err) {
      toast.error('something went wrong !');
    }
  };
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        margin: 'auto',
      }}
    >
      <PhForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div>
          <img
            style={{ height: '200px', width: '200px' }}
            src="../assets/undraw_coding_re_iv62.svg"
            alt=""
          />
        </div>

        <PhFormInput type="text" name="userId" label="Id" />

        <PhFormInput type="text" name="password" label="Password" />

        <Button htmlType="submit">Submit</Button>
      </PhForm>
    </div>
  );
};

export default Login;
