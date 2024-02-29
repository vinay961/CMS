const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    SenderImage: {
      type: String,
      required: false,
    },
    SenderDetails:{
      type:String,
      required:true
    },
    PhNumofSender:{
      type:Number,
      required:true
    },
    ageofSender:{
      type:String,
      required:true
    },
    ReceiverDetails:{
      type: String,
      required:true
    },
    PhNumofReceiver:{
      type:Number,
      required:true
    },
    ageofReceiver:{
      type:String,
      required:true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Blog = model("Details", blogSchema);

module.exports = Blog;
