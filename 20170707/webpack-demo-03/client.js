require("./src/app");

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    console.log("123456");
  });
}
