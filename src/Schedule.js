import { useEffect, useState } from "react";

const DateButton = ({status, date, handleSelect}) => {
    return ( 
        <div onClick={handleSelect} className="date-button" id={status}>
            <p>{date}</p>
        </div>
     );
}

const TimeButton = ({time}) => {
    return ( 
        <div className="time-button">
            <p>{time}</p>
        </div>
     );
}

const HallTime = ({hallName, hallTime}) => {
    return ( 
        <div className="hall-time-container">
            <div className="hall-time-name"><p>Зал "{hallName}"</p></div>
            <div className="hall-time-buttons">{hallTime}</div>
        </div> 
    );
}

const Schedule = ({schedules}) => {
    const [dateList, setDateList] = useState(null);
    const [curDate, setCurDate] = useState(0);
    const [halls, setHalls] = useState(null);
    
    useEffect(() => {
        let dateListCur = [];
        for (let i = 0; i < schedules.length; i++) {
            if (i==curDate)
                dateListCur.push(<DateButton key={i} status="date-button-cur" date={schedules[i].date} 
                    handleSelect={() => setCurDate(i)}/>)
            else
                dateListCur.push(<DateButton key={i} status="" date={schedules[i].date} 
                    handleSelect={() => setCurDate(i)}/>)
        }
        setDateList(dateListCur)
        let hallsTime = {}
        for (let i = 0; i < schedules[curDate].seances.length; i++) {
            let seance = schedules[curDate].seances[i];
            if (!hallsTime[seance.hall.name])
                hallsTime[seance.hall.name] = [];
            hallsTime[seance.hall.name].push(<TimeButton key={i} time={seance.time} />);
        }
        const hallsNames = Object.keys(hallsTime)
        let hallsCur = []
        for (let i = 0; i < hallsNames.length; i++) {
            hallsCur.push(<HallTime key={i} hallName={hallsNames[i]} hallTime={hallsTime[hallsNames[i]]} />)
        }
        setHalls(hallsCur);
    }, [curDate])

    if (!halls)
        return null;

    return ( 
        <div className="shedule-container">
            <div className="schedule-date-container">
                {dateList}
            </div>
            <div className="schedule-time-container">
                {halls}
            </div>
        </div>
     );
}

export {Schedule}