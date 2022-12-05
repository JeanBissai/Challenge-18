const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
    },
    inPerson: {
      type: Boolean,
      default: true,
    },
    thoughts: {
      type: Date,
      default: Date.now(),
    },
    friends: {
      type: Date,

      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    toJSON: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model('course', courseSchema);

module.exports = Course;
