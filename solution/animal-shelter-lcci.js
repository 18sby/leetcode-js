var AnimalShelf = function () {
  this.animals = [[], []]; // 0 猫 | 1 狗
};

/** 
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function (animal) {
  let [order, kind] = animal;
  this.animals[kind].push(order);
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function () {
  let [catList, dogList] = this.animals;

  if (catList.length > 0 && dogList.length > 0) {
    if (catList[0] < dogList[0]) {
      return [catList.shift(), 0];
    }

    if (catList[0] > dogList[0]) {
      return [dogList.shift(), 1];
    }
  }

  if (catList.length > 0) {
    return [catList.shift(), 0];
  }

  if (dogList.length > 0) {
    return [dogList.shift(), 1];
  }

  return [-1, -1];
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function () {
  let [, dogList] = this.animals;
  if (dogList.length <= 0) {
    return [-1, -1];
  }

  return [dogList.shift(), 1];
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function () {
  let [catList,] = this.animals;
  if (catList.length <= 0) {
    return [-1, -1];
  }

  return [catList.shift(), 0];
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */