import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAuth: boolean;
  redirectPath?: string
}

export const ProtectedRoute = ({ isAuth, redirectPath = '/' }: Props) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
