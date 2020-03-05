import React from 'react';

import { Container } from './styles';
import ItemDownloadManager from "~/components/ItemDownloadManager";

const items = [
  {
    id: 1,
    title: '',
    number: '',
    date: '',
    progress: 54.3,
    error: false,
  },
  {
    id: 2,
    title: '',
    number: '',
    date: '',
    progress: 54.3,
    error: true,
  },
  {
    id: 3,
    title: '',
    number: '',
    date: '',
    progress: 54.3,
    error: false,
  },
  {
    id: 3,
    title: '',
    number: '',
    date: '',
    progress: 54.3,
    error: false,
  }
]

function DownloadManager() {
  return (
    <Container
      data={[...items, ...items, ...items, ...items, ...items]}
      renderItem={({ item }) => <ItemDownloadManager item={item} />}
      keyExtractor={item => item.id}
    />
  )
}

export default DownloadManager;
