import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("App running on port:", PORT);
});

// Corrected health check route
app.get("/health-check", (req, res) => {
    res.json({ message: "Server Health Check done." });
});
