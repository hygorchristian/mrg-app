import firestore from '@react-native-firebase/firestore';

const podcasts = firestore().collection('podcasts');

export const getPodcasts = callback => {
  podcasts.orderBy('number').onSnapshot(snapshot => {
    const dados = [];

    snapshot.forEach(doc => {
      dados.push(doc.data());
    });

    callback(dados);
  });
};

export const getPodcast = (id, callback) => {
  podcasts
    .doc(id)
    .get()
    .then(snapshot => {
      const data = snapshot.data();
      callback(data);
    });
};
