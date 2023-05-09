const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://krishnamoorthy:krishna2000@cluster0.exf7eoz.mongodb.net/ticketbooking",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }


};

module.exports = { connection };