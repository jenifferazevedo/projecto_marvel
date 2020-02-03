import React, { useState, useEffect, Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from '../../store';
import LogOut from './LogOut';

export default function UserPlataform() {
  const [state, setState] = useState("");
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  return (
    <Provider store={store}>
      <div>
        <LogOut />
      </div>
    </Provider>
  )
}

