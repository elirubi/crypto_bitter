import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackButton(){

    const navigate = useNavigate();

    function Back(){
        navigate(-1);
    }

    return(

        <button onClick={Back} className='flex justify-center items-center gap-1'>

            <FontAwesomeIcon icon={faCircleLeft} className='text-tertiary text-3xl'/>
            
            <span className='font-medium text-sm text-tertiary'>Back</span>
    
        </button>

    )
}