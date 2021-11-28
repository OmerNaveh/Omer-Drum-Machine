
export default function DrumPad(props){
    return(
        <div className="drum-pad" id={props.id}>
            {props.text}
        </div>
    )
}