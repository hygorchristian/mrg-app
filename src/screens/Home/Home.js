import React, { useState, useEffect } from 'react';
import lodash from 'lodash';

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
import Button from '~/components/Button';
import ItemPodcast from '~/components/ItemPodcast';
import Player from '~/components/Player';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-native-paper';
import colors from '~/assets/colors';
import { AppActions } from '~/store/ducks/app';
import { StatusBar } from 'react-native';
import EmptyList from '~/components/EmptyList';

function Home() {
  const dispatch = useDispatch();

  const podcasts = useSelector(state => state.podcasts.data);
  const { order, filter } = useSelector(state => state.app);
  const { playing } = useSelector(state => state.player);

  const [filterMenu, setFilterMenu] = useState(false);
  const [filtered, setFiltered] = useState(podcasts);

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

    const ordered = lodash.orderBy(_filtered, 'number', order);
    setFiltered(ordered);

    setFilterMenu(false);
    dispatch(AppActions.setFilter(type));
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

  useEffect(() => {
    handleFilter('all');
  }, []);

  return (
    <Container>
      <Content>
        <FilterContainer>
          <FilterLabel>Todos os Episódios</FilterLabel>
          <Button onPress={() => setFilterMenu(true)}>Classificar</Button>
        </FilterContainer>
        <PodcastList
          data={filtered}
          renderItem={({ item }) => <ItemPodcast item={item} />}
          keyExtractor={item => item.uid}
          ListEmptyComponent={<EmptyList />}
        />
        <Player />
      </Content>
      <Modal visible={filterMenu} onDismiss={() => setFilterMenu(false)}>
        <FilterMenu>
          <MenuTitle>Filtrar</MenuTitle>
          <MenuItem onPress={() => handleFilter('all')}>
            <MenuLabel>Todos os episódios</MenuLabel>
            {filter === 'all' && (
              <MenuIcon name="check" color={colors.textSecondary} size={24} />
            )}
          </MenuItem>
          <MenuItem onPress={() => handleFilter('downloads')}>
            <MenuLabel>Downloads</MenuLabel>
            {filter === 'downloads' && (
              <MenuIcon name="check" color={colors.textSecondary} size={24} />
            )}
          </MenuItem>
          <MenuItem onPress={() => handleFilter('not_played')}>
            <MenuLabel>Não Tocados</MenuLabel>
            {filter === 'not_played' && (
              <MenuIcon name="check" color={colors.textSecondary} size={24} />
            )}
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
