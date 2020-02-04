import React, { useState, useEffect, Component } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import UserPlataform from '../components/profile';
import { connect, Provider } from 'react-redux';
import store from '../store';
import LogOut from '../components/profile/LogOut';

const Navbar = styled.div`
width: 100%;
background: rgb(1,6,29);
background: linear-gradient(166deg, rgba(1,6,29,1) 0%, rgba(5,18,71,1) 25%, rgba(33,48,113,1) 54%, rgba(91,102,150,1) 72%, rgba(173,179,203,1) 89%);
color: white;
text-align: right;
box-sizing: border-box;
margin: 0;
padding: 10px 15px;
-webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.38);
-moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.38);
box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.38);
`
export default function profile() {
  const [state, setState] = useState("");
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  /*if (store.getState().loginState == "") {
    return(
      <Provider store={store}>
        <h1>Você não está logado!</h1>
        <Link href='/login'>
          <a>Faça o seu Login aqui!</a>
        </Link>
      </Provider>
    )
  } */
    return (
      <Provider store={store}>
        <div className='body'>
        <Navbar>
          <LogOut />
        </Navbar>
        <UserPlataform />
        </div>
        <style jsx>{`
        .body {
          width: 100%;
          margin: 0;
          padding: 0;
        }
        `}
        </style>
      </Provider>
    )
}