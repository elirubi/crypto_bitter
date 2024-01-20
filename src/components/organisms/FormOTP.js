import PrimeButton from '@atoms/PrimeButton';
import OTPInput from '@atoms/OTPInput';
import Countdown from '@atoms/Countdown';


export default function FormOTP(){

    return(

        <section className='flex flex-col justify-around h-full'>

            <div>

                <p className='text-sm font-semibold text-tertiary px-10 mb-12'>We have sent you an OTP to your email address. Please enter the OTP below to verify your identity.</p>

                <OTPInput/>

                <Countdown/>

            </div>

            <div className="container flex flex-col justify-center items-center gap-5 mb-[45px]">

                <PrimeButton to='/wallet'>Next</PrimeButton>               

            </div>

        </section>
    )
}