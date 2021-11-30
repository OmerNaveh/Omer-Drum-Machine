
import { useContext } from "react";
import { UserContext } from "../App";
import DrumPad from "./DrumPad";
import { sounds } from "./Sounds/Sounds";
export default function PadBunk(props){
    const value = useContext(UserContext)
    return(
        value.isMode? //based on boolean isMode - different sounds and ids
        <div className={props.class}>
            <DrumPad sound = {sounds.hiHat} text= "Q" id="Hi-Hat"/>
            <DrumPad sound = {sounds.snare} text= "W" id="Snare"/>
            <DrumPad sound = {sounds.grind} text= "E" id="Grind"/>
            <DrumPad sound = {sounds.clap} text= "A" id="Clap"/>
            <DrumPad sound = {sounds.bass} text= "S" id="Bass"/>
            <DrumPad sound = {sounds.rimshot} text= "D" id="Rim-Shot"/>
            <DrumPad sound = {sounds.closedHiHat} text= "Z" id="Closed-Hi-Hat"/>
            <DrumPad sound = {sounds.openHiHat} text= "X" id="Open-Hi-Hat"/>
            <DrumPad sound = {sounds.beat} text= "C" id="Floor"/>
        </div>
        :
        <div className={props.class}>
            <DrumPad sound = {sounds.chord1} text= "Q" id="chord1"/>
            <DrumPad sound = {sounds.chord2} text= "W" id="chord2"/>
            <DrumPad sound = {sounds.chord3} text= "E" id="chord3"/>
            <DrumPad sound = {sounds.heater1} text= "A" id="heater-1"/>
            <DrumPad sound = {sounds.heater2} text= "S" id="heater-2"/>
            <DrumPad sound = {sounds.heater3} text= "D" id="heater-3"/>
            <DrumPad sound = {sounds.heater4} text= "Z" id="heater-4"/>
            <DrumPad sound = {sounds.bass2} text= "X" id="bass-2"/>
            <DrumPad sound = {sounds.closedHiHat2} text= "C" id="closed-Hi-Hat-2"/>
        </div>
    )
}