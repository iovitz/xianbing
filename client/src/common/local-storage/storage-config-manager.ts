import { get, set } from "lodash-es";
import LSUtils from "./local-storage";

const StorageConfig = {
  storageKey: "__APP_CONFIG__",

  getConfig() {
    try {
      const config = JSON.parse(LSUtils.getItem(this.storageKey)!);
      return config;
    } catch (e) {
      // 修补配置
      return null;
    }
  },

  setConfig(config: Object) {
    return LSUtils.setItem(this.storageKey, JSON.stringify(config));
  },

  getItem(key: string) {
    const config = this.getConfig;
    return get(config, key);
  },

  setItem(key: string, value: unknown) {
    const config = this.getConfig;
    set(config, key, value);
    return this.setConfig(config);
  },
};

export default StorageConfig;
