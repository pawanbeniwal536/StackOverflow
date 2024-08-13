import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://admin:admin@cluster0.osx2xiy.mongodb.net/stackoverflow?retryWrites=true&w=majority';

const connectToDatabase = () => {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });
};

export default connectToDatabase;
