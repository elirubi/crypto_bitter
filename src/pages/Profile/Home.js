import MainLayout from '@layouts/MainLayout';
import HomeHeader from '@molecules/HomeHeader';
import ProfileHomeForm from '@organisms/ProfileHomeForm';

export default function Home(){

    return(
    
        <MainLayout 
            header={<HomeHeader title='Profile'/>}
        >

            <ProfileHomeForm/>           
                        
        </MainLayout>
        
    )

}