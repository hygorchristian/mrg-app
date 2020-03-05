import firestore from '@react-native-firebase/firestore';
import lodash from 'lodash';

const podcasts = firestore().collection('podcasts');
const testes = firestore().collection('testes');

export const getPodcasts = callback => {
  // podcasts.orderBy('number').onSnapshot(snapshot => {
  podcasts.get().then(snapshot => {
    const dados = [];

    snapshot.forEach(doc => {
      dados.push(doc.data());
    });

    callback(dados);
  });
};

export const getPodcast = (id, callback) => {
  // podcasts
  podcasts
    .doc(id)
    .get()
    .then(snapshot => {
      const data = snapshot.data();
      callback(data);
    });
};
