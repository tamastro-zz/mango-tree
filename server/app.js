const express = require('express')
const cron = require('node-cron')
const cors = require('cors')
const firebase = require('firebase')
const app = express()

app.use(cors())

const config = {
  apiKey: "AIzaSyBZ-tlj5X12Z95-ybQ3leZPIw171hdFXWo",
  authDomain: "steady-hallway-178312.firebaseapp.com",
  databaseURL: "https://steady-hallway-178312.firebaseio.com",
  projectId: "steady-hallway-178312",
  storageBucket: "steady-hallway-178312.appspot.com",
  messagingSenderId: "425065435280"
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

app.get('/start', (req, res) => {
  const evo = [
    'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    'https://img.pokemondb.net/artwork/ivysaur.jpg',
    'https://img.pokemondb.net/artwork/venusaur.jpg'
  ]
  let index = 0
  res.send(true)
  let grow = cron.schedule('*/10 * * * * *', () => {
    console.log('grow', index)
    db.ref('grow').set({
      phase: index,
      src: evo[index]
    })
    index++

    if (index >= evo.length)
      grow.stop()
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('yok....')
})
