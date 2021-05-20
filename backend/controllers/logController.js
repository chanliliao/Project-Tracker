import Log from '../models/logModel.js';
import asyncHandler from 'express-async-handler';

//@desc   Create log
//@route  POST /api/logs/
//@access Public
const createLog = asyncHandler(async (req, res) => {
  // create boiler plate for new product

  const { project, type, message, createdOn } = req.body;

  const log = new Log({
    project,
    type,
    message,
    createdOn,
  });

  // create the product and send it
  const createdLog = await log.save();
  res.status(201).json(createdLog);
});

//@desc   Fetch all logs
//@route  GET /api/logs
//@access Public
const getLogs = asyncHandler(async (req, res) => {
  // this is how to get the question mark
  const keyword = req.query.keyword
    ? {
        project: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const logs = await Log.find({ ...keyword });

  res.json({ logs });
});

//@desc   delete a log
//@route  DELETE /api/logs/:id
//@access Public
const deleteLog = asyncHandler(async (req, res) => {
  // grab the product by id
  const log = await Log.findById(req.params.id);

  // check product and remove it
  if (log) {
    await log.remove();
    res.json({ message: 'Log removed' });
  } else {
    res.status(404);
    throw new Error('Log does not exist');
  }
});

export { getLogs, deleteLog, createLog };
