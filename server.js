const { error } = require('console');
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// middleware, jayar somoi age amr sathe dekha kore jaba 👽
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }

});

const upload = multer({
    storage: storage
});

// index route
app.get('/', (req, res) => {
    res.render('index');
})

// show the img after upload 
app.post('/api/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const imgUrl = `/uploads/${req.file.filename}`; 
    // pass imageUrl to the template
    res.render('index', { imageUrl: imgUrl }); 
});




app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})