import { Link } from "react-router-dom";

export default function SecondButton({children, to}){

    return(
        
      <Link to={to} className="w-full font-semibold text-primary">

        <button className="w-full h-[40px] bg-whiteCustom border border-primary rounded-full shadow-md shadow-gray-300 uppercase">

          {children}
          
        </button>

      </Link>
    )
}