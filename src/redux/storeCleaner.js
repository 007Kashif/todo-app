import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { navigate } from '../boot/rootNavigation';


export const StoreCleaner = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    reduxClear();
    navigate('AuthStack');
  }, [])

  const reduxClear = async () => {
  };

  return null;
};
