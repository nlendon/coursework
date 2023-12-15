import React, { useState, useEffect } from 'react';
import { message } from 'antd';

const Auth = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    document.title = 'Authentication';
  });

  const handleError = (reason) => {
    messageApi.open({
      type: 'error',
      content: reason,
    });
  };
  const handleSuccess = (message) => {
    messageApi.open({
      type: 'success',
      content: message,
    });
  };

  const handleChange = async () => {
    try {
      if (!email || !pass) {
        return handleError('Խնդրում ենք լրացնել բոլոր տվյալները');
      } else {
        if(email === 'example@email.com' && pass === '12345') {
          handleSuccess('Հաջողվեց!');
          setTimeout(() => {
            localStorage.setItem('token', 'testtoken')
            window.location = '/'
          }, 1000)
        }
        else return handleError('Մուտքագրված օգտատերը կամ ծածկագիրը սխալ է!');
      }
    } catch (e) {
      handleError('Email or Password is Incorrect');
    }
  };

  return (
    <div className='limiter'>
      {contextHolder}
      <div className='container-login100'>
        <div className='wrap-login100'>
          <div className='login100-form validate-form'>
					<span className='login100-form-title'>
						Մուտք Գործել Համակարգ
					</span>

            <div className='wrap-input100 validate-input'>
              <input className='input100' type='text' name='email' placeholder='Email'
                     onChange={(e) => setEmail(e.target.value)} />
              <span className='focus-input100'></span>
              <span className='symbol-input100'>
							<i className='fa fa-envelope' aria-hidden='true'></i>
						</span>
            </div>

            <div className='wrap-input100'>
              <input className='input100' type='password' placeholder='Password'
                     onChange={(e) => setPass(e.target.value)} />
              <span className='focus-input100'></span>
              <span className='symbol-input100'>
							<i className='fa fa-lock' aria-hidden='true'></i>
						</span>
            </div>

            <div className='container-login100-form-btn'>
              <button className='login100-form-btn' onClick={handleChange}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
