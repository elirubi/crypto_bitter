import { createBrowserRouter } from "react-router-dom";
import Root from "@pages/Root";

// Pagine Welcome e Invito
import Welcome from "@pages/Welcome";
import Invite from "@pages/Invite";

// Pagine Register
import Register from "@pages/Register/Register";
import RegisterAccessData from "@pages/Register/AccessData";
import RegisterVerifEmail from "@pages/Register/VerifEmail";
import RegisterUserData from "@pages/Register/UserData";
import RegisterUploadDoc from "@pages/Register/UploadDoc";
import RegisterEndRegister from "@pages/Register/EndRegister";

// Pagine Login
import Login from "@pages/Login/Login";
import LoginOTP from '@pages/Login/OTP';

// Pagine Wallet
import WalletHome from '@pages/Wallet/Home';
import WalletSend from '@pages/Wallet/Send';
import WalletReceive from '@pages/Wallet/Receive';
import WalletMovements from '@pages/Wallet/Movements';

// Pagine Market
import MarketHome from '@pages/Market/Home';
import MarketBuy from '@pages/Market/Buy';
import MarketSell from '@pages/Market/Sell';

// Pagine Profile
import ProfileHome from '@pages/Profile/Home';
import ProfileEditUserData from "@pages/Profile/EditUserData";
import ProfileEditPsw from '@pages/Profile/EditPassword';
import ProfileContactUs from '@pages/Profile/ContactUs';
import ProfileFAQ from '@pages/Profile/FAQ';
import ProfileLogout from '@pages/Profile/Logout';


const router = createBrowserRouter([

    {
        path : '/',
        element : <Welcome/>
    },

    {
        path : '/refcode',
        element : <Invite/>
    },

    {
        path : '/register',
        element : <Root/>,
        children : [

            {
                path: '/register',
                element: <Register/>
            },

            {
                path: '/register/accessdata',
                element: <RegisterAccessData/>
            },

            {
                path: '/register/verifing-email',
                element: <RegisterVerifEmail/>
            },

            {
                path: '/register/userdata',
                element: <RegisterUserData/>
            },

            {
                path: '/register/upload-doc',
                element: <RegisterUploadDoc/>
            },

            {
                path: '/register/end-register',
                element: <RegisterEndRegister/>
            },
        ]
    },

    {
        path : '/login',
        element : <Root/>,
        children : [

            {
                path: '/login',
                element: <Login/>
            },

            {
                path: '/login/OTP',
                element: <LoginOTP/>
            },
            
        ]
    },

    {
        path : '/wallet',
        element : <Root/>,
        children : [

            {
                path: '/wallet',
                element: <WalletHome/>
            },

            {
                path: '/wallet/send',
                element: <WalletSend/>
            },

            {
                path: '/wallet/receive',
                element: <WalletReceive/>
            },

            {
                path: '/wallet/movements',
                element: <WalletMovements/>
            },

                        
        ]
    },

    {
        path : '/market',
        element : <Root/>,
        children : [

            {
                path: '/market',
                element: <MarketHome/>
            },

            {
                path: '/market/buy',
                element: <MarketBuy/>
            },

            {
                path: '/market/sell',
                element: <MarketSell/>
            },

                                    
        ]
    },

    {
        path : '/profile',
        element : <Root/>,
        children : [

            {
                path: '/profile',
                element: <ProfileHome/>
            },

            {
                path: '/profile/edit-user-data',
                element: <ProfileEditUserData/>
            },

            {
                path: '/profile/edit-password',
                element: <ProfileEditPsw/>
            },

            {
                path: '/profile/contact-us',
                element: <ProfileContactUs/>
            },

            {
                path: '/profile/faq',
                element: <ProfileFAQ/>
            },

            {
                path: '/profile/logout',
                element: <ProfileLogout/>
            },
                           
        ]
    },
    
])

export default router;