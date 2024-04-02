const User = require("../model/StudentModel");

const student_register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Email already registered' });
    } else {
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.json({ message: 'Registration successful' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const student_login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials', user: null });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', user: null });
  }
};


module.exports = {
  student_login,
  student_register
};
