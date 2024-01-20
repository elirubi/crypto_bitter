import { Link } from 'react-router-dom';

export default function UserImage(){

    return(

        <Link to='/profile'>
            <img src="/media/profile-image.png" alt="user profile" />
        </Link>
    )
}