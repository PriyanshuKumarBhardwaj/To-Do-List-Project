import React, { useState } from 'react'

function ToDoContainer() {

    const [getData, setGetData] = useState("");
    const [arrData, setArrData] = useState([]);

    const addData = () => {
        if(!getData){
            alert("please enter something in to do list")
        }
        else
        {setArrData([...arrData, getData,]);}
    }

    const singleDelete=(id)=>{
           const updatedData = arrData.filter((ele,ind)=>{
            return ind!==id;
           })
           setArrData(updatedData);
    }

    const removeData=() =>{
            setArrData([]);
    }

    return (
        <div className='container-flex'>
            <div className='toDo shadow-lg '>
                <div className='title'>
                    <h2>To Do List</h2>
                </div>
                <div className='inputField'>
                    <input value={getData} onChange={(e) => { setGetData(e.target.value) }} type="text" placeholder='Lets do this'></input>
                    <button onClick={addData}>Add Here</button>
                </div>
                <div className='heading'>
                    <h3>Your List of Work!</h3>
                </div>
                <div className='dynamicDataUpper'>
                    {
                        arrData.map((e, i) => {
                           return(<>
                           <div key={i} className='dynamicData'>
                           <h6>{e}</h6> <i className="fa-solid fa-trash" title='delete' onClick={()=>singleDelete(i)}></i>
                           </div>
                           </>
                           );
                        })
                    }
                    </div>
                
                <div className='removeData'>
                    <button onClick={removeData}>Remove All</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoContainer