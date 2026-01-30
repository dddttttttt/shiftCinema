import { useEffect, useState } from "react";

const DateButton = ({status, date, handleSelect}) => {
    return ( 
        <div onClick={handleSelect} className="date-button" id={status}>
            <p>{date}</p>
        </div>
     );
}

const Schedule = ({schedules}) => {
    const [dateList, setDateList] = useState(null);
    const [curDate, setCurDate] = useState(0);
    let dateListCur = [];
    useEffect(() => {
        dateListCur = [];
        for (let i = 0; i < schedules.length; i+=1) {
            if (i==curDate)
                dateListCur.push(<DateButton key={i} status="date-button-cur" date={schedules[i].date} 
                    handleSelect={() => setCurDate(i)}/>)
            else
                dateListCur.push(<DateButton key={i} status="" date={schedules[i].date} 
                    handleSelect={() => setCurDate(i)}/>)
        }
        setDateList(dateListCur)
    }, [curDate])

    return ( 
        <div className="shedule-container">
            <div className="schedule-time-container">
                {dateList}
            </div>
        </div>
     );
}

export {Schedule}