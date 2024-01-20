import MainLayout from '@layouts/MainLayout';
import ActionHeader from '@molecules/ActionHeader';
import EditPswForm from '@organisms/EditPswForm';

export default function EditPassword(){

    return(

        <MainLayout
            header={<ActionHeader title='Edit password'/>}
        >

            <EditPswForm/>

        </MainLayout>

    )
    
}