# file uploader

A simple Express.js application for uploading and displaying images. This project uses Multer for handling file uploads and serves uploaded images from a static directory.

## Features

- **File Upload:** Upload images through a form.
- **Image Display:** Automatically displays the uploaded image on the same page.
- **Static File Serving:** Serve uploaded files from a dedicated directory.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tahsinzidane/file_uploader.git
   cd imageuploader
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create an `uploads` Directory**

   Make sure there is an `uploads` directory in the root of your project where files will be stored:

   ```bash
   mkdir uploads
   ```

4. **Run the Application**

   ```bash
   npm start 
   // or 
   npm run dev
   ```

   The application will start on `http://localhost:3000`.

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the form to select and upload an image.
3. The uploaded image will be displayed on the same page.

### Project Structure

- `server.js` - The main server file that handles file uploads and serves static files.
- `views/index.ejs` - The EJS template for the upload form and image display.
- `public/css/style.css` - CSS styles for the application.

### Configuration

- **Port:** The application listens on port `3000`. You can change this by modifying the `port` variable in `server.js`.

### Troubleshooting

- **No File Uploaded Error:** Ensure that the file input in the form is correctly set and that you are submitting the form with a file selected.
- **Image Not Displayed:** Verify that the `uploads` directory is correctly served and that the file was uploaded with the correct filename.

### Preview

<img src='./uploads/preview_img.png' alt='preview img '>


### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
