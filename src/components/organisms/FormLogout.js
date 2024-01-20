import PrimeButton from '@atoms/PrimeButton';
import SecondButton from '@atoms/SecondButton';

export default function FormLogout(){

    return(

        <section className='w-full h-full flex flex-col items-center justify-center mb-[115px] gap-20'>
            
            <h2 className='font-medium text-tertiary text-lg'>Are you sure to log out?</h2>

            <div className='w-full flex flex-col gap-5'>

                <PrimeButton to='/'>Yes, log out</PrimeButton>
                <SecondButton to='/profile'>No, go back</SecondButton>

            </div>

        </section>  
    )
}