const jwt = require('jsonwebtoken');
const Student = require('../models/studentModel');

const requireStudentAuth = async (req, res, next) => {
    // Check for authorization header
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    // Extract token from the header
    const token = authorization.split(' ')[1];

    try {
        // Verify token
        const { _id } = jwt.verify(token, process.env.SECRET);
        
        // Find the student by ID
        req.user = await Student.findOne({ _id }).select('_id');
        
        if (!req.user) {
            throw new Error('Student not found');
        }
        
        next();
    } catch (error) {
        console.error('Authorization error:', error);
        res.status(401).json({ error: 'Request is not authorized' });
    }
};

module.exports = requireStudentAuth;
