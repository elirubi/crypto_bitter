import MainLayout from '@layouts/MainLayout';
import ActionHeader from '@molecules/ActionHeader';
import EditUserDataForm from '@organisms/EditUserDataForm';

export default function EditUserData(){

    return(

        <MainLayout
            header={<ActionHeader title='Edit user data'/>}
        >

            <EditUserDataForm/>

        </MainLayout>

    )
    
}