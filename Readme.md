# 🧾 Resumate -- Advanced AI-Powered Resume Builder

Resumate is a full-stack, modern, AI-enhanced **Resume Builder Web
Application** that allows users to design, customize, and download
professional resumes using multiple templates. The platform offers a
seamless experience with theme customization, template switching, resume
sharing, background removal, and more.

------------------------------------------------------------------------

## 🚀 Features

### ✅ **User Authentication**

-   Secure Signup & Login (JWT-based)
-   Fully animated login/signup UI with glassmorphism
-   Protected routes for dashboard and resume editor

### 🎨 **Resume Builder**

-   Multiple professional resume templates
-   Real-time preview update
-   Live editing with autosave
-   Drag-and-drop sections
-   Add / Delete / Reorder sections

### 🖼️ **AI Image & Media Tools**

-   Profile photo **background removal**
-   AI-cleaned images for resume profile section

### 🎭 **Template Management**

-   Select between multiple modern templates
-   Automatic styling and layout adjustment per template
-   Template-specific fonts, colors, and spacing

### 📝 **Resume Data Manager**

-   Edit personal details
-   Add education, skills, projects, experience, certificates
-   Smart validation & error handling

### 📥 **Export & Download Options**

-   Export resume as **PDF** with pixel-perfect accuracy
-   Supports multi-page resume rendering
-   High-quality export for ATS systems

### 🔗 **Public / Private Resume Sharing**

-   User can set resume visibility
-   Generate shareable public link
-   Private resumes accessible only to logged-in user

### ☁️ **Cloud Storage & API Integration**

-   User resumes stored securely in MongoDB
-   Resume templates stored on backend for dynamic switching
-   Cloudinary / sharp for image processing (optional)

### 📡 **Backend Features**

-   Node.js + Express API
-   JWT authentication middleware
-   Resume CRUD API
-   Background removal service
-   Secure file upload service

### 💾 **Database Structure (MongoDB)**

-   Users collection
-   Resume collection
-   Each resume stores sections, templates, theme, visibility, media,
    etc.

### 🌓 **Theme & UI Features**

-   Light/Dark mode support
-   Dashboard animations
-   Smooth transitions using Framer Motion
-   Modern Tailwind UI
-   Stunning gradient/glass backgrounds

------------------------------------------------------------------------

## 🛠️ Tech Stack

### **Frontend**

-   React.js
-   Tailwind CSS
-   Redux Toolkit (Auth / Resume States)
-   React Router v6
-   Framer Motion animations
-   Lucide Icons
-   Axios

### **Backend**

-   Node.js
-   Express.js
-   JWT Authentication
-   Multer (file handling)
-   MongoDB + Mongoose

### **Utilities**

-   Cloudinary (optional) / Sharp (image processing)
-   Background removal library
-   html2canvas / jsPDF for printing

------------------------------------------------------------------------

## 📁 Project Structure

    / Frontend
      ├── src
      │   ├── components
      │   ├── templates
      │   ├── pages
      │   ├── redux
      │   ├── utils
      │   └── styles
    / Backend
      ├── controllers
      ├── models
      ├── middleware
      ├── routes
      ├── uploads
      └── config

------------------------------------------------------------------------

## 🔧 Installation & Setup

### 1️⃣ Clone Repo

    git clone https://github.com/KunalxKushwaha/Resume-Builder.git
    cd Frontend

### 2️⃣ Install Frontend

    cd Frontend
    npm install
    npm run dev

### 3️⃣ Install Backend

    cd Backend
    npm install -y
    node server.js

### 4️⃣ Add Environment Variables

    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_secret_key
    IMAGEKIT_PRIIVATE_KEY=optional
    OPENAI_MODEL=optional

------------------------------------------------------------------------

## 🌐 API Endpoints Overview

### **Auth**

-   POST /api/users/register
-   POST /api/users/login
-   GET /api/users/me

### **Resume**

-   POST /api/resume/create
-   PUT /api/resume/update/:id
-   DELETE /api/resume/delete/:id
-   GET /api/resume/:id
-   GET /api/resume/public/:id

### **Image Tools**

-   POST /api/resume/upload-image
-   POST /api/resume/remove-background

------------------------------------------------------------------------

## 🔥 Special Functionalities

### 🔊 Public Resume Page

Users can share a unique link like: /resume/kunal123 Anyone can view if
the resume visibility is set to public.

### 🧹 Background Removal

User profile image background removed using: - sharp - rembg (optional)

### 📄 Multi-Template Rendering

Each template is a fully isolated component with its own: - Layout -
Fonts - Colors

### 📦 Autosave System

Resume saves automatically on every change using: - Redux state
tracking - Debounced API calls

------------------------------------------------------------------------

## 🙌 Contributions

Pull requests are welcome.

------------------------------------------------------------------------

## 📜 License

MIT License © 2025 Resumate

------------------------------------------------------------------------

## ⭐ Final Notes

Resumate is built to deliver professional resumes with AI-enhanced
features.


## Made with 💖 by Kunal Kushwaha