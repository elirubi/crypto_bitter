import { Link } from "react-router-dom";

export default function ThirdButton({children, to}){

    return(

        <button className="w-full h-[40px] bg-whiteCustom">
          <Link to={to} className="w-full font-semibold text-[16px] uppercase text-primary">{children}</Link>
        </button>
    )
}