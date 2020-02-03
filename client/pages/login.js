import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Row, Col} from 'antd';
import   FormLogin  from '../components/Form';
import { Provider } from 'react-redux';
import store from '../store'

export default function Index() {
  return(
    <Provider store={store}>
      <FormLogin />
    </Provider>
  )
}