import { ButtonPrimaryStyle } from "../style/generalStyle"
import { useAuth0 } from "@auth0/auth0-react"

const AuthButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <ButtonPrimaryStyle onClick={() => loginWithRedirect()}>Log in / Sign up</ButtonPrimaryStyle>
    )
}

export default AuthButton