import React, { useState, useEffect } from 'react';
import lodash from 'lodash';

import HeaderMenu from '~/components/HeaderMenu';
import {
  Container,
  Content,
  FilterContainer,
  FilterLabel,
  PodcastList,
  FilterMenu,
  MenuItem,
  MenuLabel,
  MenuTitle,
  MenuIcon,
} from './styles';
import Drawer from '~/components/Drawer';
import BottomTabs from '~/components/BottomTabs';
import Button from '~/components/Button';
import ItemPodcast from '~/components/ItemPodcast';
import Player from '~/components/Player';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-native-paper';
import colors from '~/assets/colors';
import { AppActions } from '~/store/ducks/app';
import { StatusBar } from 'react-native';

function Home() {
  const dispatch = useDispatch();

  const podcasts = useSelector(state => state.podcasts.data);
  const { order } = useSelector(state => state.app);
  const { playing } = useSelector(state => state.player);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [filterMenu, setFilterMenu] = useState(false);
  const [filtered, setFiltered] = useState(podcasts);

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleFilter = type => {
    const newData = [...podcasts];
    let _filtered = [];

    if (type === 'all') {
      _filtered = newData;
    }

    if (type === 'downloads') {
      _filtered = newData.filter(item => item.downloaded);
    }

    if (type === 'not_played') {
      _filtered = newData.filter(item => !item.played);
    }

    if (_filtered.length > 0) {
      const ordered = lodash.invert(_filtered);
      setFiltered(ordered);
    } else {
      setFiltered(_filtered);
    }

    setFilterMenu(false);
  };

  const handleOrder = () => {
    dispatch(AppActions.toggleOrder());
    setFilterMenu(false);
  };

  useEffect(() => {
    const ordered = lodash.orderBy(filtered, 'number', order);
    setFiltered(ordered);
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#000000');
  }, [order]);

  return (
    <Container>
      <HeaderMenu menuOpen={isMenuOpen} handleMenu={handleMenu} />
      <Content>
        <Drawer open={isMenuOpen} onClose={() => setMenuOpen(false)} />
        <FilterContainer>
          <FilterLabel>Todos os Episódios</FilterLabel>
          <Button onPress={() => setFilterMenu(true)}>Classificar</Button>
        </FilterContainer>
        <PodcastList
          data={filtered}
          renderItem={({ item }) => <ItemPodcast item={item} />}
          keyExtractor={item => item.uid}
        />
        <Player />
        {/*<BottomTabs />*/}
      </Content>
      <Modal visible={filterMenu} onDismiss={() => setFilterMenu(false)}>
        <FilterMenu>
          <MenuTitle>Filtrar</MenuTitle>
          <MenuItem onPress={() => handleFilter('all')}>
            <MenuLabel>Todos os episódios</MenuLabel>
            <MenuIcon name="check" color={colors.textSecondary} size={24} />
          </MenuItem>
          <MenuItem onPress={() => handleFilter('downloads')}>
            <MenuLabel>Downloads</MenuLabel>
          </MenuItem>
          <MenuItem onPress={() => handleFilter('not_played')}>
            <MenuLabel>Não Tocados</MenuLabel>
          </MenuItem>
          <MenuTitle>Classificar por</MenuTitle>
          <MenuItem onPress={handleOrder}>
            <MenuLabel>Data</MenuLabel>
            <MenuIcon
              name={order === 'asc' ? 'arrow-up' : 'arrow-down'}
              color={colors.textSecondary}
              size={24}
            />
          </MenuItem>
        </FilterMenu>
      </Modal>
    </Container>
  );
}

export default Home;
