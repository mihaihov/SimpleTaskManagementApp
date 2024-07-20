import { useState, useEffect } from "react"
import axios from "axios"
import TaskCard from "./components/TaskCard/TaskCard"

function App() {

  const getTasks = async () => {
    var apiUrl = 'https://localhost:7028/task/getalltasks'
    try {
      const response = await axios.get(apiUrl, {
        headers : {
          "Content-Type" : 'application/json'
        }
      });

      return response.data;
    }
    catch (error)
    {
      console.log('Error calling the api ', error);
      return [];
    }
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  const handleAddNewTask = () => {
    setTasks([...Tasks, { title: '', description: '', status: 'New' }]);
    console.log(Tasks);
  };

  const [Tasks, setTasks] = useState([])

  return (
    <div className="bg-green-500 w-full h-full relative">
      <div className="w-full h-[50px] mt-2 relative">
        <button className="w-[200px] h-[50px] bg-blue-500 text-white outline outline-1 outline-white rounded-lg inset-y-0 right-0 absolute mr-2 mt-2"
          onClick={handleAddNewTask}>Add New Task</button>
      </div>
      <div className="w-full grid grid-cols-5 mt-4">
        {Tasks.map((task,index) => (
          <TaskCard key={index} taskEntity = {task}/>
        ))}
      </div>
    </div>
  )
}

export default App
