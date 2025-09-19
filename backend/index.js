import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => res.send("Todo App Backend Running 🚀"));

// Export app for Vercel
export default app;

// Local dev
if (process.env.NODE_ENV !== "production") {
  import("./db.js").then(({ connectDB }) => {
    connectDB().then(() => {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    });
  });
}
