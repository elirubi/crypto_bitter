import GuestLayout from '@layouts/GuestLayout'
import Interstitial from '@organisms/Interstitial'

export default function VerifEmail(){

    return(

        <GuestLayout>

            <Interstitial
                code='solid fa-envelope'
                textIcon='Verifing your e-mail'
                text='Please check your email to verify your identity.'
                to='/register/userdata'
                textButton='Next'
            />

        </GuestLayout>

    )
}