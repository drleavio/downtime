import { Schema, model, models } from "mongoose";

const statusSchema = new Schema(
  {
    data: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);

// Use "Status" instead of "User"
const StatusSchemas = models.Status || model("Status", statusSchema);

export default StatusSchemas;
