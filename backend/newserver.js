const express = require('express');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is Up and Running`);
});

  
  
  // Example Usage:
  const bookingData = {
    username: 'John Doe',
    payment_mode: 'Credit Card',
    booking: { movieName: 'Movie A', tickets: ['A1', 'A2'] },
    amt: '50',
  };

  
    
    
  app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  }));

  app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if(signIn(username,password)){
        req.session.user = { username,password };
        res.json({ message: 'Sign-in successful', user: req.session.user });    
    }else{
        res.json({message:'Invalid User or Password'});
    }
  });

  app.post('/register', (req, res) => {
    const { username,email,password } = req.body;
    if(register(username,email,password)){
        res.json({message:"User has been succesfully registered."})
    }else{
        res.json({message:"User already exists."})
    }
  });

  app.post('/logout', (req, res) => {
    // Destroy the session
    req.session.destroy();
  
    // Optionally, clear the session cookie on the client side
    res.clearCookie('connect.sid');
  
    res.json({ message: 'Logout successful' });
  });  

  app.listen(3001,()=>{console.log("Express is Up and Running")})