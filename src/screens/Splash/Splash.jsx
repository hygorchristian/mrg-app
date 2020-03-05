import React, { useEffect } from 'react';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { getPodcasts } from '~/services/firebase';

import { Container, Text, Loading, Logo, LogoContainer, LoadingContainer } from './styles';
import { useNavigation } from "react-navigation-hooks";
import { PodcastsActions } from "~/store/ducks/podcasts";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "react-native";

import mrg from '~/assets/img/mrg.png'

function Splash() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const podcasts = useSelector(state => state.podcasts.data)

  const checkPermissions = async () => {
    const actions = {
      [RESULTS.DENIED]: permission => {
        return request(permission)
      },
      [RESULTS.GRANTED]: permission => {

      },
    }

    const resultReadStorage = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
    const resultWriteStorage = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
    const actionReadStorage = actions[resultReadStorage]
    const actionWriteStorage = actions[resultWriteStorage]
    actionReadStorage && await actionReadStorage(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
    actionWriteStorage && await actionWriteStorage(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
  }

  const fetchPodcasts = () => {
    if(podcasts.length > 0){
      setTimeout(() => {
        navigation.navigate('MainStack')
      }, 1000)
    }else{
      getPodcasts(podcasts => {
        dispatch(PodcastsActions.setPodcasts(podcasts))
        setTimeout(() => {
          navigation.navigate('MainStack')
        }, 1000)
      });
    }
  }

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#000000');
    checkPermissions()
    fetchPodcasts()
  }, [])

  return (
    <Container>
      <LogoContainer>
        <Logo source={mrg} />
      </LogoContainer>
      <Text>Equipando Robôs Gigantes...</Text>
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    </Container>
  )
}

export default Splash;
