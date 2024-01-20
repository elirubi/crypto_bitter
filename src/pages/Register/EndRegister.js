import GuestLayout from '@layouts/GuestLayout'
import Interstitial from '@organisms/Interstitial'

export default function EndRegister(){

    return(

        <GuestLayout>

            <Interstitial
                code='regular fa-clock'
                textIcon='Verifing your account'
                text='We’ll notice you when your account will be verified.
                It could take up to 24 h in case of many applications.'
                to='/'
                textButton='Home'
            />

        </GuestLayout>

    )
}