import mongoose from 'mongoose';

const logSchema = mongoose.Schema(
  {
    project: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdOn: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Log = mongoose.model('Log', logSchema);

export default Log;
