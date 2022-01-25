import React, {useState, useContext} from "react";
import {TimerListContext} from "../contexts/TimerListContext";
import CreateEditTimer from "./CreateTimer";

const TimerView = (title, project, id) => {
    const {deleteTimer} = useContext(TimerListContext);
    const {edit, setEdit} = useState(false);
    const editTimer = true;
    
    const setEditTimerTrue = (id) => {
        setEdit(true);
    }
    const setEditTimerFalse = (id) => {
        setEdit(false);
    }

    const handleDelete = (id) => {
        deleteTimer(id);
    }
    
    return(
        <>
        {
            edit ? (
                <CreateEditTimer
                timerTitle={title}
                timerProject={project}
                timerID={id}
                editTimer={editTimer}
                setEditTimerFalse={setEditTimerFalse}
                />
            ) : (
                <div className="viewTimer">
                    <h2>{title}</h2>
                    <h4>{project}</h4>
                    <button onClick={setEditTimerTrue(id)}>Edit Timer</button>
                    <button onClick={handleDelete(id)}>Delete Timer</button>
                </div>
                
            )
        }
        </>
    )

}
export default TimerView;
