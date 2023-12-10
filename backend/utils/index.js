const fs = require("fs");

async function readFromFile(path) {
  try {
    const data = await fs.promises.readFile(path, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function writeToFile(path, data) {
  try {
    await fs.promises.writeFile(path, JSON.stringify(data));
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  readFromFile,
  writeToFile,
};
