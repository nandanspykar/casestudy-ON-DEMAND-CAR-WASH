import React, { useEffect, useState } from 'react';
import axios from 'axios';




const Washer = () => {
    
    

    const [washers, setWashers] = useState([])

    



    useEffect(() => {
        fetch("http://localhost:8888/od/allorders").then(result => {
            result.json().then(
                resp => {
                    setWashers(resp)
                    console.log(resp)

                    

                    

                })
        })
    }, [])

    return (

        <div>
            <div>
                <h1 className="bookAppointTitle mb-5 text-center">APPOINTMENT DETAILS</h1>
            </div>

            {washers.map((emp) => (
                <div className="bk3 ml-5" >

                    <div>
                        <p className="bk3">username : {emp.username}</p>
                        <p className="bk3">Car Name : {emp.carName}</p>
                        <p className="bk3">Car Model: {emp.carModel}</p>
                        <p className="bk3">Appointment Date : {emp.date}</p>
                        <p className="bk3">Wash Pack: {emp.washpackId}</p>
                        <p className="bk3">Contact-No : {emp.contactno}</p>
                        <p className="bk3">Address: {emp.address}</p>
                        

                    </div>
                    <hr style={{ marginTop: "30px" }} />
                </div>
            ))
            }
        </div>
    )
}

export default Washer