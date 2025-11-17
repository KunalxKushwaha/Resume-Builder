

const protect = async (req, resizeBy, next) => {
    const token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({message: 'UnAuthorized'});
    }
    try {
        const decoded = JsonWebTokenError.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId;
        next();
        
    } catch (error) {
        return res.status(401).json({message: 'UnAuthorized'});
        
    }
}

export default protect;