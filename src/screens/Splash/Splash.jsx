import React, { useEffect } from 'react';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { getPodcasts } from '~/services/firebase';

import { Container, Text, Loading, TextContainer } from './styles';
import { useNavigation } from "react-navigation-hooks";
import { PodcastsActions } from "~/store/ducks/podcasts";
import { useDispatch } from "react-redux";
import { StatusBar } from "react-native";

function Splash() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

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
    getPodcasts(podcasts => {
      dispatch(PodcastsActions.setPodcasts(podcasts))
    });
  }

  useEffect(() => {

    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#000000');
    checkPermissions()
    fetchPodcasts()
    setTimeout(() => {
      navigation.navigate('MainStack')
    }, 1000)
  }, [])

  return (
    <Container>
      <TextContainer>
        <Text>MRG</Text>
      </TextContainer>
      <Loading />
    </Container>
  )
}

export default Splash;
