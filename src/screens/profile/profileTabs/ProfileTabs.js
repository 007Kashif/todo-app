import React, { useState, useEffect } from 'react';
import {
  View,
  Alert,
  FlatList,
} from 'react-native';

import {
  AppHeader,
  ForwardCard,
  ProfileCard,
  AppLoader
} from '../../../components';

import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
const profileData = [
  {
    id: 0,
    titleDisplay: false,
    data: [],
  },
  {
    id: 1,
    title: 'My account',
    titleDisplay: true,
    data: [
      {
        id: '2',
        task: 'Login info',
      },
    ],
  },
  {
    id: 11,
    title: 'Settings',
    titleDisplay: true,
    data: [
      {
        id: '15',
        task: 'Privacy Policy',
      },
      {
        id: '16',
        task: 'Terms and Conditions',
      },
    ],
  },
  {
    id: 5,
    title: 'Help',
    titleDisplay: true,
    data: [
      {
        id: '1',
        task: 'Contact Us',
      },
      {
        id: '2',
        task: 'Report',
      },
    ],
  },
  {
    id: 17,
    title: '',
    titleDisplay: true,
    data: [
      {
        id: '17',
        task: 'Logout',
      },
    ],
  },
];

export const ProfileTabs = (props) => {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const state = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(false);

  const [profileList, setProfileList] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    if (focused) {
      setProfileList([...profileData]);
      setTimeout(() => {
      }, 400);
    } else {
      setProfileList([]);
    }
  }, [focused]);

  const logoutUser = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigation.navigate('StoreCleaner');
    }, 1000);
  };

  const onItemPress = (task) => {
    if (task == 'Logout') {
      Alert.alert(`Alert!`, 'Are you sure you want to logout?', [
        {
          text: 'Yes',
          onPress: () => logoutUser(),
        },
        {
          text: 'Cancel',
          onPress: () => { },
        },
      ]);
    }
  };

  const renderProfileList = ({ item, index }) => {
    let name = 'Joana Perkins'
    return (
      <View>
        {item.titleDisplay ? (
          <ForwardCard index={index} hideIcon={true} title={item.title} />
        ) : (
          userProfile?.userProfileData && (
            <ProfileCard
              onPress={() => {
                navigation.goBack();
              }}
              profileImage={userProfile?.userProfileData?.image}
              name={name}
              userName={userProfile?.userProfileData?.username ? `@${userProfile?.userProfileData?.username}` : ''}
            />
          )
        )}
        <FlatList
          data={item.data}
          keyExtractor={(item) => item.id}
          renderItem={renderProfileButtons}
        />
      </View>
    );
  };
  const renderProfileButtons = ({ item, index }) => {
    return (
      <ForwardCard
        onPress={() => onItemPress(item.task)}
        title={item.task}
        index={item.id}
      />
    );
  };
  return (
    <View style={styles.mainContainer}>
      <AppHeader
        navigation={navigation}
        showBasket={false}
        showTitle={true}
        title={'Profile'}
      />
      {profileList.length != 0 && (
        <FlatList
          data={profileList}
          keyExtractor={(item) => item.id}
          renderItem={renderProfileList}
        />
      )}
      {isLoading && <AppLoader visible={isLoading} />}
    </View>
  );
};
