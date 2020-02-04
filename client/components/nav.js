import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';

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

const Nav = () => (
  <Navbar>
    <ul>
      <li>
        <Link href='/login'>
          <a>Login</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
    ul {
      list-style: none;
    }
    a{
      color: black;
      text-transform: uppercase;
      font-size: 1.2em;
      font-weight: bold;
      padding: 10px 15px;
      text-decoration: none;
    }
    `}
    </style>
  </Navbar>
)

export default Nav
