import React, { useState } from 'react'
import SignUpForm from './SignUpForm';
import SignUpFormSucess from './SignUpFormSucess';

export default function Form() {
  const [formIsSubmitted, setFormIsSubimitted] = useState(false);

  const submitForm = () => {
    setFormIsSubimitted(true);
  };
  return (
    <div>
      { !formIsSubmitted ?( 
      <SignUpForm submitForm={submitForm}/> 
      ) : (
      <SignUpFormSucess/>
      )}
    </div>
  )
}
