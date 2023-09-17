import { app } from "./app";

const Port = process.env.PORT || 3000

app.listen(Port, () => console.log('app runnin fine at', Port) )