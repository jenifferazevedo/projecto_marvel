import React, { useState, useEffect, Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from '../../store';
import { setLoginOut } from '../../store/actions';
import { useRouter } from 'next/router';
import Link from 'next/link';

function LogOut({states, dispatch}) {
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
      <button onClick={() => reset()}>LogOut</button>
    </Provider>
  )
}
export default connect(state => ({states: state}))(LogOut);