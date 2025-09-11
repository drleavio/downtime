import { Schema, model, models } from "mongoose";
import StatusSchemas from "./statusSchema";

const statusSchemaArray = new Schema(
  {
    link: {
      type: String,
      required: true,
    },

    // Reference to User (connect schema with User)
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Embed array of status subdocuments
    statusArray: [StatusSchemas],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const StatusSchemaArray =
  models.StatusSchemaArray || model("StatusSchemaArray", statusSchemaArray);

export default StatusSchemaArray;
