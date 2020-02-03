import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import Head from 'next/head';
import Nav from '../components/nav';
import { Provider } from 'react-redux';
import store from '../store'
import Routes from '../routes';

export default function Index() {
  return (
      <Provider store={store}>
        <div>
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
          width: 100%;
          color: #333;
          }
        `}
        </style>
      </Provider>
  );
}
