/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../Redux/auth/authApi';
import { useAppDispatch } from '../Redux/Hooks';
import { setUser, TUser } from '../Redux/auth/authSlice';
import { VerifyToken } from '../Utils/verifyToken';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PhForm from '../Components/Form/PhForm';
import PhFormInput from '../Components/Form/PhFormInput';
import Container from '../Components/ui/Container';
import { Button } from 'antd';

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
        width: '100%',
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#01204E',
            padding: '10px 50px',
            height: '60px',
            justifyContent: ' space-between',
          }}
        >
          <Link
            style={{
              color: 'white',
              listStyle: 'none',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: '500',
            }}
            to="/login"
          >
            Home
          </Link>
          <Link
            style={{
              color: 'white',
              listStyle: 'none',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: '500',
            }}
            to="/"
          >
            Login
          </Link>
        </div>
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            display: 'flex',
            background: '#F6DCAC',
            height: '90vh',
            margin: 'auto',
          }}
        >
          <PhForm
            style={{
              width: '500px',
              padding: '20px',
              color: 'white',
              borderRadius: '8px',
              background: '#028391',

              boxShadow:
                ' rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            }}
            onSubmit={onSubmit}
            defaultValues={defaultValues}
          >
            <div
              style={{
                width: '100%',
                display: 'block',
                margin: '0 auto',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <img
                style={{
                  height: '100px',
                  width: '100px',
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLE5jeVKhxvxiM7Hxn1iw3z-hKBTcICQUb7kNYtZTlXw&s"
                alt=""
              />
              <h2 style={{ color: 'white' }}>Login to PH University</h2>
            </div>

            <PhFormInput type="text" name="userId" label="Id" />

            <PhFormInput type="text" name="password" label="Password" />

            <Button htmlType="submit">Submit</Button>
          </PhForm>
        </div>
      </Container>
    </div>
  );
};

export default Login;
