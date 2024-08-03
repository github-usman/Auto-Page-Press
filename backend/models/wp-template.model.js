import mongoose from "mongoose";

const wpTemplateSchema = new mongoose.Schema(
  {
    baseUrl: {
      type: String,
      required: [true, "Please enter your base url"],
    },
    pages: {
      type: Map,
      of: [String],
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    advanceFiled: {
      type: String,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("WpTemplate", wpTemplateSchema);
