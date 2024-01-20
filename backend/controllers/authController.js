const mongoose = require('mongoose');
const uri = "mongodb+srv://hollanishan:nishanholla@cluster0.muanix2.mongodb.net/TicketSnatcher";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const{User,Booking} = require('../mongoUtil');

async function register(username,email,password){
    const user = new User({
        username:username,
        email:email,
        password:password,
        booking:[]
    });
    await mongoose.connection;
    try {
        const foundUser = await User.findOne({username:username});
        if (foundUser) {
        return false;
        } else {
        await user.save()
        return true;
        }
    } catch (error) {
        console.error('Error checking user:', error);
    }
}

async function signIn(email,password){
  const user = new User({
      email:email,
      password:password
  });
  await mongoose.connection;
    try {
        const foundUser = await User.findOne({email:email});
        if(foundUser){
            if(foundUser.password == password){
                return foundUser.username;
            }else{
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error checking user:', error);
    }
}

exports.login = (req, res) => {
  const { email, password } = req.body;
    signIn(email,password).then(
        (user)=>{
            if(user){
                res.json({user:user});
            }else{
                res.json({message:"Invalid user or password"});
            }
        }
    );
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.json({ message: 'Logout successful' });
};

exports.register = (req, res) => {
    const { username,email,password } = req.body;
    if(register(username,email,password)==true){
        res.json({message:"User succesfully registered"})
    }else{
        res.json({
            message:"User already exists"
        })
    }

};
