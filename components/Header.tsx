import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Link, useLocation} from 'react-router-native';
import { LogoutIcon } from "react-native-heroicons/outline";
import { Input } from './Input';
import { SearchIcon } from "react-native-heroicons/solid";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const location = useLocation();

  return (
    <View className="w-screen bg-gray-800 h-44 flex items-center">
        <View className="flex flex-row items-center justify-between w-11/12 mt-3">
            <View className="bg-white w-10 h-10 rounded-full"/>
            {location.pathname === '/' ? <Image resizeMode='contain' source={require('../assets/logo.png')} className="w-28"/> : <Text>{location.pathname}</Text>}
            <LogoutIcon size={32} color="white"/>
        </View>
        <Input placeholder="Search for usernames, wallet addresses..." icon={<SearchIcon/>}/>
    </View>
  );
};
