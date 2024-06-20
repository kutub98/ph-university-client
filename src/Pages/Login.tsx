import React, { useState } from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../Redux/auth/authApi';
import { useAppDispatch } from '../Redux/Hooks';
import { setUser, TUser } from '../Redux/auth/authSlice';
import { VerifyToken } from '../Utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PhForm from '../Components/Form/PhForm';
import PhFormInput from '../Components/Form/PhFormInput';
import Container from '../Components/ui/Container';
import { Button } from 'antd';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  const userId = watch('userId');
  const password = watch('password');
  const [isValid, setIsValid] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({ top: '0', left: '0' });

  const validateInputs = (userId: string, password: string) => {
    return userId === 'A-0001' && password === 'admin13';
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
      toast.success('Successfully logged in');
    } catch (err) {
      toast.error('something went wrong !');
    }
  };

  React.useEffect(() => {
    const valid = validateInputs(userId, password);
    setIsValid(valid);
    if (valid) {
      setButtonStyle({ top: '0', left: '0' });
    }
  }, [userId, password]);

  const handleMouseOver = () => {
    if (!isValid) {
      setButtonStyle({
        top: `${Math.random() * 150 - 125}px`,
        left: `${Math.random() * 450 - 125}px`,
      });
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
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            }}
            onSubmit={handleSubmit(onSubmit)}
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

            <Controller
              name="userId"
              control={control}
              render={({ field }) => (
                <PhFormInput
                  {...field}
                  label="Id"
                  onChange={e => {
                    field.onChange(e);
                    setUserId(e.target.value);
                  }}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PhFormInput
                  {...field}
                  type="password"
                  label="Password"
                  onChange={e => {
                    field.onChange(e);
                    setPassword(e.target.value);
                  }}
                />
              )}
            />

            <Button
              htmlType="submit"
              style={{
                backgroundColor: isValid ? '#F6DCAC' : '#FC0000',
                color: isValid ? '#028391' : '#545050',
                position: 'relative',
                top: buttonStyle.top,
                left: buttonStyle.left,
                transition: 'top 0.1s, left 0.1s',
              }}
              onMouseOver={handleMouseOver}
              disabled={!isValid}
            >
              {isValid ? 'Submit Now' : ' Incorrect'}
            </Button>
          </PhForm>
        </div>
      </Container>
    </div>
  );
};

export default Login;
