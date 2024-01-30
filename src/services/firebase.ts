
import FireBaseSettings from "../../FireBaseSettings.json"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const app = initializeApp(FireBaseSettings);
export const auth = getAuth(app)