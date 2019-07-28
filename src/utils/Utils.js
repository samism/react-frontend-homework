class Utils {
  static clone(items) {
    return items.map(item => (Array.isArray(item) ? Utils.clone(item) : item));
  }

  static compare(a, b) {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  }
}

export default Utils;
