import React, {useState, useEffect } from 'react';
import {Col, Row} from 'react-bootstrap';
import API from './api';

interface APPT {date: string, time: string, name: string, idx: string};

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
    
    let weekDays=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const appts: APPT[]=[];
    times.forEach(time => {
        dates.forEach(date => {
            let appt={ date, time, name: "", idx: ""};
            appts.push(appt);
        })
    });
    const [apptsx, setappts]=useState(appts);
    const init = () => {
        // create a clean slate for this week
        const appts: APPT[]=[];
        times.forEach(time => {
            dates.forEach(date => {
                let appt={ date, time, name: "", idx: ""};
                appts.push(appt);
            })
        });
        // query each date for this week to get previous data
        dates.forEach(date => {
            API.get(`api/dental/appts?date=${date}`)
                .then(res => {
                    
                    res.data.forEach((appt: {date: string, time: string, name: string, _id: string}) => {
                        let time=appt.time;
                        let name=appt.name;
                        let idx=appt._id;
                        appts.find((apptx, index) => {
                            if (apptx.date===date && apptx.time===time) {
                                appts[index].name=name;
                                appts[index].idx=idx;
                                return;
                            }
                        })
                    })
                })
        });
        setappts(appts);
       } ;

    useEffect(() => {
        init();
    
    }, [startDate]);



    const cellHandler = (tindex: number, dindex: number) => {
        let index: number=tindex*5+dindex
        
        const newappts=[...apptsx];
        if (newappts[index].name==="") {
            newappts[index].name=input;
            newappts[index].idx="";
            
            API.post(`api/dental/appts`, newappts[index] )
                .then(res=> {
                    console.log(res.data);
                    newappts[index].idx=res.data._id;
                });
        
        } else {
            
            let id=newappts[index].idx;
            let cmd=`api/dental/appts/${id}`;
            
            API.delete(cmd)
                .then(res=> {
                    console.log("delete was sucessful");
                    console.log(res.data);
                })
                .catch(function (error) {
                    console.log("delete failed");
                    console.log(error);
                });
            newappts[index].name="";
            newappts[index].idx="";
        }
        
        setappts(newappts);
        
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