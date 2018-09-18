const xp = require("express");
const router = require("./server/routes");

const app = xp();
app.use(xp.static(__dirname + '/client/dist/client'));

router(app);

app.listen(8000, (errs) => console.log(errs?errs:"Now listening on port 8000"));
