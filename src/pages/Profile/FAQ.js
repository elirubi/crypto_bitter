import MainLayout from '@layouts/MainLayout';
import ActionHeader from '@molecules/ActionHeader';
import Accordion from '@organisms/Accordion';

export default function FAQ(){

    return(

        <MainLayout
            header={<ActionHeader title='FAQ'/>}
        >

            <Accordion/>

        </MainLayout>

    )

}