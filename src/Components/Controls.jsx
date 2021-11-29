import { useRef } from "react"

export default function Controls(props){
    const volume = useRef(50)
    const changeVol= ()=>{
        props.setVolume(volume.current.value)
    }
    return(
        <div>
            <input ref={volume} type='range' min="0" max="100" className='volumeControl'
                onChange={()=>{changeVol()}} />
                
            <div id='display' className='display'>
                {props.played}
            </div>
        </div>
    )    
}