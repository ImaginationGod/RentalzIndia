import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser"
import { Property } from './models/property.js'
import multer from "multer";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

const app = express()
const port = process.env.PORT || 3000

dotenv.config();
app.use(cors())
app.use(bodyParser.json())

// MongoDB connection
await mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// Cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer setup (store files temporarily in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

//Login
app.post('/', (req, res) => {
  if (req.body.nameee == process.env.USER && req.body.passworddd == process.env.PASS) {
    res.json(true) //Sending data to React.js
  }
  else {
    res.json(false)
  }
})

//Displaying Properties
app.get('/property', async (req, res) => {
  try {
    const properties = await Property.find({});
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch properties", details: error.message });
  }
});

// ✅ Upload multiple images
app.post("/input", upload.array("images", 15), async (req, res) => {
  try {
    const uploadedImages = await Promise.all(
      req.files.map(async (file) => {
        const b64 = Buffer.from(file.buffer).toString("base64");
        const dataURI = "data:" + file.mimetype + ";base64," + b64;

        const result = await cloudinary.v2.uploader.upload(dataURI, {
          folder: "properties"
        });
        return result.secure_url;
      })
    );

    const newProperty = new Property({
      title: req.body.title,
      location: req.body.location,
      price: req.body.price,
      type: req.body.type,
      // status: req.body.status,
      area: req.body.area,
      bedroom: req.body.bedroom,
      bathroom: req.body.bathroom,
      propertyType: req.body.propertyType,
      // description: req.body.description,
      images: uploadedImages
    });

    await newProperty.save();
    res.json({ message: "Property saved!", property: newProperty });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});


app.post('/delete', async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.body._id);
    if (deletedProperty) {
      // console.log('Property deleted successfully:', deletedProperty);
      res.json({ success: true, id: req.body._id });
    } else {
      // console.log('Property not found with ID:', req.body._id);
      res.json({ success: false, id: req.body._id });
    }
  } catch (error) {
    console.error('Error deleting property:', error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})