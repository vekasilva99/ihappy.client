import React from 'react';
import { mount } from 'enzyme';
import PageLogin from '../pages/login';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../store/store';

describe('Login', () => {
  test('render_login', () => {
    const wrap = mount(
      <Provider store={store}>
        <PageLogin />
      </Provider>
    );
    expect(wrap.find('#title-login').text()).toBe('Inicia Sesion');
  });
  it('llenar_form_sin_password', async (done) => {
    const wrap = mount(
      <Provider store={store}>
        <PageLogin />
      </Provider>
    );
    const inputUsername = wrap.find('#username-input').at(0);
    const inputPassword = wrap.find('#password-input').at(0);
    inputUsername.simulate('change', {
      target: { value: 'alejanvelazco2008@hotmail.com' },
    });
    inputPassword.simulate('change', {
      target: { value: '' },
    });
    const btnSubmit = wrap.find('#btn-iniciar-sesion').at(0);
    btnSubmit.simulate('click');

    setTimeout(() => {
      expect(wrap.update()).toMatchSnapshot();
      done();
    }, 1000);
    expect(wrap.find('#error-login').text()).toBe(
      'Este campo debe tener más de 6 caracteres'
    );
  });
});
