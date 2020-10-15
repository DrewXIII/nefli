import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBQy6f-EfSBvXig1ZSPoyUwEFlHhAiHp88',
  authDomain: 'nefli-5d576.firebaseapp.com',
  databaseURL: 'https://nefli-5d576.firebaseio.com',
  projectId: 'nefli-5d576',
  storageBucket: 'nefli-5d576.appspot.com',
  messagingSenderId: '1098738347714',
  appId: '1:1098738347714:web:9586ce82cc5303ed66555b',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
