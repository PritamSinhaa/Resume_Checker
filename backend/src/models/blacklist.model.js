const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required to added in blacklist."],
    },
  },
  {
    timestamps: true,
  },
);

// Automatically delete the document after 24 hours
// blacklistTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const tokenBlacklistModel = mongoose.model(
  "BlacklistToken",
  blacklistTokenSchema,
);

module.exports = tokenBlacklistModel;
