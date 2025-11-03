import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact form data received:', { name, email, message });

  // Future mein yahan database save kar sakte ho
  res.json({ success: true, message: 'Message received successfully!' });
});

export default router;
