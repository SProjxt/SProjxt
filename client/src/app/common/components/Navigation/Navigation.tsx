import React from 'react';
import { ROUTES } from '../../../core/router/path';
import { NavLink, useLocation } from 'react-router-dom';
import { BsKanbanFill, BsFillPeopleFill } from 'react-icons/bs';
import { IoStatsChart } from 'react-icons/io5';
import { IoIosListBox } from 'react-icons/io';

const Navigation: React.FC = () => {
  const routerLocation = useLocation();
  return (
    <div className="h-100 d-flex flex-column align-items-center justify-content-center">
      <NavLink
        to={ROUTES.FEATURES__BOARD}
        className={
          'navigation-item my-3 ' +
          (routerLocation.pathname.includes(ROUTES.FEATURES__BOARD)
            ? ''
            : 'non-active')
        }
      >
        <BsKanbanFill />
      </NavLink>
      <NavLink
        to={ROUTES.FEATURES__BACKLOG}
        className={
          'navigation-item my-3 ' +
          (routerLocation.pathname.includes(ROUTES.FEATURES__BACKLOG)
            ? ''
            : 'non-active')
        }
      >
        <IoIosListBox />
      </NavLink>
      <NavLink
        to={ROUTES.FEATURES__STATISTICS}
        className={
          'navigation-item my-3 ' +
          (routerLocation.pathname.includes(ROUTES.FEATURES__STATISTICS)
            ? ''
            : 'non-active')
        }
      >
        <IoStatsChart />
      </NavLink>
      <NavLink
        to={ROUTES.FEATURES__MEMBER}
        className={
          'navigation-item my-3 ' +
          (routerLocation.pathname.includes(ROUTES.FEATURES__MEMBER)
            ? ''
            : 'non-active')
        }
      >
        <BsFillPeopleFill />
      </NavLink>
    </div>
  );
};

export default Navigation;
