import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { navigate } from '../boot/rootNavigation';

import { logoutUser } from './authSlice/authSlice';
import { resetTodoList } from './todoSlice/todoSlice';

export const StoreCleaner = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    reduxClear();
    navigate('AuthStack');
  }, [])

  const reduxClear = async () => {
    dispatch(logoutUser());
    dispatch(resetTodoList());
  };

  return null;
};
