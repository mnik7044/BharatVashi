import express from 'express';
import 'dotenv/config';
import profileRoute from './routes/profile.js';
import postsRoute from './routes/posts.js';
import commentRoute from './routes/comment.js'
import './libs/mongo.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.use('/profile', profileRoute);
app.use('/posts', postsRoute);
app.use('/comment/', commentRoute);

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting the server: ${err}`);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
