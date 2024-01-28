export class BaseDTO<T> {
  private _data: T[];
  private _explanation: string;

  constructor(data: T[], explanation: string) {
    this._data = data;
    this._explanation = explanation;

  }
  public get explanation(): string {
    return this._explanation;
  }
  public set explanation(value: string) {
    this._explanation = value;
  }

  public get data(): T[] {
    return this._data;
  }
  public set data(value: T[]) {
    this._data = value;
  }
}