import express from 'express'
import mongoose from 'mongoose'

const ResumeSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title: {type: String, default: "Untitled Resume"},
    public: {type: Boolean, default: "false"},
    template: {type: String, default: "classic"},
    accent_color: {tyoe: String, default: '#3B82F6'},
})