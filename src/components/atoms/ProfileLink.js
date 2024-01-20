import { Link } from 'react-router-dom';

export default function ProfileLink({title, to, logout = false}){

    let isLogout = logout ? " text-whiteCustom bg-primary font-semibold mt-10" : " font-medium bg-secondary text-tertiary"

    return(

        <Link logout={logout} to={to} className={"flex justify-between items-center px-[24px] py-3" + isLogout}>

            <button className='text-sm'>
                {title}
            </button>

            <i className="fa-solid fa-angle-right text-2xl"></i>

        </Link>
    )
}