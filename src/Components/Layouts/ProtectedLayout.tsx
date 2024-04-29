import { ReactNode } from 'react';
import { useAppSelector } from '../../Redux/Hooks';
import useToken from 'antd/es/theme/useToken';
// import { useUser } from '../../Redux/auth/authSlice';
import { Navigate } from 'react-router-dom';

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useToken);
  // const user = useAppSelector(useUser);

  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedLayout;
