import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPss] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setpassErr] = useState(false);

  const handleName = (e) => {
    setName(e.target.value)
    setNameErr(false)
  }
  const handlePass = (e) => {
    setPss(e.target.value)
    setpassErr(false)
  }
  const handleClick = () => {
    if (name && pass) {
      const data = {
        username: name,
        password: pass,
      }
      if(name === "nandan" && pass === "9010"){
        axios.post('http://localhost:8081/us/login', data)
        .then(function (response) {
          if (response && response.data) {
            if (response.data === "logged in") {
              navigate('/Admin')
            }
            else {
                toast.success('wrong details entered!!',
    {
        position: "top-center",
        autoClose:3000
    });
            }
          }

        })
        .catch(function (error) {
          console.log(error)
        })
      }else{
      axios.post('http://localhost:8081/us/login', data)
        .then(function (response) {
          if (response && response.data) {
            if (response.data === "logged in") {
              navigate('/services')
            }
            else {
                toast.success('wrong details entered!!',
                {
                    
                    position: "top-center",
                    autoClose:3000
                });
            }
          }

        })
        .catch(function (error) {
          console.log(error)
        })
      }

    }
    else if (name) {
      setpassErr(true);
      setNameErr(false);
    }
    else if (pass) {
      setNameErr(true);
      setpassErr(false);
    }
    else {
      setpassErr(true);
      setNameErr(true);
    }

  }
  return (
    <div>
      -<h1 className='text-center'>LOGIN</h1>
      <div className="formDetails">
        <input type="text" className='in' placeholder=' Name' value={name} onChange={handleName} /><br></br>
        {nameErr && <span>Enter valid name</span>}
        <br /><br />
        <input type="password" placeholder='password' value={pass} onChange={handlePass} /><br></br>
        {passErr && <span>Enter valid password</span>}
        <br />
        <br />
        <button className="bookBtn" onClick={handleClick}>Submit<i className=""></i></button>
      </div>


    </div>
  )
}

export default Login;