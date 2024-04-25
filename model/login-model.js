import mongoose from "mongoose";

const stringValidator = {
  type: String,
  required: true,
};
const LoginSchema = mongoose.Schema({
  email: stringValidator,
  username: stringValidator,
  password: stringValidator,
});
export default mongoose.model("LoginModel", LoginSchema);
