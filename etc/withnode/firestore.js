// reference https://firebase.google.com/docs/firestore/quickstart?hl=ja

const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(require('/Users/yanakataro/googleDrive/javascript/HTML/firebase/yanaka-7bb50.json'))
});

admin.firestore().settings({ timestampsInSnapshots: true });

admin.firestore().collection('users').get()
  .then((collection) => {
    collection.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });