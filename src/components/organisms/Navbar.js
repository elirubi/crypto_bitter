import { faMoneyBillTrendUp, faPiggyBank, faUser } from '@fortawesome/free-solid-svg-icons';
import CustomNavLink from '@atoms/CustomNavLink';

export default function Navbar(){

    return(

        <nav className="bg-whiteCustom h-[115px] drop-shadow-[0_-4px_4px_rgbA(7,26,30,0.2)] flex items-center justify-around fixed z-0 bottom-0 w-screen">

            <CustomNavLink
                to='/wallet'
                icon={faPiggyBank}
                label='Wallet'
            />

            <CustomNavLink
                to='/market'
                icon={faMoneyBillTrendUp}
                label='Market'
            />

            <CustomNavLink
                to='/profile'
                icon={faUser}
                label='Profile'
            />
        
        </nav>
    )
}