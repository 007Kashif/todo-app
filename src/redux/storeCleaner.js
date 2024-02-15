import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../boot/rootNavigation';
import { logoutUser } from './authSlice/authSlice';

export const StoreCleaner = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    reduxClear();
    navigate('AuthStack');
  }, [])

  const reduxClear = async () => {
    dispatch(logoutUser())
  };

  return null;
};
