import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import FormLogin from '../components/Form';
import { Provider } from 'react-redux';
import store from '../store';
import Link from 'next/link';

const Navbar = styled.div`
width: 100%;
height: 80px;
background: url('../static/marvel-background.jpg') no-repeat fixed center;
background-size: cover;
box-sizing: border-box;
margin: 0;
padding: 10px 15px;
cursor: pointer;
-webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.38);
-moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.38);
box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.38);
`
export default function Index() {
  const router = useRouter();
  return (
    <Provider store={store}>
      <div className='body'>
        <Navbar onClick={() => router.push('/')}>
        </Navbar>
        <div className='formDiv'>
          <FormLogin className='form' />
        </div>
        <style jsx>{`
        .body {
          width: 100%;
          margin: 0;
          padding: 0;
        }
        a{
        color: white;
        text-transform: uppercase;
        font-size: 1.2em;
        font-weight: bold;
        padding: 10px 15px;
        text-decoration: none;
        }
        .formDiv {
          width: 100%;
          display: inline-flex;
          box-sizing: border-box;
          padding: 50px 0 20px 0;
          justify-content: center;
        }
        .form {
          display: flex;
        }
        `}
        </style>
      </div>
    </Provider>
  )
}