const chokidar = require("chokidar");
const EventEmitter = require("events").EventEmitter;
const fsExtra = require("fs-extra");
const readLastLines = require("read-last-lines");

let debug = console.log.bind(console);

class Observe extends EventEmitter {
  constructor() {
    super();
  }
  /**
   * Function responsible for watching a folder
   * @param {string} targetFolder
   */
  watchFolder(targetFolder) {
    try {
      debug(
        `[${new Date().toLocaleString()}] Watching for folder changes on: ${targetFolder}`
      );
      // initialize watcher
      let watcher = chokidar.watch(targetFolder, { persistent: true });

      // Trường hợp này khác phần 2 một chút, lúc này khách hàng không muốn chúng ta xóa file error.log đi nữa, mà lại muốn chúng ta quan sát chỉ riêng file đó, nếu như có lỗi => nội dung file error.log được cập nhật, thì lấy ra đúng phần nội dung cập nhật mới nhất để thông báo thôi.
      watcher.on("change", async (filePath) => {
        debug(`[${new Date().toLocaleString()}] ${filePath} has been updated.`);
        // Get update content of file, in this case is one line
        let updateContent = await readLastLines.read(filePath, 1);
        // emit an event when the file has been updated
        this.emit("file-has-been-updated", { message: updateContent });
      });

      // listen when a file has been added
      // watcher.on("add", async (filePath) => {
      //   // if the new file's name is exactly error.log
      //   if (filePath.includes("error.log")) {
      //     debug(`[${new Date().toLocaleString()}] ${filePath} has been added.`);
      //     // Read content of new file
      //     let fileContent = await fsExtra.readFile(filePath);
      //     // emit an event when new file has been added
      //     this.emit("new-file-has-been-added", {
      //       message: fileContent.toString(),
      //     });
      //     // remove file error.log
      //     await fsExtra.unlink(filePath);
      //     debug(
      //       `[${new Date().toLocaleString()}] ${filePath} has been removed.`
      //     );
      //   }
      // });
    } catch (error) {
      debug(error.toString());
    }
  }
}
module.exports = Observe;
