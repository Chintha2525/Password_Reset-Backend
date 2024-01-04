import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://Chintha2525:Dinesh%402525@cluster0.go8c944.mongodb.net/password-reset"
  );
  if (res) {
    console.log("connected Successfully");
  }
};

export default connectDB;
