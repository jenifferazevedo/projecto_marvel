import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { connect, Provider } from 'react-redux';
import api from '../lib/api';
import store from '../store';
import { setLoginState } from '../store/actions';
import { useRouter } from 'next/router';
import Link from 'next/link';


function FormLogin({states, dispatch}) {
  const [usuario, setUsuario] = useState('');
  const [error, setError] = useState("");
  const [senha, setSenha] = useState ("");
  const [login, setLogin] = useState ("");
  
  const router = useRouter();
  function validationUser(e) {
    e.preventDefault();
    if (usuario.length != 0 && senha.length != 0){
      api.post('/users/auth', {
        userName: usuario,
        password: senha
      }).then((response) => {
        if(response.data.logado == true){
          states.loginState = response.data.item;
          dispatch(setLoginState(states));
          router.push('/profile');
        } else {setError('User/E-mail or Password wrong!')}
      })
    } else {setError('Fill the Form')};
  }
  return(
    <Provider store={store}>
      <form name="logIn" method="post" action="#">
      <label>
      <input id="user" value={usuario} type="text" onChange={input => setUsuario(input.target.value)} onFocus={() => setError("")} placeholder="User ou E-mail"/>
      </label>
      <br />
      <br />
      <label>
        <input id="senha" value={senha} type="text" onChange={input => setSenha(input.target.value)} onFocus={() => setError("")} placeholder="Password" />
      </label>
      <br />
      <br />
      <button type="submit" onClick={validationUser}>Log In</button>
      <p>{error}</p>
    </form>
    <style jsx>{`
        form {
          text-align: center;
        }
        input {
          border-radius: 5px;
          box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.3);
          box-sizing: border-box;
          padding: 5px 5px;
        }
        button {
          font-family: "Times New Roman", Times, serif;
          font-weight: bold;
          font-size: 1em;
          padding: 5px 10px;
          box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.3);
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          border: none;
          background: rgba(0,0,0,0.8);
          color: white;
        }
        `}
    </style>
    </Provider>
  )
}

export default connect(state => ({states: state}))(FormLogin);
