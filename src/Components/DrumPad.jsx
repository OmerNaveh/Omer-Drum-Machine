import { useRef } from "react";

export default function DrumPad(props){
    const audio = useRef(null)
    document.addEventListener('keydown',(e)=>{
        try{
            if(e.key === props.text.toLowerCase()){playSound();}
        }
        catch{
            return
        }
    })
    const playSound = ()=>{
       audio.current.play();
    }
    return(
        <div onClick={()=>playSound()} className="drum-pad" id={props.id}>
            {props.text}
            <audio ref={audio} className="clip" id= {props.text} src={props.sound}></audio>
        </div>
    )
}