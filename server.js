const express = require('express');
const app = express();
const stdRoutes = require('./src/students/routes')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/api/v1/students', stdRoutes)



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});