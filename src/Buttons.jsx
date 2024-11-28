

export default function Buttons({label,isClicked}){
    return(
        <li>
            <button onClick={isClicked}>{label}</button>
        </li>
    )
}