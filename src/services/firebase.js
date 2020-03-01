import firestore from '@react-native-firebase/firestore';

export const getPodcasts = callback => {
  firestore()
    .collection('podcasts')
    .orderBy('number')
    .onSnapshot(snapshot => {
      const dados = [];

      snapshot.forEach(doc => {
        dados.push(doc.data());
      });

      callback(dados);
    });
};
