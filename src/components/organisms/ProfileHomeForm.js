import ProfileLink from '@atoms/ProfileLink';
import TitleProfLink from '@atoms/TitleProfLink';

export default function ProfileHomeForm(){

    return(

        <section className='flex flex-col w-screen justify-between h-full mb-[135px] mt-10'>

            <div className='flex flex-col items-left w-screen'>

                <TitleProfLink title='Personal Data'/>
             
                <ProfileLink
                    title='Edit User Data'
                    to='/profile/edit-user-data'
                    
                />                            

            </div>           

            <div className='flex flex-col items-left w-screen'>

                <TitleProfLink title='Security'/>
                
                <ProfileLink
                    title='Edit Password'
                    to='/profile/edit-password'
                />  

            </div>            

            <div className='flex flex-col items-left w-screen'>

                <TitleProfLink title='Support'/>

                <div className='flex flex-col gap-2'>
             
                    <ProfileLink
                        title='Contact Us'
                        to='/profile/contact-us'
                    />  

                    <ProfileLink
                        title='F.A.Q.'
                        to='/profile/faq'
                    />

                </div>

            </div>            

            <ProfileLink
                title='Log Out'
                to='/profile/logout'
                logout={true}
            />            

        </section>

    )
}