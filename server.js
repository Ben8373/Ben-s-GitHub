const express = require('express');
const mongoose = require('mongoose');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

const dataBase = mongoose.connection;
dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', function() {
  console.log('Connected to MongoDB');
});

const musicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  year: Number,
  genre: String,
});
const Music = mongoose.model('Music', musicSchema); 

const musicDb = new sqliite3.Database('./music.db');
const musicDbTwo = new sqlite3Database('./musicDbTwo');


musicDb.serialize(() => {
  musicDb.run("CREATE TABLE IF NOT EXISTS music (title TEXT, artist TEXT, album TEXT, year INTEGER, genre TEXT)");
});

musicDbTwo.serialize(() => {
  musicDbTwo.run("CREATE TABLE IF NOT EXISTS another_table (id INTEGER, name TEXT)");
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/music', (req, res) => {
  const newMusic = new Music(req.body);
  newMusic.save((err, music) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(music);
  });
});

app.get('/music', (req, res) => {
  Music.find({}, (err, music) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(music);
  });
});

app.put('/music/:id', (req, res) => {
  Music.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, music) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(music);
  });
});

app.delete('/music/:id', (req, res) => {
  Music.findByIdAndRemove(req.params.id, (err, music) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(music);
  });
});

app.post('/sqlite-music', (req, res) => {
  const { title, artist, album, year, genre } = req.body;
  const stmt = musicDb.prepare("INSERT INTO music (title, artist, album, year, genre) VALUES (?, ?, ?, ?, ?)");
  stmt.run(title, artist, album, year, genre, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ id: this.lastID });
  });
  stmt.finalize();
});

app.get('/sqlite-music', (req, res) => {
  musicDb.all("SELECT * FROM music", [], (err, rows) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(rows);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});