import app from "./src/app.js";
import { application } from "./src/config/index.js";

const startApp = async () => {
  try {
    await app.listen(application.PORT, () => {
      console.log(`Server running ${application.PORT} : port`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

startApp();
