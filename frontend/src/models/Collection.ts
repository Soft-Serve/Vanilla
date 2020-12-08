export default class Collection<T> {
  constructor(payload?: T[]) {
    if (payload) {
      this.collection = payload;
    }
  }

  private _collection: T[] = [];

  get collection(): T[] {
    return this._collection;
  }

  set collection(payload: T[]) {
    this._collection = payload;
  }
}
