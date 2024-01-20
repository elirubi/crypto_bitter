import GuestLayout from '@layouts/GuestLayout'
import FormInput from '@molecules/FormInput'
import PrimeButton from '@atoms/PrimeButton'


export default function Invite(){

    return(

        <GuestLayout title=''>

            <div className='container flex flex-col gap-16 mb-20'>

                <FormInput
                
                    label='Referral Code'
                    id='referral-code'
                    required='true'
                    placeholder='REFERRAL01'
                />

                <PrimeButton to='/register'>Next</PrimeButton>

            </div>

            <p className='text-xs text-tertiary/50'>You will only be eligible to receive your signup bonus after completing your account setup.</p>

        </GuestLayout>

    )
    
}