const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const adminSchema = require("../models/admin");

// Check if admin with the same email already exists
const existingadmin = async (req, res, next) => {
  const { email } = req.body;
  try {
    const admin = await adminSchema.findOne({ email });
    if (admin) {
      return res
        .status(400)
        .json({ message: "user with this email already exists" });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Hash the password
const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error to create hashPassword" });
  }
};

// Sign up new user
router.post("/", existingadmin, hashPassword, async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const admin = new adminSchema({ name, username, email, password });
    await admin.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error in signup new admin" });
  }
});

module.exports = router;
