import React, { useState } from 'react'
import Button from '../../components/Button'
import Navbar from '../../components/Navbar'
import { useNavigate, useNavigation } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const defaultPassword = '1234'
    const defualtEmail = 'joe@gmail.com'

    
    const navigate = useNavigate()
    const handleLogin = (e) =>{
        
        if(email === defualtEmail && password === defaultPassword){
            localStorage.setItem('token', 'aabbccdd')
            navigate('/dashboard')
        }

        else{
            alert('Incorrect Credentials')
        }
    }    

  return (
    <div>
        <Navbar />
      <form action=""  className='flex justify-center items-center h-screen w-full'>

        <div className='flex flex-col gap-4 w-[30%]'>
            <div>
                <p>Email:</p>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required className='border w-full border-neutral-300 p-4 rounded-md mt-3' 
                    type="text" placeholder='Enter Email'
                />
            </div>

            <div>
                <p>Password:</p>
                <input 
                    required className='border w-full border-neutral-300 p-4 rounded-md mt-3' 
                    type="text" placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button title={'Login'} action={handleLogin}/>
        </div>
      </form>
    </div>
  )
}

export default Login
