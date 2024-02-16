import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import CardUser from './components/CardUser'

function App() {

  const [editUser, setEditUser] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const url = 'https://users-crud.academlo.tech/'
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url)

  useEffect(() => {
    getUsers('/users/')
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
  <div className='app'>
    <h1 className='appTitle'>
    Usuarios
    </h1>
    <button onClick={handleOpen} className='btnOpen'>
      + Crear nuevo usuario
    </button>
    <FormUser 
      createUser = {createUser}
      editUser = {editUser}
      updateUser = {updateUser}
      setEditUser = {setEditUser}
      isOpen = {isOpen}
      setIsOpen = {setIsOpen}
      editMode = {editMode}
      setEditMode = {setEditMode}
    />
    <div className='appContainer'>
      {
        users?.map(user => (
          <CardUser 
            key={user.id}
            user = {user}
            deleteUser = {deleteUser}
            setEditUser = {setEditUser}
            isOpen = {isOpen}
            setIsOpen = {setIsOpen}
            editMode = {editMode}
            setEditMode = {setEditMode}
          />
        ))
      }
    </div>
  </div>
  )
}

export default App
