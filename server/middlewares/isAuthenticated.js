import jwt from 'jsonwebtoken';

const isAuthenticated =  (req, res, next) => {

    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication token is missing"
            });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded) {
            return res.status(401).json({
                success: false,
                message: "Invalid authentication token"
            });
        }
        req.id = decoded.userId;
        next();
    } catch (error) {
        console.log(error);
    }
};
export default isAuthenticated;