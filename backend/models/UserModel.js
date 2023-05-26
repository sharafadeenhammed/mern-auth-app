import mongoose, { mongo } from "mongoose";
import bcrypt from "bcryptjs";
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please include a name field"],
    },
    email: {
      type: String,
      required: [true, "please include a email field"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please include a password field"],
      minLength: 8,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (req, res, next) {
  if (!this.isModified("password")) next();
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

UserSchema.methods.matchPassword = async function (password) {
  const hashPass = this.password;
  console.log(password, hashPass);
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", UserSchema);

export default User;
