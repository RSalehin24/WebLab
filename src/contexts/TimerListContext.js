import React, {createContext, useState, useEffect } from "react";
import {v3 as uid} from 'uuid';

export const TimerListContext = createContext();

const TimerListContextProvider = props => {
    const timerList = [];
    const [timers, setTimers] = useState(timerList);


    const addTimer = (title, project) => {
        setTimers([...timers, {id : uid(), title : title, project : project}])
    } 

    const deleteTimer = id => {
        setTimers(timers.filter(timer => timer.id !== id));
    }

    const editTimer = (title, project, id) => {
        const newTimers = timers.map(timer => (timer.id === id ? {title: title, project:project, id: id} : timer));
        setTimers(newTimers);
    }

    return(
        <TimerListContext.Provider
            value={{
                timers,
                addTimer,
                deleteTimer,
                editTimer
            }}
        >
            {props.children}
        </TimerListContext.Provider>
    )
}

export default TimerListContextProvider;