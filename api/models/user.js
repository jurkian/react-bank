const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Models
const Message = require('@models/message');
const Card = require('@models/card');
const Transaction = require('@models/transaction');

const userSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         trim: true,
         lowercase: true
      },
      email: {
         type: String,
         unique: true,
         required: true,
         trim: true,
         lowercase: true
      },
      password: {
         type: String,
         required: true,
         minlength: 8,
         trim: true
      },
      firstName: {
         type: String,
         required: true,
         minlength: 2
      },
      lastName: {
         type: String,
         required: true,
         minlength: 2
      }
   },
   {
      timestamps: true
   }
);

// Get basic user's fields, delete sensitive fields
userSchema.methods.getBasic = function() {
   const userObject = this.toObject();

   delete userObject.password;

   return userObject;
};

// Hash the plain text password before saving
userSchema.pre('save', async function(next) {
   const user = this;

   if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8);
   }

   next();
});

// Experimental
// Delete all user related cards, messages and transactions when he is removed
// It probably won't happen in a real world banking app
userSchema.pre('remove', async function(next) {
   const user = this;

   await Card.deleteMany({ owner: user._id });
   await Message.deleteMany({ sender: user._id, receiver: user._id });
   await Transaction.deleteMany({ sender: user._id, receiver: user._id });

   next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
