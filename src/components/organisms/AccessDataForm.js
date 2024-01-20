import FormInput from "@molecules/FormInput";
import PrimeButton from "@atoms/PrimeButton";
import PasswordInput from "@molecules/PasswordInput";

export default function AccessDataForm(){

    return(    
        
        <section className="flex flex-col container justify-around h-screen">

            <form className="flex flex-col items-center gap-5 container">

                <FormInput
                    label='E-mail'
                    placeholder='Enter your e-mail'
                    type='email'
                    id='email'
                    required='true'
                />

                <PasswordInput
                    label='Password'
                    placeholder='Enter your password'
                    required='true'
                    id='password'                    
                />

                <PasswordInput
                    label='Confirm password'
                    placeholder='Confirm your password'
                    id='confirmPassword'
                    required='true'                                  
                />                

            </form>   

            <PrimeButton to='/register/verifing-email'>Next</PrimeButton> 

        </section>
                
    )
}