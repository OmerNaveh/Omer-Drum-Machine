
import DrumPad from "./DrumPad";
import { sounds } from "./Sounds/Sounds";
export default function PadBunk(props){
    return(
        <div className={props.class}>
            <DrumPad sound = {sounds.hiHat} text= "Q" id="Hi-Hat"/>
            <DrumPad sound = {sounds.snare} text= "W" id="Snare"/>
            <DrumPad sound = {sounds.grind} text= "E" id="Grind"/>
            <DrumPad sound = {sounds.clap} text= "A" id="Clap"/>
            <DrumPad sound = {sounds.bass} text= "S" id="Bass"/>
            <DrumPad sound = {sounds.rimshot} text= "D" id="Rim-Shot"/>
            <DrumPad sound = {sounds.closedHiHat} text= "Z" id="ClosedHiHat"/>
            <DrumPad sound = {sounds.openHiHat} text= "X" id="OpenHiHat"/>
            <DrumPad sound = {sounds.beat} text= "C" id="Floor"/>
        </div>
    )
}