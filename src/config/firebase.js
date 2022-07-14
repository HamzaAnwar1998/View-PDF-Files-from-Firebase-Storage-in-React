import 'firebase/app'
import {initializeApp} from 'firebase/app'

import 'firebase/storage'
import {getStorage} from 'firebase/storage'

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyClStJ7ntA0pKr4H-bx1RdX6zQCgLXNKZE",
  authDomain: "space-travelers-s-hub.firebaseapp.com",
  projectId: "space-travelers-s-hub",
  storageBucket: "space-travelers-s-hub.appspot.com",
  messagingSenderId: "191731416094",
  appId: "1:191731416094:web:c8fe30f3fc7d2bd8e0420f",
  measurementId: "G-4K209ER0X5"
})

const storage = getStorage(firebaseConfig);

export default storage;