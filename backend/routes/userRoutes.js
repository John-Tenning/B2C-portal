import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const newUser = await User.create({
      username: username,
      password: bcrypt.hashSync(password, 8),
      role: role,
    });
    res.status(201).json({ user: newUser._id });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(user);
  }
});

router.delete("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(user);
  }
});

router.delete("/name/:username", async (req, res) => {
  const user = await User.findOne({
    username: req.params.username,
  });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    await user.remove();
    res.status(200).json({ message: "User deleted successfully" });
  }
});



router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      const auth = bcrypt.compareSync(password, user.password);
      if (auth) {
        res.status(200).json({
          token: jwt.sign({ _id: user._id }, username),
          username : username,
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/name/:username", async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(user);
  }
});

export default router;
