class FireTestController {
  constructor($firebaseArray, $firebaseObject) {
    // console.log("in the controller");
    let ref = new Firebase("https://dazzling-fire-3687.firebaseio.com/todo")
    this.list = $firebaseArray(ref);
    this.item = "";
  }

  addToList() {
    this.list.$add({
      name: this.item,
      completed: false
    });
    // console.log("add to list");

  }

  removeItem(item) {
    this.list.$remove(item);
		// this.item.splice(this.item.indexOf(this.list), 1);
			// console.log("splice");


  }

  toggleCompleted(item) {
    console.log("wtf")
    // if (item.completed) {
      item.completed = !item.completed;
      console.log(item);
      // console.log(item);
      this.list.$save(item);
      // console.log(this.item);

    // }
  }
}

export default FireTestController;
