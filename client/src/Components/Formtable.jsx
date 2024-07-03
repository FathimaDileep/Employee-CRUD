import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
              <form onSubmit={handleSubmit}>
              <div className="close-btn" onClick={handleclose}><MdClose/></div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>
   
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" onChange={handleOnChange} value={rest.email}/>
   
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" name="position" onChange={handleOnChange} value={rest.position}/>
   
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" onChange={handleOnChange} value={rest.location}/>
   
              <label htmlFor="salary">Salary:</label>
              <input type="number" id="salary" name="salary" onChange={handleOnChange} value={rest.salary}/>
   
              <button className="btn">Submit</button>
             </form>
    </div>
  )
}

export default Formtable
