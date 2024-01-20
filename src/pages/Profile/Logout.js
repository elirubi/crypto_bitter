import MainLayout from '@layouts/MainLayout';
import ActionHeader from '@molecules/ActionHeader';
import FormLogout from '@organisms/FormLogout';

export default function Logout(){

    return(

        <MainLayout
            header={<ActionHeader title='Log out'/>}
        >

            <FormLogout/>         

        </MainLayout>
        
    )
}