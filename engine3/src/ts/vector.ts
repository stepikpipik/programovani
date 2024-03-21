

class Vector {

    x: number = 0;
    y: number = 0;

    constructor(...args: [x: number, y: number] | [v: Vector] | []) {
        this.set(...args);
    }

    set(...args: [x: number, y: number] | [v: Vector] | []): Vector {
        this.x = 0;
        this.y = 0;

        if (args[0] instanceof Vector) {
            this.x = args[0].x;
            this.y = args[0].y;
        }
        else if (typeof args[0] == "number" && typeof args[1] == "number") {
            this.x = args[0];
            this.y = args[1];
        }

        return this;
    }

    mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    add(...args: [x: number, y: number] | [v: Vector]): Vector {
        if (args[0] instanceof Vector) {
            this.x += args[0].x;
            this.y += args[0].y;
        }
        else if (typeof args[1] == "number") {
            this.x += args[0];
            this.y += args[1];
        }
        else throw "Invalid arguments";

        return this;
    }

    sub(...args: [x: number, y: number] | [v: Vector]): Vector {
        if (args[0] instanceof Vector) {
            this.x -= args[0].x;
            this.y -= args[0].y;
        }
        else if (typeof args[1] == "number") {
            this.x -= args[0];
            this.y -= args[1];
        }
        else throw "Invalid arguments";

        return this;
    }

    mult(...args: [n: number] | [x: number, y: number] | [v: Vector]): Vector {
        if (args[0] instanceof Vector) {
            this.x *= args[0].x;
            this.y *= args[0].y;
        }
        else if (args[1] == undefined) {
            this.x *= args[0];
            this.y *= args[0];
        }
        else {
            this.x *= args[0];
            this.y *= args[1];
        }

        return this;
    }

    static add(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }

    static sub(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }

    static mult(...args: [v: Vector, n: number] | [n: number, v: Vector] | [v1: Vector, v2: Vector]): Vector {
        if (args[0] instanceof Vector && args[1] instanceof Vector)
            return new Vector(args[0].x * args[1].x, args[0].y * args[1].y);
        else if (args[0] instanceof Vector && typeof args[1] == "number")
            return new Vector(args[0].x * args[1], args[0].y * args[1]);
        else if (typeof args[0] == "number" && args[1] instanceof Vector)
            return new Vector(args[0] * args[1].x, args[0] * args[1].y);
        
        throw "Invalid arguments";
    }

    static lerp(a: Vector, b: Vector, t: number): Vector {
        return Vector.add(Vector.mult(a, 1 - t), Vector.mult(b, t));
    }

    static dot(a: Vector, b: Vector): number {
        return a.x * b.x + a.y * b.y;
    }

    static up(): Vector { return new Vector(0, -1); }
    static right(): Vector { return new Vector(1, 0); }
    static down(): Vector { return new Vector(0, 1); }
    static left(): Vector { return new Vector(-1, 0); }
}


function createVector(...args: [x: number, y: number] | []) {
    return new Vector(...args);
}