import { logger } from "@/common/logger/logger";

const LSUtils = {
  getItem: (key: string) => {
    return localStorage.getItem(key);
  },

  setItem: <T>(key: string, data: T, safely = true) => {
    try {
      return localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      logger.error("Set localStorage fail!", e);
      if (!safely) {
        throw e;
      }
    }
    return null;
  },

  removeItem: (key: string) => {
    return localStorage.removeItem(key);
  },

  clear: () => {
    return localStorage.clear();
  },
};

export default LSUtils;
