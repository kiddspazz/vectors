export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  normalize() {
    const length = this.magnitude();
    return new Vector(this.x / length, this.y / length);
  }

  subtract(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  static dotProduct(v1, v2) {
    return (v1.x * v2.x + v1.y * v2.y);
  }

  static indexFromVector(v, w) {
    return v.x + v.y * w;
  }

  static vectorFromIndex(i, w) {
    return new Vector(i % w, Math.floor(i / w));
  }

  static linearInterpolation(known, v1, v2) {
    const denominator = v2.x - v1.x;
    const numerator1 = v1.y * (v2.x - known);
    const numerator2 = v2.y * (known - v1.x);

    return (numerator1 + numerator2) / denominator;
  }

  static bilinearInterpolation(goalV, dotProducts) {
    const v1 = new Vector(0, dotProducts[0]);
    const v2 = new Vector(1, dotProducts[1]);
    const v3 = new Vector(0, dotProducts[2]);
    const v4 = new Vector(1, dotProducts[3]);

    const AB = Vector.linearInterpolation(goalV.x, v1, v2);
    const CD = Vector.linearInterpolation(goalV.x, v3, v4);

    const v5 = new Vector(0, AB);
    const v6 = new Vector(1, CD);
    const ABCD = Vector.linearInterpolation(goalV.y, v5, v6);

    return ABCD;
  }
}
