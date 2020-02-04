import React, { useState, useEffect, Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from '../../store';
import { setLoginOut } from '../../store/actions';
import { useRouter } from 'next/router';
import Link from 'next/link';

function LogOut({ states, dispatch }) {
  const [state, setState] = useState("");
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  function reset() {
    states.loginState = "Deslogado";
    dispatch(setLoginOut(states));
    router.push('/');
  }
  return (
    <Provider store={store}>
      <ul>
        <li><a onClick={() => reset()}>LogOut</a></li>
      </ul>
      <style jsx>{`
        ul {
        list-style: none;
        }
        a {
          color: black;
          text-transform: uppercase;
          font-size: 1.2em;
          font-weight: bold;
          padding: 10px 15px;
          text-decoration: none;
          cursor: pointer;
        }
    `}
      </style>
    </Provider>
  )
}
export default connect(state => ({ states: state }))(LogOut);