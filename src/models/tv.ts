import { Schema, model, models, Types } from "mongoose";

const TvSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Tv = models.Tv || model("Tv", TvSchema);

export default Tv;
