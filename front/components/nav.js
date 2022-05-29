import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>홈</a>
          </Link>
        </li>
        <li>
          <Link href='/login'>
            <a>로그인</a>
          </Link>
        </li>
        <li>
          <Link href='/register'>
            <a>회원가입</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
