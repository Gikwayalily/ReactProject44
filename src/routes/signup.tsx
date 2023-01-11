import { FC } from "react";
import "./signup.css";
type Props = {
    children?: JSX.Element | JSX.Element[] 
}
const SignupPage: FC<Props> = (props ) => {
    
    return <div className="signup-page">{props.children}</div>
}
export default SignupPage;