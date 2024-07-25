import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogInPage = () => {

    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);

        try {
            const data = {
                email: username,
                password: password
            };
            console.log(data);
            const response = await axios.post('https://localhost:7028/login', data);

            localStorage.setItem('token', response.data.accessToken)
            navigate('/mainpage');
        } catch (error) {
            alert (error);
        }
    };


    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');


  return (
    <div className='w-screen h-screen flex flex-row relative justify-center items-center'>
        <form onSubmit={handleLoginSubmit} className='flex flex-col relative justify-center items-center w-[400px] h-[400px] bg-black rounded-2xl shadow-2xl'>
            <input placeholder='Username' minLength={6} maxLength={50} className='w-[300px] h-[50px] bg-black text-white text-md border-dashed border text-center'
                onChange={(e) => {setUsername (e.target.value)}}/>
            <input placeholder='Password' minLength={6} maxLength={50} type='password' className='w-[300px] h-[50px] bg-black text-white text-md border-dashed border mt-2 text-center'
                onChange={(e) => {setPassword(e.target.value)}}/>
            <button type='submit' className='bg-blue-500 w-[150px] h-[50px] mt-8 rounded-md'>Log In</button>
        </form>
    </div>
  )
}

export default LogInPage