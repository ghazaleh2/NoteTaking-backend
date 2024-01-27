const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: String, required: true },
    date: { type: Date, default: Date.now } // Include the date field with default value
  },
  {
    versionKey: false,
  }
);

const NoteModel = mongoose.model("note", noteSchema);

module.exports = {
  NoteModel,
};
