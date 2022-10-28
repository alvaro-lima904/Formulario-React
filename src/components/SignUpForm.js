import React, { useEffect, useState } from 'react';
import useForm from './useForm';

const SignUpForm = ({submitForm}) => {

  const {handleChange, handleFormSubmit, values, errors} = useForm(
    submitForm
  );
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <h2 className='title'>Criar Conta</h2>

        <div className='form-wrapper'>
          <div className='name'>
            <label className='label'>Nome Completo</label>
            <input className='input' 
            type="text" 
            name='fullname' 
            value={values.fullname}
            onChange={handleChange}
            />
            {errors.fullname && <p className='error'>{errors.fullname}</p>}
          </div>

          <div className='email'>
            <label className='label'>Email</label>
            <input className='input' 
            type="email" 
            name='email' 
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>

          <div className='password'>
            <label className='label'>Senha</label>
            <input className='input' 
            type="password" 
            name='password' 
            value={values.password}
            onChange={handleChange}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          
          <div>
            <button className='submit' onClick={handleFormSubmit}>Registrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignUpForm;