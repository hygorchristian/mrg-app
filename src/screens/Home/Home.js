import React from 'react';

import HeaderMenu from '~/components/HeaderMenu';
import {
  Container,
  Scroll,
  Content,
  FilterContainer,
  FilterLabel,
  PodcastList,
} from './styles';
import Drawer from '~/components/Drawer';
import BottomTabs from '~/components/BottomTabs';
import Button from '~/components/Button';
import ItemPodcast from '~/components/ItemPodcast';
import Player from '~/components/Player';
import { useSelector } from 'react-redux';

function Home() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const podcasts = useSelector(state => state.podcasts.data);
  const { current, playing } = useSelector(state => state.player);

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <HeaderMenu menuOpen={isMenuOpen} handleMenu={handleMenu} />
      <Content>
        <Drawer open={isMenuOpen} onClose={() => setMenuOpen(false)} />
        <FilterContainer>
          <FilterLabel>Todos os Episódios</FilterLabel>
          <Button>Classificar</Button>
        </FilterContainer>
        <PodcastList
          data={podcasts}
          renderItem={({ item }) => <ItemPodcast item={item} />}
          keyExtractor={item => item.uid}
        />
        <Player />
        <BottomTabs />
      </Content>
    </Container>
  );
}

export default Home;
