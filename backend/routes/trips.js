import express from "express";
import { requireAuth } from "../middlewares/authMiddleware.js";
import Trip from "../models/Trip.js";

const router = express.Router();

router.post("/", requireAuth, async (req, res) => {
  try {
    const {
      placeId,
      fullName,
      email,
      travelDate,
      peopleCount,
      foodPreference,
      guide,
      notes,
    } = req.body;

    const trip = await Trip.create({
      user: req.user.id,
      placeId,         
      fullName,
      email,
      travelDate,
      peopleCount,
      foodPreference,
      guide,
      notes,
      status: "upcoming", 
    });

    res.status(201).json({
      message: "Trip booked successfully",
      trip,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to book trip" });
  }
});


router.get("/my", requireAuth, async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.status(200).json({ trips });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch trips" });
  }
});

router.get("/:id", requireAuth, async (req, res) => {
  try {
    const trip = await Trip.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json({ trip });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch trip" });
  }
});

router.put("/:id", requireAuth, async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json({ message: "Trip updated successfully", trip });
  } catch (err) {
    res.status(500).json({ error: "Failed to update trip" });
  }
});

router.delete("/:id", requireAuth, async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json({ message: "Trip deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete trip" });
  }
});

export default router;
