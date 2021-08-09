const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
    const date = new Date();
    const hour = parseInt(date.getHours());
    if (hour >= 6 && hour < 18) {
        style = "day.css";
    }
    else style="night.css"

    res.render("index", {
        time: date.toTimeString(),
        style: style,
    });
});
app.listen(3000);
console.log("Server is running on port 3000");