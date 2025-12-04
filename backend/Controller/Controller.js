const mongoose = require('mongoose');
const User = require('../models/Schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');


const createUser = async (req, res) => {
    try {
        const { name, email, password, height, weight, age, gender, activityLevel, goal, healthConditions, medications, allergies, birthDate, bioData, location, id } = req.body;
        
        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create user with hashed password
        const user = await User.create({ 
            name, 
            email, 
            password: hashedPassword, 
            height, 
            weight, 
            age, 
            gender, 
            activityLevel, 
            goal, 
            healthConditions, 
            medications, 
            allergies, 
            birthDate, 
            bioData, 
            location, 
            id 
        });
        
        res.status(201).json({ 
            message: 'User created successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your-secret-key');
        res.status(200).json({ 
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error during login', error: error.message });
    }
}

module.exports = { createUser, loginUser };