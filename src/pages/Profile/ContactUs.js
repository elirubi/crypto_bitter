import MainLayout from '@layouts/MainLayout';
import ActionHeader from '@molecules/ActionHeader';
import ContactInput from '@organisms/ContactInput';

export default function ContactUs(){

    return(

        <MainLayout
            header={<ActionHeader title='Contact us'/>
            }
        >
               
            <ContactInput/>

        </MainLayout>

    )
    
}