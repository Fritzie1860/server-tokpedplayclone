// // index.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
const connectDB = require('./src/utils/db');
// const authRoutes = require('./src/routes/authRoutes');
// const videoRoutes = require('./src/routes/videoRoutes');
const videoController = require('./controllers/videoController');
// const productRoutes = require('./src/routes/productRoutes');
// const commentRoutes = require('./src/routes/commentRoutes');

const app = express();

// require('dotenv').config();

// // Middleware
// // Allow cross-origin requests from any origin
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to the database
connectDB();

router.get('/videos', videoController.getVideos);

// // Routes
// app.use('/api/video', videoRoutes);
// app.use('/api/product', productRoutes);
// app.use('/api/comment', commentRoutes);

// app.all('/', (req, res) => {
//   console.log("Just got a request!")
//   res.send('Yo!')
// })

// // Start the server
// app.listen(process.env.PORT || 3000)


const express = require('express')
// const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)