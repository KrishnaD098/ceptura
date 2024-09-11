const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');  // Save files to the "uploads" directory
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// File filter to allow only PDFs
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Only PDFs are allowed'), false);
    }
};

// Initialize multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024  // Limit file size to 5 MB
    }
});

// Route to handle PDF upload
router.post('/upload-pdf', upload.fields(
    [{
        name: "pdfFile",
        maxCount: 1
    }]
), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded or invalid file type.');
        }
        
        // At this point, the PDF has been saved to the "uploads" directory
        const filePath = req.file.path;
        
        // Further processing can be done here, such as saving the file path to the database
        
        res.status(200).json({
            message: 'PDF uploaded successfully',
            filePath: filePath
        });
    } catch (error) {
        res.status(500).send('An error occurred during the upload.');
    }
});

module.exports = router;
