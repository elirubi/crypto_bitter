import FormInput from '@molecules/FormInput';
import PrimeButton from '@atoms/PrimeButton';

export default function FormSend(){

    return(

        <section className='w-full h-full flex flex-col justify-evenly mb-32'>
            
            <div className='flex flex-col justify-center gap-8'>

                <FormInput
                    label='Amount in USD'
                    placeholder='Insert amount in USD'
                    required='true'
                    id='USDamount'
                    type='number'
                />

                <FormInput
                    label='Conversion in BTC'
                    placeholder='Amount in BTC'
                    required='true'
                    id='BTCamount' 
                    type='number'               
                />

            </div>

            <PrimeButton to='/wallet'>Send</PrimeButton>

        </section>
    )
}