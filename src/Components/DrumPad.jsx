import{ useContext, useRef } from "react";
import { UserContext } from "../App";

export default function DrumPad(props){
    const value = useContext(UserContext)
    const audio = useRef(null)
    document.addEventListener('keydown',(e)=>{
        try{
            if(e.key.toLowerCase() === props.text.toLowerCase()){playSound();}
        }
        catch{
            return
        }
    })
    const playSound = ()=>{
        if(!value.isOn) return //if power is off
        audio.current.volume = value.volume/100;
        audio.current.play();
        value.setPlayed(props.id);
    }
    return(
        <div onClick={()=>playSound()} className="drum-pad" id={props.id}>
            {props.text}
            <audio ref={audio} className="clip" id= {props.text} src={props.sound}></audio>
        </div>
    )
}