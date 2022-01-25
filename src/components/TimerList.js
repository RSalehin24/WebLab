import React, {useState, useContext} from "react";
import {TimerListContext} from "../contexts/TimerListContext";
import TimerView from "./TimerView";
import CreateEditTimer from "./CreateTimer";

const TimerList = () => {
    const {addTimer, setAddTimer} = useState(false);
    const handleAddTimer=()=>{
        setAddTimer(!addTimer);
    }
    
    
    return(
        <>
            <div className="timerList">
            {
                timers.map((timer)=> (
                    <div key={timer.id} className="timer">
                        <TimerView
                            title={timer.title}
                            project={timer.project}
                            id={timer.id}
                        />
                    </div>
                ))
            }
            <button onClick={handleAddTimer}>Add Timer</button>
            {
                addTimer && <CreateEditTimer setAddTimer={handleAddTimer} />
            }
            </div>
        </>
    )
}
export default TimerList;