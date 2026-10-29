import { useState } from 'react'

import InputBox from './components/InputBox'


import './App.css'
import userInfo from './components/hooks/userInfo'


function App() {
  const [name, setName] = useState(`Leanne Graham`)
  const [userName, setUserName] = useState('Bret')
  const [email, setEmail] = useState('Sincere@april.biz')
 

  const userInfo = userInfo(name)
  const options = Object.keys(userInfo)





  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
          
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="name"
              NameOptions={options}
              onUserNameChange={(name) => setName(name)}
              onEmailChange={(email) => setEmail(email)}
              selectedName={from}
              />
            </div>
          
            
          </form>
        </div>
      </div>

    </div>
  )
}

export default App


