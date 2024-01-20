const session = require('express-session');
const mongoose = require('mongoose');
const uri = "mongodb+srv://hollanishan:nishanholla@cluster0.muanix2.mongodb.net/TicketSnatcher";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const{User,Booking} = require('../mongoUtil');

async function register(name,email,password){
  const user = new User({
      username: username,
      email: email,
      password: password,
      bookings:[]
  });
  if(!user.findOne({username:username})){
      try{
          await user.save()
      }finally{
          mongoose.connection.close()
      }
      return true;
  }else{
      return false;
  }
}

async function signIn(email,password){
  const user = new User({
      email:email,
      password:password
  });
  try{
     exist = await User.findOne({email:email,password:password});
     if(!exist) return false;
  }finally{
      return true; 
  }
}

exports.login = (req, res) => {
  const { username, password } = req.body;
    if(signIn(username,password)){
        req.session.user = { username,password };
        res.json({ message: 'Sign-in successful', user: req.session.user });    
    }else{
        res.json({message:'Invalid User or Password'});
    }
};

exports.logout = (req, res) => {

};
  