import express from 'express';

const app = express();
const PORT = 3003;

const appointments = [];

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.post('/submit-appointment', (req, res) => {
  console.log(req.body);

  const appointment = {
    fname: req.body.fname,
    lname: req.body.lname,
    date: req.body.date,
    time: req.body.time,
    timestamp: new Date()
  };

  appointments.push(appointment);
  console.log(appointments);

  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.get('/admin', (req, res) => {
  res.send(appointments);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});