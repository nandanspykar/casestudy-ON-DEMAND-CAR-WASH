import { useNavigate } from 'react-router-dom';
import './Adminadd.css';
import axios from 'axios';
import {  toast } from 'react-toastify';
import React, { useState } from 'react';

const Adminadd = () => {

    const [id, setId] = useState("")
    const [packagename, setpackageName] = useState("")
    const [cost, setCost] = useState("")
    const [description, setDescription] = useState("")
  
    
    const inputidHandler = (e) => {
        setId(e.target.value)
      }

    const inputpackagenameHandler = (e) => {
      setpackageName(e.target.value)
    }
    
    const inputcostdHandler = (e) => {
        setCost(e.target.value)
      }
    const inputdescriptionHandler = (e) => {
      setDescription(e.target.value)
    }
   
  
    const handleSubmit = (e) => {
      toast.success('Submitted Successfully',{
  
        position:'top-center'
  
    });
      const data = {
      id:id,
       packagename:packagename,
        cost:cost,
        description:description
       
       
      }
      axios.post('http://localhost:8082/admin/addpack', data)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
        
      e.preventDefault()
    }
  
    return (
      <>
       <h1 className='title'> Add package</h1>
        <div className='in'>
       <div className='container'>
           <form className='form' onSubmit={handleSubmit}>
              <div className='input'>
                <label>id:  </label>
                <input type='text' value={id} onChange={inputidHandler} />
              </div>
             
              <div className='input'>
                <label>packagename:  </label>
                <input type='text' value={packagename} onChange={inputpackagenameHandler} />
              </div>
              <div classname='input'>
                <label>cost: </label>
                <input type='text' value={cost} onChange={inputcostdHandler} />
              </div>
              <div className='input'>
                <label>description:  </label>
                <input type='text' value={description} onChange={inputdescriptionHandler} />
              </div>
            
  
              <div >
                <button className='submit'value="submit" >submit</button>
              </div>
               
            
            </form>
          </div>
        </div>
      </>
    )
  }
  
  export default Adminadd;