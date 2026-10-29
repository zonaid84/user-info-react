import React from "react";

function InputBox(
    label,
    name,
    userName,
    email,
    selectedName= "Leanne Graham",
    nameOptions = []
){
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
       
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className="text-black/40 mb-2 w-full">Name</p>
            <select 
                className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                value={selectedName}
                onChange={(e) => { onNameChange && onNameChange(e.target.value)}}
      
            >
            {nameOptions.map((name) => (
                
                <option key={name} value={name}>{name}</option>
            ))}
            </select>
            </div>
            <div className="w-1-2">
            <label htmlFor={userName} className="text-black/40 mb-2 inline-block">{userName}</label>
            <input
            
            className='outline-none w-full bg-trasparent py-1.5'
            placeholder='User Name'
           
            value={userName}
            onChange={(e) => onUserNameChange && onUserNameChange
              ((e.target.value))}
            />
            </div>
            <div className="w-1-2">
            <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>
            <input
            id={id}
            type="number"
            className='outline-none w-full bg-trasparent py-1.5'
            placeholder='Email'
           
            value={email}
            onChange={(e) => onEmailChange && onEmailChange
              ((e.target.value))}
            />
            </div>
    </div>
    )
}



export default InputBox