import PrimeButton from "@atoms/PrimeButton";
import PasswordInput from "@molecules/PasswordInput";

export default function EditPswForm(){

    return(    
        
        <section className="flex flex-col container justify-around h-full mb-[140px]">

            <form className="flex flex-col items-center gap-10 container">

                <PasswordInput
                    label='Current password'
                    placeholder='Enter your current password'
                    required='true'
                    id='currentPassword'
                    
                />

                <PasswordInput
                    label='New password'
                    placeholder='Enter your new password'
                    required='true'
                    id='newPassword'
                    
                />

                <PasswordInput
                    label='Confirm new password'
                    placeholder='Confirm your new password'
                    id='confirmPassword'
                    required='true'
                                  
                />

            </form>           

            <PrimeButton to='/profile'>Confirm</PrimeButton>

        </section>
                
    )
}