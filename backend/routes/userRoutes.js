import { Router } from "express";
import User from "../models/User.js";

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
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json(user);
    }
});

router.delete("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json(user);
    }
});


export default router;