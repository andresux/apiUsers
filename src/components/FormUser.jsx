import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/cardUser.css'

const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen, editMode, setEditMode}) => {

    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
        reset(editUser)
    }, [editUser])

    const submit = (data) => {
        if (editUser) {
            updateUser('/users', editUser.id, data)
            setEditUser()
        } else {
            createUser('/users' ,data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

    const handleClose = () => {
        setIsOpen(false)
    }

  return (
    <div className={`formBackground ${isOpen&&'able'}`}>
        <form className='formContainer' onSubmit={handleSubmit(submit)}>
            <div className='formClose' onClick={handleClose}>
                <ion-icon name="close-outline"></ion-icon>
            </div>
            <h2 className='formTitle'>{editMode ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
            <div className='formItem'>
                <label htmlFor="email" className='formLabel'>Email</label>
                <input {...register('email')} id='email' type="email" className='formInput' placeholder='Email'/>
            </div>
            <div className='formItem'>
                <label htmlFor="password" className='formLabel'>Password</label>
                <input  {...register('password')} id='password' type="password" className='formInput' placeholder='Password'/>
            </div>
            <div className='formItem'>
                <label htmlFor="first_name" className='formLabel'>First Name</label>
                <input  {...register('first_name')} id='first_name' type="text" className='formInput' placeholder='First Name'/>
            </div>
            <div className='formItem'>
                <label htmlFor="last_name" className='formLabel'>Last Name</label>
                <input  {...register('last_name')} id='last_name' type="text" className='formInput' placeholder='Last Name'/>
            </div>
            <div className='formItem'>
                <label htmlFor="birthday" className='formLabel'>Birthday</label>
                <input  {...register('birthday')} id='birthday' type="date" className='formInput' placeholder='Birthday'/>
            </div>
            <button className='formBtn' onClick={handleClose}>{editMode ? 'Guardar Cambios' : 'Guardar nuevo usuario'}</button>
        </form>
    </div>
  )
}

export default FormUser