// reference https://firebase.google.com/docs/firestore/quickstart?hl=ja

const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(require('/Users/yanakataro/Desktop/javascript/HTML/firebase/yanaka-7bb50.json'))
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

if (Array.from(palindrome).reduceRight((r, k) => r += k) === Array.from(palindrome).reduce((r, k) => r += k)) {
  "OK"
} else {
  "NG"
};