import MainLayout from '@layouts/MainLayout';
import ActionHeader from '@molecules/ActionHeader';
import FormReceive from '@organisms/FormReceive';


export default function Receive(){

    return(

        <MainLayout
            header={<ActionHeader title='Receive'/>}>
            
            <FormReceive/>        

        </MainLayout>

    )
}