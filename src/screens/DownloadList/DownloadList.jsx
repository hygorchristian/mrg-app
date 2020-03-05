import React from 'react';

import { Container } from './styles';
import EmptyList from "~/components/EmptyList";
import { PodcastList } from "~/screens/Home/styles";

function DownloadList() {
  return (
    <Container
      ListEmptyComponent={<EmptyList />}
      // data={items}
      // data={items}
      // data={items}
    />
  )
}

export default DownloadList;
