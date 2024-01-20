import ActionHeader from '@molecules/ActionHeader';
import Dashboard from "@molecules/Dashboard";
import MainLayout from "@layouts/MainLayout";
import FormMovements from '@organisms/FormMovements';

export default function Movements(){

    return(

        <MainLayout 
            header={
                <ActionHeader title='Movements'>
                    <Dashboard/>
                </ActionHeader>
            }
        >
                   
            <FormMovements/>                          

        </MainLayout>

    )
}