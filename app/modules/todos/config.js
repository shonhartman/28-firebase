function config($stateProvider) {
  $stateProvider
    .state("controller", {
      url: "/",
      controller: "FireTestController as fireCtrl",
      template: require('./view.html')

    });
}

export default config;
