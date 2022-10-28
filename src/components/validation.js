import React from 'react';

const validation = (values) => {

    let errors={};

    if (!values.fullname) {
        errors.fullname="Nome é obrigatório";
    }
    if (!values.email) {
        errors.email="Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email="Email inválido";
    }
    if (!values.password) {
        errors.password="Senha é obrigatória";
    } else if (values.password.length < 5) {
        errors.passowrd="A senha precisa ter mais do que 5 dígitos";
    }

  return errors;
}

export default validation
