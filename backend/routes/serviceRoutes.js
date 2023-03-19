import { Router } from "express";
import Service from "../models/Services.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/name/:username", async (req, res) => {
  try {
    const services = await Service.find({
      username: req.params.username,
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


router.post("/", async (req, res) => {
  const service = req.body;
  const newService = new Service(service);
  try {
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404).json({ message: "Service not found" });
  } else {
    res.status(200).json(service);
  }
});

router.delete("/:name", async (req, res) => {
  const service = await Service.findOne({
    name: req.params.name,
  });
  if (!service) {
    res.status(404).json({ message: "Service not found" });
  } else {
    await service.remove();
    res.status(200).json({ message: "Service deleted successfully" });
  }
});

export default router;
