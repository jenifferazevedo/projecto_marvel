import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { connect, Provider } from 'react-redux';
import api from '../lib/api';
import store from '../store';
import { setLoginState } from '../store/actions';


function FormLogin({states, dispatch}) {
  const [usuario, setUsuario] = useState('');
  const [error, setError] = useState("");
  const [senha, setSenha] = useState ("");
  const [login, setLogin] = useState ("");
  

  function validationUser(e) {
    e.preventDefault();
    if (usuario.length != 0 && senha.length != 0){
      api.post('/users/auth', {
        userName: usuario,
        password: senha
      }).then((response) => {
        if(response.data.logado == true){
          console.log('Você está logado');
          states.loginState = response.data.item;
          dispatch(setLoginState(states));
        } else {setError('Usuario/E-mail ou Senha erradas, tente novamente!')}
      })
    } else {setError('Prencha o formulario')};
  }
  return(
    <Provider store={store}>
      <form name="logIn" method="post" action="#">
      <label>
      <input id="user" value={usuario} type="text" onChange={input => setUsuario(input.target.value)} onFocus={() => setError("")} placeholder="Usuário ou E-mail"/>
      </label>
      <br />
      <br />
      <label>
        <input id="senha" value={senha} type="text" onChange={input => setSenha(input.target.value)} onFocus={() => setError("")} placeholder="Senha" />
      </label>
      <br />
      <br />
      <button type="submit" onClick={validationUser}>Log In</button>
      <p>{error}</p>
    </form>
    </Provider>
  )
}

export default connect(state => ({states: state}))(FormLogin);
