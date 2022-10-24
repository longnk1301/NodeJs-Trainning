const ObserveClass = require("./modules/observe");

// Init Observe object
let Observe = new ObserveClass();

// Define folder to watching, in real project, you should put it in file config or env
let targetFolder = "../laravel-example/storage/logs";

// Listen event new file has been added
Observe.on("new-file-has-been-added", (logData) => {
  // In this step, you can do anything you want, like to push alert message to chatwork, slack...vv
  // I just print error message to console
  console.log(logData.message);
});
Observe.on("file-has-been-updated", (logData) => {
  // In this step, you can do anything you want, like to push alert message to chatwork, slack...vv
  // I just print error message to console
  console.log(logData.message);
});

// Start watching folder...
Observe.watchFolder(targetFolder);
