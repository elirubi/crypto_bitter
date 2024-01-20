import { Link } from "react-router-dom";

export default function PrimeButton({children, to, onClick}){

    return(

        <Link to={to} className="w-full font-semibold text-whiteCustom" >

            <button onClick={onClick} className="w-full h-[40px] bg-primary border border-whiteCustom rounded-full shadow-md shadow-gray-300 uppercase">{children}</button>
        
        </Link>
                  

        
    )
}