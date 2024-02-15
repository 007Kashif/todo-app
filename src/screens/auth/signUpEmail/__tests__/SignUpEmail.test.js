import 'react-native';
import React from 'react';
import { SignUpEmail } from '../SignUpEmail';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../../../../redux/store';

import { it } from '@jest/globals';

const component = (
  <Provider store={store}>
    <NavigationContainer>
      <SignUpEmail />
    </NavigationContainer>
  </Provider>
);

// Note: test renderer must be required after react-native.
it('render SignUp', async () => {
  const { getAllByText, getByPlaceholderText } = render(component);

  // expect(getAllByText('Skip').length).toBe(1);
  expect(getAllByText('Register by e-mail').length).toBe(1);
  getByPlaceholderText('Name');
  getByPlaceholderText('Username');
  getByPlaceholderText('E-mail');
  getByPlaceholderText('Mobile phone');
  expect(getAllByText('Date of Birth:').length).toBe(1);
  getByPlaceholderText('Password');
  expect(getAllByText('Register with e-mail').length).toBe(1);
  // expect(getAllByText('Register with Facebook').length).toBe(1);
});

// it('Shows Empty inputs messages', () => {
//   const { getByTestId, getByText } = render(component);
//   fireEvent.press(getByTestId('Login.Button'));
//   getByText('Invalid email or username.');
//   getByText('Invalid password.');
// });
