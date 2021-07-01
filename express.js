const express = require("express");
const app = express();
const port = 7049;

app.use(express.static("static"));

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.listen(port, () => {
	console.log(`Express app listening at http://localhost:${port}`);
});
