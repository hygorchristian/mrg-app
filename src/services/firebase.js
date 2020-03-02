import firestore from '@react-native-firebase/firestore';

const podcasts = firestore().collection('podcasts');
const testes = firestore().collection('testes');

export const getPodcasts = callback => {
  // podcasts.orderBy('number').onSnapshot(snapshot => {
  podcasts.orderBy('number').onSnapshot(snapshot => {
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
