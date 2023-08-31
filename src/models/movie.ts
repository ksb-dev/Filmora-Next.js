import { Schema, model, models, Types } from "mongoose";

const MovieSchema = new Schema(
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

const Movie = models.Movie || model("Movie", MovieSchema);

export default Movie;
