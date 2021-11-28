import DrumPad from "./DrumPad";

export default function PadBunk(props){
    return(
        <div className={props.class}>
            <DrumPad text= "Q" id="Hi-Hat"/>
            <DrumPad text= "W" id="Snare"/>
            <DrumPad text= "E" id="Tom-Tom"/>
            <DrumPad text= "A" id="Clap"/>
            <DrumPad text= "S" id="Bass"/>
            <DrumPad text= "D" id="Rim-Shot"/>
            <DrumPad text= "Z" id="Cow-Bell"/>
            <DrumPad text= "X" id="Crash"/>
            <DrumPad text= "C" id="Floor"/>
        </div>
    )
}