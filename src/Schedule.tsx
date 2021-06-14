import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap';

export function Schedule(props: any) {
    let times=[
        "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30",
        "4:00", "4:30"
    ];
    let date0=new Date(2021, 5, 14);
    let [startDate, setStartDate]=useState(date0);
    let dates: any[]=[];
    for (let ndx=0; ndx<5; ndx++) {
        dates.push(new Date(startDate.getTime()+(ndx*24*60*60*1000)).toISOString().split('T')[0]);
    };
    console.log(dates);
    let weekDays=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let appts: any[]=[];
    times.forEach(time => {
        dates.forEach(date => {
            let appt={
                date,
                time,
                name: ""
            };
            appts.push(appt);
        });
    });
    
    const [apptsx, setappts]=useState(appts);

    const cellHandler = (tindex: number, dindex: number) => {
        console.log(tindex, dindex);
        let newappts=[...apptsx];
        if (newappts[tindex*5+dindex].name==="") {
            newappts[tindex*5+dindex].name=input;
        } else {
            newappts[tindex*5+dindex].name="";
        }
        
        setappts(newappts);
        console.log(apptsx);
    };
    let [input, setInput]=useState('');

    const changeWeek = (numberDays: number) => {
        setStartDate(new Date(startDate.getTime()+numberDays*24*60*60*1000));
    }
    return (
        <>
            <h1 style={{ textAlign: "center"}}>Schedule for: {dates[0]} to {dates[4]}</h1>
            
            <div style={{textAlign: "center", margin: "1em"}}>
            <button className="btn btn-success" onClick={(e) => changeWeek(-7)}>Previous Week</button>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <button className="btn btn-success" onClick={(e) => changeWeek(7)}>Next Week</button>
            </div>
            
            <Row>
                <Col>
                    <div></div>
                </Col>
                {weekDays.map((day: string) => (
                    <Col>
                    <div style={{textAlign: "center"}}><strong>{day}</strong></div> 
                    </Col>
                ))}
            </Row>
            {times.map((time: string, tindex: number) => (
                <Row key={time}>
                    <Col>
                        <div className="timecell"><strong>{time}</strong></div>
                    </Col>
                    {dates.map((date: string, dindex: number) => (
                        <Col>
                        
                            <div className={apptsx[tindex*5+dindex].name==='' ? "emptycell" : "cell"} 
                                onClick={(e) => cellHandler(tindex, dindex)}>{apptsx[tindex*5+dindex].name}</div>
                        </Col>
                    ))}
                </Row>
            ))}
            </>
    );
    
    }