class FireTestController {
  constructor($firebaseArray, $firebaseObject) {
    let ref = new Firebase("https://dazzling-fire-3687.firebaseio.com/todo")
    this.list =
    this.item = "";
  }

  addToList() {
    this.list.$add({
      name: this.item,
      completed: false
    });

  }

  removeItem(item) {
    //??
  }

  toggleCompleted(item) {
    if (item.completed) {
      item.completed = !item.completed;
      // console.log(item);
      this.list.$save(item);
      // console.log(this.item);

    }
  }
}
