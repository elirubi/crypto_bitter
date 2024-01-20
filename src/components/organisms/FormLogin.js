import FormInput from '@molecules/FormInput'
import PrimeButton from '@atoms/PrimeButton'
import SecondButton from '@atoms/SecondButton'
import PasswordInput from '@molecules/PasswordInput'

export default function FormLogin(){

    return(

        <section className="container flex flex-col justify-evenly items-center gap-20 mt-10 h-full">
            
            <form className='container flex flex-col justify-center items-center gap-8'>

                <FormInput
                    label='E-mail'
                    id='email'
                    required='true'
                    type='email'
                    placeholder='Enter your e-mail'
                />

                <PasswordInput
                    label='Password'
                    id='password'
                    required='true'
                    placeholder='Enter your password'                   
                />

            </form>

            <div className="container flex flex-col justify-center items-center gap-5 mb-[45px]">

                <PrimeButton to='/login/OTP'>Next</PrimeButton>

                <SecondButton to='/register'>Create new account</SecondButton>

            </div>

        </section>
    )
}