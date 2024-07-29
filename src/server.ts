import { app } from "./app";
import { parsedEnv } from "./configs";

const port = parsedEnv.PORT || 3000;

app.listen(port, () => {
	console.log(`Api sucessully started at port ${port}`);
});
