function config($stateProvider) {
  $stateProvider
    .state("controller", {
    url: "/",
    controller: "FireTestController as fireCtrl",
    template: require('./tiy.todos/view.html')

  })
}
