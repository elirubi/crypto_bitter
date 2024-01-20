import FormInput from '@molecules/FormInput';
import PrimeButton from '@atoms/PrimeButton';
import CurrencyInput from 'react-currency-input-field';
import LabelInput from '@atoms/LabelInput';

export default function FormSend(){

    return(

        <section className='w-full h-full flex flex-col justify-evenly mb-32'>
            
            <div className='flex flex-col justify-center gap-8'>

                <FormInput
                    label='Withdrawal address'
                    placeholder='Withdrawal address'
                    required='true'
                    id='address'
                />

                <div className="flex flex-col text-start w-full">
                    
                    <LabelInput 
                        label='Withdrawal amount' 
                        required={true}
                        id='amount'
                    />                        
        
                    <CurrencyInput className="text-sm h-[40px] px-4 w-full border border-tertiary rounded-full mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner shadow-tertiary/25" placeholder='Withdrawal amount' id='amount'
                    decimalSeparator="," groupSeparator="." prefix='$ '/>
        
                </div>

            </div>

            <PrimeButton to='/wallet'>Send</PrimeButton>

        </section>
    )
}