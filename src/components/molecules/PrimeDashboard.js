import CurrencyConverter from "@atoms/CurrencyConverter";
import EyeIcon from "@icons/EyeIcon";
import { useState } from 'react';


export default function PrimeDashboard(){

    const [censored, visible] = useState(false);

    function toggleVisible(){
        visible(!censored);
    }   

    return(

        <div className="mx-[24px] px-[24px] flex items-center justify-between border border-secondary shadow-lg shadow-tertiary/25 rounded-[40px] min-w-[345px] h-[145px] bg-primary -mt-12">
                    
            <div>  

                <h3 className="uppercase text-whiteCustom/70 text-xs mb-2">Cash Balance</h3>

                {/* importi visibili */}

                <div className={censored ? 'block' : 'hidden'}>               

                    <CurrencyConverter
                        dollarAmount='1234'
                        classNameUSD='text-3xl font-medium text-whiteCustom mb-1'
                        classNameBTC='font-light text-whiteCustom'
                    /> 

                </div> 

                {/* fine importi visibili */}  

                {/* importi censurati */}

                <div className={censored ? 'hidden' : 'block'}>

                    <p className='text-3xl font-medium text-whiteCustom mb-1'>***,00 USD</p>
                    <p className='font-light text-whiteCustom'>***,00 BTC</p>

                </div>

                {/* fine importi censurati */}                

            </div> 

            <div className="relative ">

                {censored ? 
                    ( <EyeIcon code='-slash'/> ) : 
                    ( <EyeIcon/> ) 
                }
                
                <input type="checkbox" className="h-8 w-8 absolute z-10 -top-4 right-0 opacity-0"  onClick={toggleVisible}/>

            </div>  

        </div>
    )
}