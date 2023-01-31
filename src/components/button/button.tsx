import './button.css'

type props={
    type: "button" | "submit",
    children: JSX.Element | JSX.Element[] | string,
    variant: "first" | "second" | "third",
    onclick?:() =>void
}

const Button = (props: props) =>{
    return(
        <button onClick={props.onclick} className={'vava ${props.variant}'}>
             {props.children}
        </button>
        
    )
}
export default Button


