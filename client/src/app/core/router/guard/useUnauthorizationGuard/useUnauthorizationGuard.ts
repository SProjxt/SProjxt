import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../path';
import { RootState } from '../../../../store/types';

const useUnauthorizationGuard = () => {
  const routerHistory = useHistory();
  const authorizationState = useSelector(
    (state: RootState) => state.auth.token
  );
  const isAccessible = !authorizationState;
  if (!isAccessible) routerHistory.replace(ROUTES.FEATURES);
  return isAccessible;
};

export default useUnauthorizationGuard;
