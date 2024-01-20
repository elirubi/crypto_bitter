import BackButton from '@atoms/BackButton';
import UserImage from '@atoms/UserImage';

export default function ActionHeader({title, children}){

    function renderTitle(){

        return(

            <h1 className="text-tertiary text-center font-semibold text-[32px] tracking-widest smallCaps mt-4 mb-6"><span className="text-primary">{title[0]}</span>{title.slice(1)}</h1>

        )}

    return(

        <header className="flex flex-col mx-[24px] mb-6 justify-center">

            <div className='flex items-center justify-between'> 

                <BackButton/>

                <UserImage/>

            </div>

            {renderTitle()}

            {children}            

        </header>
    )
}