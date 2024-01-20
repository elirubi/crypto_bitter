import { useState } from 'react';
import LabelInput from '@atoms/LabelInput';

export default function PasswordInput({id, pattern, label, placeholder, required = true}){    

    const [visible, notVisible] = useState(false);

    function toggleVisible(){
        notVisible(!visible);
    }   

    return(

        <div className="flex flex-col text-start w-full">

                                
            <LabelInput
                label={label}
                id={id}
                required={required}                
            />

            <div className='relative'>

                <input className="text-sm h-[40px] px-4 w-full border border-tertiary rounded-full mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner shadow-tertiary/25" placeholder={placeholder} type={visible ? 'text' : 'password'} id={id} pattern={pattern}/>
               
                <input type="checkbox" className='peer absolute top-5 right-4 z-10 opacity-0' onClick={toggleVisible}/>
                
                <i className="text-tertiary/50 fa-solid fa-eye-slash peer-checked:hidden absolute top-5 right-4"></i>

                <i className="text-tertiary/50 fa-solid fa-eye hidden peer-checked:block absolute top-5 right-4"></i>                

            </div>     



        </div>
    )
}