class FireTestController {
  constructor($firebaseArray, $firebaseObject) {
    let ref = new Firebase("https://dazzling-fire-3687.firebaseio.com/todo")
    this.list = $firebaseArray(ref);
    this.item = "";
  }

  addToList() {
    this.list.$add({
      name: this.item,
      completed: false
    });

  }

  removeItem(item) {
    this.list.$remove(item);
			// this.item.splice(this.item.indexOf(list), 1);
			// console.log("splice");


  }

  toggleCompleted(item) {
    // if (item.completed) {
      item.completed = !item.completed;
      // console.log(item);
      this.list.$save(item);
      // console.log(this.item);

    // }
  }
}

export default FireTestController;
