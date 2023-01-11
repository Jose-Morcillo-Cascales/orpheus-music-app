import { ButtonLogin, DivLanding, FooterLanding, ImgLogoClick, ImgLogoLanding, PSlogan} from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"
import { useState, memo } from "react"
import Login from "../components/landing/Login"
import { useEffect } from 'react';
import FooterInfo from '../components/general_components/FooterInfo';
import useWidth from '../helper/hooks/useWidth'
import AuthButton from "../components/landing/AuthButton";

const Landing = () => {
    const [loginView, setLoginView] = useState(false)
    const width = useWidth();
    const [windowDesk, setWindowDesk] = useState(width > 768 ? true : false);

    useEffect(() => {
        if(width > 768){
            setWindowDesk(prev => prev = true);
        } else if (width < 768) {
            setWindowDesk(prev => prev = false);
        }
    }, [width])


    return (
        !windowDesk 
            ?
            <DivLanding>
                <ImgLogoClick onClick={() => setLoginView(prev => prev = false)} src="https://res.cloudinary.com/drghk9p6q/image/upload/v1671239637/Final-Project-MERN/Logo/Logotipo_tzolje.webp" alt="Logo" />
                <PSlogan>The music that unites us</PSlogan>
                {loginView 
                    ? 
                    <div style={{gridRow: 3}}>
                        <AuthButton />
                    </div>
                    :
                    <ButtonLogin onClick={() => setLoginView(prev => prev = true)}><FaAngleDoubleUp /></ButtonLogin>                       
                }
                <FooterLanding><FooterInfo /></FooterLanding>
            </DivLanding>
            :
            <DivLanding>
                <ImgLogoLanding src="https://res.cloudinary.com/drghk9p6q/image/upload/v1671239637/Final-Project-MERN/Logo/Logotipo_tzolje.webp" alt="Logo" />
                <PSlogan>The music that unites us</PSlogan>
                <div style={{gridRow: 3}}>
                    <AuthButton />
                </div>
                <FooterLanding><FooterInfo /></FooterLanding>
            </DivLanding>
    )
}

export default memo(Landing)