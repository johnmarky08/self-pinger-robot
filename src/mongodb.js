import mongoose from "mongoose";

const LinksSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
  },
  {
    timestamps: true,
  }
);

const Link = mongoose.model("Links", LinksSchema);

export default Link;
