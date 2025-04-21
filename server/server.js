const express = require("express");
const multer = require("multer");
const cors = require("cors");
// const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder to save uploaded files
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Create the uploads folder if not exists
const fs = require("fs");
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.status(200).json({
    message: "File uploaded successfully",
    fileName: req.file.filename,
    filePath: `/uploads/${req.file.filename}`,
  });
});

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
