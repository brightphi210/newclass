import React, { createContext } from 'react'

// ======== SCOPE ONE ===========
export const UserContext = createContext()


// ========= SCOPE TWO ===========
const Context = ({children}) => {
    const isAuthenticated = localStorage.getItem('token')
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        role: 'Admin'
    }
  return (
    <UserContext.Provider value={isAuthenticated}>
      {children}
    </UserContext.Provider>
  )
}

export default Context
