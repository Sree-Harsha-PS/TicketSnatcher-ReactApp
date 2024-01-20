const mongoose = require('mongoose');

const Booking = new mongoose.model('booking',{
  username: String,
  payment_mode: String,
  booking: {
    movieName: String,
    tickets: [String],
  },
  amt: String,
});

const User = new mongoose.model({
  username: String,
  email: String,
  password: String,
  bookings: [Booking],
});

const Show = new mongoose.model('shows',{
    movieName: String,
    timing: String,
    seats: Number,
    cost: Number,
});
  
const Venue = new mongoose.model('venue',{
name: String,
location: String,
shows: [Show],
});


module.exports={
  User,
  Booking,
  Show,
  Venue  
};