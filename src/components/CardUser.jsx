import React from 'react'
import './styles/formUser.css'

const CardUser = ({user, deleteUser, setEditUser, isOpen, setIsOpen, editMode, setEditMode}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleUpdate = () => {
        setEditUser(user)
        setIsOpen(true)
        setEditMode(!editMode)
    }

  return (
    <article className='userArticle'>
        <h3 className='userName'>{user.first_name} {user?.last_name}</h3>
        <hr />
        <ul className='userList'>
            <li className='userItem'><span>CORREO</span> <span>{user.email}</span></li>
            <li className='userItem'><span>CUMPLEAÑOS</span> <span>{user.birthday}</span></li>
        </ul>
        <hr />
        <div className='userBtns'>
            <button onClick={handleDelete} className='userDelete'>
                <ion-icon name="trash-outline"></ion-icon>
            </button>
            <button onClick={handleUpdate} className='userEdit'>
                <ion-icon name="create-outline"></ion-icon>
            </button>
        </div>
    </article>
  )
}

export default CardUser