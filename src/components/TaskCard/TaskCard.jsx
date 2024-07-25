import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import axiosInstance from '../../services/axiosConfig';


const TaskCard = (taskEntity) => {

  const handleSaveButton = async () => {
    var apiUrl = 'task/';
    const data = {
      title: title,
      description: description,
      status: status
    }

    if(buttonText === 'Save')
    {
      setButtonText('Update')
      try
      {
        apiUrl = apiUrl + 'savenewtask';
        const response = await axiosInstance.post(apiUrl,data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        setGuid(response.data.id);
        console.log("Successfully saved!");
      }
      catch(error) {
        console.log('Error calling API' + error);
      }
    }
    else
    {
      try {
        apiUrl += 'updatetask'
        data.id = guid;
        const response = await axios.put(apiUrl, data, {
          headers: {
            'Content-Type' : 'application/json'
          }
        });
        console.log('Updatede successfully');
      }
      catch(error){
        console.log('Error when calling API ' + error);
      }
    }
  };

  const [buttonText, setButtonText] = useState(taskEntity.taskEntity.id ? 'Update' : 'Save');
  const [guid, setGuid] = useState(taskEntity.taskEntity.id);
  const [title, setTitle] = useState(taskEntity.taskEntity.title);
  const [description, setDescription] = useState(taskEntity.taskEntity.description)
  const [status, setStatus] = useState(taskEntity.taskEntity.status)

  return (
    <div className='w-[250px] h-[250px] m-2 bg-black outline outline-1 outline-white rounded-xl relative flex flex-col items-center shadow-xl'>
        <input className=' text-lg text-white top-0 h-[25px] mt-2 w-[230px] bg-black focus:border-none text-center' placeholder='Enter title' maxLength={25}
          onChange={(e) => {setTitle(e.target.value)}} value={title}/>
        <textarea className='text-sm text-white h-[110px] bg-black text-center mt-2' placeholder='Enter description'
          onChange={(e) => {setDescription(e.target.value)}} value={description}/>
        <select name="task-status" id="task-status" className=' mt-6 w-[220px]' onChange={(e) => setStatus(e.target.value)} value={status}>     
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="New">New</option>
        </select>
       
        <button className='w-[80px] text-white bg-cyan-500 rounded-md absolute right-0 bottom-0 mr-2 mb-2 shadow-lg'
            onClick={handleSaveButton}>{buttonText}</button>
        
    </div>
  )
}

export default TaskCard