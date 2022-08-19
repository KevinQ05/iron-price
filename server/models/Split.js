const mongoose = require("mongoose");
const { getMe } = require("../controllers/auth");

const SplitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  description: {
    type: String,
    default: "",
  },
  excercises: {
    type: [String],
    default: [""],
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

SplitSchema.pre("save", async function (req, res, next) {
  const user = await getMe(req, res, next);
  const { data } = user;
  this.user_id = data._id;
});

module.exports = mongoose.model("Split", SplitSchema);
