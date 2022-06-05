import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_DONE, LOG_IN_REQUEST } from '../../reducers/user';

const Login = () => {
  // 페이지 이동으로
  // react-router-dom 대신에 사용합니다.
  const router = useRouter();
  const dispatch = useDispatch();
  const { logInLoading, me, logInDone } = useSelector((state) => state.user);

  // TODO: 값을 분리 및 상태 변화
  const [email, setEmail] = useState('');
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
  }, [email, password]);

  // console.log(me);
  useEffect(() => {
    if (logInDone) {
      alert('로그인 성공!');
      router.push('/');
      dispatch({
        type: LOG_IN_DONE,
      });
    }
  }, [logInDone]);

  console.log(logInDone);

  return (
    <div>
      <h2>로그인 페이지</h2>
      <div>
        <label>이메일</label>
        <input type='email' value={email} onChange={onChangeEmail} />
      </div>

      <div>
        <label>비밀번호</label>
        <input type='password' value={password} onChange={onChangePassword} />
      </div>

      <button onClick={onSubmitForm}>로그인</button>
    </div>
  );
};

export default Login;
