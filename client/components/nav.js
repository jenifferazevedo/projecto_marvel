import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/login'>
          <a>Login</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center
        display: flex;
      }
      ul {
        display: flex;
        justify-content: flex-end;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
