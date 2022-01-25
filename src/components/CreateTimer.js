import React, {useState, useContext} from "react";
import {TimerListContext} from "../contexts/TimerListContext";


const CreateEditTimer = (
    timerTitle,
    timerProject,
    timerID,
    edittimer,
    setEditTimerFalse,
    setAddTimer
) => {

    
    const {addTimer, editTimer} = useContext(TimerListContext);
    const[project, setProject] = useState("");
    const[title, setTitle] = useState("");

 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(edittimer){
            editTimer({title:title, project:project, id:timerID});
            setEditTimerFalse();
        } else {
            addTimer({title:title, project:project});
            setAddTimer();
        }
        setTitle("");
        setProject("");
    }

    const cancelEdit = () =>{
        edittimer ? setEditTimerFalse() : setAddTimer();
    }

    return(
        <>
            <div className="createEditTimer">
                <form onSubmit={handleSubmit}>
                    <div className="timerData">
                        <label>Title</label>
                        <input 
                        type="text" 
                        name="project"
                        defaultValue={timerTitle}
                        onChange={(e) => setProject(e.target.value)}
                        />
                        <input 
                        type="text" 
                        name="title"
                        defaultValue={timerProject}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="timerCreateChange">
                        <button type="submit">
                            {editTimer ? "Update" : "Create"}
                        </button>
                        {
                        editTimer ? 
                            (<button onClick={cancelEdit}>
                                Cancel
                            </button>)
                        :
                            ("")

                        }
                        
                    </div>
                </form>
            </div>
        </>
    )
} 

export default CreateEditTimer;