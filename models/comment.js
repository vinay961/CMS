const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    billMode:{
      type:String,
      require:true
    },
    blogId:{
      type:Schema.Types.ObjectId,
      ref:"blog"
    },
    createdBy:{
      type:Schema.Types.ObjectId,
      ref:"user"
    },

  },
  { timestamps: true }
);

const Comment = model("Billing", commentSchema);

module.exports = Comment;
