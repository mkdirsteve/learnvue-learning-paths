import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueFire } from 'vuefire'
import { firebaseApp } from './firebase'

// the file we created above with `database`, `firestore` and other exports

const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp
})

app.mount('#app')
