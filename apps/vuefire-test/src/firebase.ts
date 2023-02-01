import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase, ref as dbRef } from 'firebase/database'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyALZS8eueuKWMj4c8q2j701vlvI85giUII',
  authDomain: 'vuefire-test-96fce.firebaseapp.com',
  projectId: 'vuefire-test-96fce',
  storageBucket: 'vuefire-test-96fce.appspot.com',
  messagingSenderId: '145079408522',
  appId: '1:145079408522:web:69c60523fcdd993190da73'
})

// used for the database refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const countRef = dbRef(db, 'my-test')
