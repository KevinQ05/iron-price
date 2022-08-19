const asyncHandler = require("../middleware/async");
const Split = require("../models/Split");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Create a split
// @route   POST /api/v1/user/:userId/splits
// @access  Private
exports.createSplit = asyncHandler(async (req, res, next) => {
  const split = await Split.create(req.body);
  res.status(201).json({
    success: true,
    data: split,
  });
});
