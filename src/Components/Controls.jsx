import { useContext, useRef, useState } from "react"
import { UserContext } from "../App"

export default function Controls(props){
    const value = useContext(UserContext)
    const volume = useRef(50)
    const [powerDirection , setPowerDirection] = useState('right')
    const changeVol= ()=>{
        props.setVolume(volume.current.value)
    }
    const changePower=()=>{
        value.setIsOn(!value.isOn)
        value.setPlayed(String.fromCharCode(0xa0))
        powerDirection==='left'? setPowerDirection('right'): setPowerDirection('left')   
    }
    return(
        <div className="controls">
            <div className='control' onClick={()=>{changePower()}}>
                <p>Power</p>
                <div className='select'>
                    <div className='inner' style={{float:powerDirection}}></div>
                </div>
            </div>

            <input ref={volume} type='range' min="0" max="100" className='volumeControl'
                onChange={()=>{changeVol()}} />

            <div id='display' className='display'>
                {/* displays sound or just empty space */}
                {props.played || String.fromCharCode(0xa0)}    
            </div>

            <div className='control'>
                <p>Bank</p>
                <div className='select'>
                    <div className='inner'></div>
                </div>
            </div>
        </div>
    )    
}