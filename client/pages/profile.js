import React, { useState, useEffect, Component } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import UserPlataform from '../components/profile';
import { connect, Provider } from 'react-redux';
import store from '../store';


export default function profile() {
  const [state, setState] = useState("");
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  if (store.getState().loginState == "") {
    return(
      <Provider store={store}>
        <h1>Você não está logado!</h1>
        <Link href='/login'>
          <a>Faça o seu Login aqui!</a>
        </Link>
      </Provider>
    )
  }
    return (
      <Provider store={store}>
        <h1>Seu hero perfil!</h1>
        <UserPlataform />
      </Provider>
    )
}