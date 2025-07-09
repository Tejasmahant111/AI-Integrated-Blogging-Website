import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

// Immediately-invoked async function for top-level await workaround
(async () => {
  try {
    await connectDB();

    // Middlewares
    app.use(cors());
    app.use(express.json());

    // Routes
    app.get('/', (req, res) => res.send("API is Working"));
    app.use('/api/admin', adminRouter);
    app.use('/api/blog', blogRouter);

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
})();

export default app;
