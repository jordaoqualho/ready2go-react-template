import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persist = {
  key: "redux",
  version: 1,
  storage,
};

export const middleware = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

const config = {
  backendUrl: process.env.REACT_APP_BACKEND_URL,
  environment: process.env.REACT_APP_ENVIRONMENT,
  persist: persist,
  middleware: middleware,
};

if (process.env.NODE_ENV === "development") {
  config.backendUrl = process.env.REACT_APP_BACKEND_URL_LOCAL;
}

export default config;
