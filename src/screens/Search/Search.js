import React, { useState, useEffect } from 'react';

import {
  Container,
  Form,
  CloseButton,
  CloseIcon,
  Header,
  ResultList,
  ResultSeparator,
  SearchIcon,
  SearchInput,
} from './styles';
import { useNavigation } from 'react-navigation-hooks';
import ResultItem from '~/components/ResultItem';
import { useSelector } from 'react-redux';

function Search() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const podcasts = useSelector(state => state.podcasts.data);
  const navigation = useNavigation();

  const fechar = () => {
    navigation.pop();
  };

  useEffect(() => {
    if (query.length === 0) {
      setItems([]);
      return;
    }

    const filtered = podcasts.filter(item => {
      if (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.number.toLowerCase().includes(query.toLowerCase())
      ) {
        return item;
      }
    });

    setItems(filtered);
  }, [query]);

  return (
    <Container>
      <Header>
        <CloseButton onPress={fechar}>
          <CloseIcon />
        </CloseButton>
      </Header>
      <Form>
        <SearchIcon />
        <SearchInput
          onChangeText={val => setQuery(val)}
          value={query}
          placeholder="Digite sua busca ..."
          autoFocus
        />
      </Form>
      <ResultList
        data={items}
        keyExtractor={item => item.uid}
        renderItem={({ item }) => <ResultItem item={item} />}
        ItemSeparatorComponent={() => <ResultSeparator />}
      />
    </Container>
  );
}

export default Search;
