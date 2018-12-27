class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    r() {
        return Math.sqrt(
            this.x * this.x + this.y * this.y
        )
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

}

let p = new Point(1, 1)
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(p.r())
console.log(Point.distance(p1, p2));


class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea()
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Polygon(10, 10);

// 100
console.log(square.area);


class Animal {
    constructor(item) {
        this.name = item && item.name ? item.name : "未命名"
        this.value = item && item.name ? item.value : 0
    }

    set fullName(val) {
        this.firstname = "吴"
        this.lastname = "柯"
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(this.name + ' barks.');
    }
}

const d = new Dog({
    name: "我么"
});

d.name = "123"

console.log(d.name)

d.speak()

