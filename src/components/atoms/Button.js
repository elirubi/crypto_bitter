import { Link } from 'react-router-dom';

export default function Button({icon, text, to}){

    return(

        <Link to={to} className="flex justify-between px-5 items-center h-[45px] w-[145px] border border-tertiary/10 rounded-full shadow-md shadow-tertiary/20">

            <button className="font-medium text-primary">{text}</button>

            {icon}                        

        </Link>

    )
}