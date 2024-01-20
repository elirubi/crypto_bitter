import MainLayout from '@layouts/MainLayout';
import ActionHeader from '@molecules/ActionHeader';
import FormSend from '@organisms/FormSend';

export default function Send(){

    return(

        <MainLayout
            header={<ActionHeader title='Send'/>}>
            
            <FormSend/>            

        </MainLayout>

    )
}