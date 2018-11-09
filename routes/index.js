const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

module.exports = router;