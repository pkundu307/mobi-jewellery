const {mongoose } = require("mongoose");

const imageSchema = new mongoose.Schema({
    url: String,
    color: String,
  });
  

  const Image = mongoose.model("Image", imageSchema);



module.exports=Image;