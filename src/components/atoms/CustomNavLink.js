import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CustomNavLink({ to, icon, label }){

  const { pathname } = useLocation();
  const isActive = pathname.startsWith(to);

  return (

    <NavLink
      to={to}      
      className="flex flex-col justify-center items-center gap-1"
    >
      <FontAwesomeIcon
        icon={icon}
        className={isActive ? 'text-primary text-4xl bg-secondary p-2 rounded-2xl ' : 'text-tertiary/70 text-4xl p-2'}
      />
      <span className={isActive ? 'text-primary font-bold text-sm' : 'text-tertiary/70 font-semibold text-sm'}>{label}</span>

    </NavLink>

  );

};

