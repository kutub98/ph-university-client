import { ReactNode } from 'react';
import { useAppSelector } from '../../Redux/Hooks';

// import { useUser } from '../../Redux/auth/authSlice';
import { Navigate } from 'react-router-dom';
import { useToken } from '../../Redux/auth/authSlice';

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useToken);
  // const user = useAppSelector(useUser);

  if (!token) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default ProtectedLayout;
