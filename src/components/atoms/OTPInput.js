import { useRef } from 'react';

export default function OTPInput(){

    const inputRefs = useRef([]);

    // Avanza al campo successivo se il valore è una singola cifra

    const handleInputChange = (e, index) => {
      const value = e.target.value;  
      
      if (value.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    };


    // Torna al campo precedente se il campo corrente è vuoto e viene premuto il tasto backspace
  
    const handleInputBackspace = (e, index) => {
      
      if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };

    return(                    

      <form className="container flex justify-center w-full gap-2">                

          {[0, 1, 2, 3, 4, 5].map((index) => (

              <input
                  className='h-[45px] w-[45px] border border-tertiary/50 rounded-[15px] bg-whiteCustom shadow-inner shadow-tertiary/25 text-center text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
                  placeholder='0'
                  key={index}
                  type="number"
                  maxLength={1}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleInputBackspace(e, index)}
                  ref={(ref) => (inputRefs.current[index] = ref)}
              />
          ))}                                   

      </form>

    )
}