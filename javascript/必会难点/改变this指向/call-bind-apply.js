const cat = {
  name: "小黑",
  eatFish(...args) {
    console.log("this指向=>", this);
    console.log("...args", args);
    console.log(this.name + "吃鱼");
  },
};

const dog = {
  name: "大毛",
  eatBone(...args) {
    console.log("this指向=>", this);
    console.log("...args", args);
    console.log(this.name + "吃骨头");
  },
};

console.log("=================== call =========================");

cat.eatFish.call(dog, "汪汪汪", "call");

dog.eatBone.call(cat, "喵喵喵", "call");

console.log("=================== apply =========================");
cat.eatFish.apply(dog, ["汪汪汪", "apply"]);
dog.eatBone.apply(cat, ["喵喵喵", "apply"]);

console.log("=================== bind =========================");

const test1 = cat.eatFish.bind(dog, "汪汪汪", "bind");
const test2 = dog.eatBone.bind(cat, "喵喵喵", "bind");
test1();
test2();