import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import Head from 'next/head';
import Nav from '../components/nav';
import { Provider } from 'react-redux';
import store from '../store';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Index() {
  return (
      <Provider store={store}>
        <div className='body'>
          <Head>
            <title>Projecto Marvel</title>
          </Head>
          <Nav />
          <div className='hero'>
            <h1 className='title'>Welcome to Marvel Project!</h1>
            <p className='description'>
              In construction!
            </p>
            <Icon type="snippets" />
          </div>
        </div>
        <style jsx>{`
        .hero {
          text-align: center;
          width: 60%;
          color: #000;
          background-color: rgba(255, 255, 255, 0.9);
          margin: 20px auto;
          padding: 20px 20px;
          box-sizing: border-box;
          }
        .body {
          width: 100%;
          padding: 0;
          margin: 0;
          background: url('../static/marvel-background.jpg') no-repeat fixed center;
          background-size: cover;
          height: 500px;
        }
        `}
        </style>
      </Provider>
  );
}
