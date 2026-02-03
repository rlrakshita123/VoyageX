import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    placeId: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    travelDate: {
      type: Date,
      required: true,
    },

    peopleCount: {
      type: Number,
      required: true,
      min: 1,
    },

    foodPreference: {
      type: String,
      enum: ["Veg", "Non-Veg", "Both"],
      required: true,
    },

    guide: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },

    notes: {
      type: String,
    },

    status: {
      type: String,
      enum: ["upcoming", "completed"],
      default: "upcoming",
    },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripSchema);

export default Trip;
