import { CookieSetOptions, CookieGetOptions } from 'universal-cookie';
import cookieService from '../../core/service/cookieService';
import { StorageDefines, StorageItem } from '../../core/model/storage';
import { StorageKeysEnum, StorageTypesEnum } from '../../core/enum/storage';

/**
 * @description 設定儲存值
 */
const setItem = (
  key: StorageKeysEnum,
  value: string,
  options?: CookieSetOptions
) => {
  switch (StorageDefines[key]) {
    case StorageTypesEnum.Local:
      localStorage.setItem(key, value);
      break;
    case StorageTypesEnum.Session:
      sessionStorage.setItem(key, value);
      break;
    case StorageTypesEnum.Cookies:
      cookieService.instance.set(key, value, options);
      break;
  }
};

/**
 * @description 取得儲存值
 */
const getItem = (key: StorageKeysEnum, options?: CookieGetOptions) => {
  switch (StorageDefines[key]) {
    case StorageTypesEnum.Local:
      return localStorage.getItem(key);
    case StorageTypesEnum.Session:
      return sessionStorage.getItem(key);
    case StorageTypesEnum.Cookies:
      return cookieService.instance.get(key, options);
  }
};

/**
 * @description 移除儲存值
 */
const removeItem = (key: StorageKeysEnum, options?: CookieSetOptions) => {
  switch (StorageDefines[key]) {
    case StorageTypesEnum.Local:
      localStorage.removeItem(key);
      break;
    case StorageTypesEnum.Session:
      sessionStorage.removeItem(key);
      break;
    case StorageTypesEnum.Cookies:
      cookieService.instance.remove(key, options);
      break;
  }
};

/**
 * @description 取得全部儲存值
 */
const getAll = {
  local: (): StorageItem[] => {
    return Object.keys(localStorage).map((k) => ({
      key: k,
      value: localStorage[k],
      type: StorageTypesEnum.Local,
      length: localStorage[k].length,
    }));
  },
  session: (): StorageItem[] => {
    return Object.keys(sessionStorage).map((k) => ({
      key: k,
      value: sessionStorage[k],
      type: StorageTypesEnum.Session,
      length: sessionStorage[k].length,
    }));
  },
  cookies: (): StorageItem[] => {
    return Object.keys(cookieService.instance.getAll()).map((k) => ({
      key: k,
      value: cookieService.instance.get(k),
      type: StorageTypesEnum.Cookies,
      length: cookieService.instance.get(k).length,
    }));
  },
  all: (): StorageItem[] => {
    const locals = getAll.local();
    const sessions = getAll.session();
    const cookies = getAll.cookies();
    return locals.concat(sessions).concat(cookies);
  },
};

/**
 * @description 清除全部儲存值
 */
const clearAll = {
  local: () => {
    localStorage.clear();
  },
  session: () => {
    sessionStorage.clear();
  },
  cookies: () => {
    cookieService.clear();
  },
  all: () => {
    clearAll.local();
    clearAll.session();
    clearAll.cookies();
  },
};

export default {
  setItem,
  getItem,
  removeItem,
  getAll,
  clearAll,
};
