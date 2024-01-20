import CurrencyConverter from "@atoms/CurrencyConverter";
import EyeIcon from "@icons/EyeIcon";
import { useState } from 'react';

export default function Dashboard({className}){

    const [censored, visible] = useState(true);

    function toggleVisible(){
        visible(!censored);
    }   

    return(

        <div className={`px-[24px] flex items-center justify-between shadow-lg shadow-tertiary/30 rounded-[40px] min-w-[345px] py-3 bg-whiteCustom ${className}`}>
                    
            <div>  

                <h3 className="uppercase text-tertiary/70 text-xs mb-1">Cash Balance</h3>

                {/* importi visibili */}

                <div className={censored ? 'hidden' : 'block'}>               

                    <CurrencyConverter
                        dollarAmount='1234'
                        classNameUSD='text-2xl font-medium text-tertiary'
                        classNameBTC='font-light text-sm text-tertiary'
                    /> 

                </div> 

                {/* fine importi visibili */}  

                {/* importi censurati */}

                <div className={censored ? 'block' : 'hidden'}>

                    <p className='text-2xl font-medium text-tertiary'>***,00 USD</p>
                    <p className='font-light text-sm text-tertiary'>***,00 BTC</p>

                </div>

                {/* fine importi censurati */}                

            </div> 

            <div className="relative ">

                {censored ? 
                    ( <EyeIcon dark={true}/> ) : 
                    ( <EyeIcon dark={true} code='-slash'/> ) 
                }
                
                <input type="checkbox" className="h-8 w-8 absolute z-10 -top-4 right-0 opacity-0"  onClick={toggleVisible}/>

            </div>  

        </div>
    )
}