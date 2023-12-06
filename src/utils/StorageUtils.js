export default class StorageUtils {
  static setItem(k, v) {
      localStorage.setItem(k, JSON.stringify(v))
  }

  static getItem(k) {
      return localStorage.getItem(k) ? JSON.parse(localStorage.getItem(k)) : null;
  }

  static setToken(token) {
      StorageUtils.setItem('token', token);
  }

  static getToken() {
      return StorageUtils.getItem('token')
  }
}