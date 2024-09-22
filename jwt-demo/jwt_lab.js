const jwt = require('jsonwebtoken');
require("dotenv").config();
const ustoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTcyNjgzMTkyNn0.REb7J6y9NYVi9dyFpZF1mwHyVLW6B2Sd56DFcRPqg4M"

// Function to create and sign a JWT
function createJWT() {
    const payload = {
      userId: 123,
      username: 'exampleUser'
    };
    const secretKey = process.env.JWT_SECRET ; // Replace with your secret key
  
    // Sign the JWT with the payload and secret key
    const token = jwt.sign(payload, secretKey);
  
    console.log('JWT Token:', token);
  }
  
  // Call the function to create and sign a JWT
  createJWT();


  // Function to verify a JWT
function verifyJWT(token) {
    const secretKey = process.env.JWT_SECRET ; // Replace with your secret key
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.error('JWT Verification Failed:', err.message);
      } else {
        console.log('JWT Verified. Decoded ~~~~~~~~~~:', decoded);
      }
    });
  }
  
  // Replace 'yourTokenHere' with a JWT token you generated in Step 4
  const jwtTokenToVerify = ustoken;
  
  // Call the function to verify the JWT
  verifyJWT(jwtTokenToVerify);



  // Function to decode a JWT
function decodeJWT(token) {
    const decoded = jwt.decode(token);
  
    console.log('Decoded JWT:', decoded);
  }
  
  // Replace 'yourTokenHere' with a JWT token you generated in Step 4
  const jwtToken = ustoken;
  
  // Call the function to decode the JWT
  decodeJWT(jwtToken);