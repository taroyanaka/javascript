const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(require('/Users/yanakataro/googleDrive/javascript/HTML/firebase/yanaka-7bb50.json'))
});
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });


db.collection('users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });