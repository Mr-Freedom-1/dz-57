// Завдання 1
// const users = [
//     { name: 'Mike', age: 25 },
//     { name: 'Bob', age: 32 },
//     { name: 'Nikola', age: 17 },
// ];

// const data = JSON.stringify({ users: users });

// const fs = require('fs');

// fs.writeFile('data.json', data, (err) => {
//   if (err) throw err;
//   console.log('Data has been saved to data.json');
// });

// Завдання 2
// const fs = require('fs');
// const path = require('path');
// const os = require('os');

// const users = [
//   { name: 'Mike', age: 25 },
//   { name: 'Bob', age: 32 },
//   { name: 'Nikola', age: 17 },
// ];

// const data = JSON.stringify({ users: users });

// const homeDir = os.homedir();
// const filePath = path.join(homeDir, 'data.json');

// fs.writeFile(filePath, data, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(`Data has been saved to ${filePath}`);
//     }
// });

// Завдання 3
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

const users = [
  { name: 'Mike', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Nikola', age: 17 },
];

const newData = [
  { name: 'Anna', age: 24 },
  { name: 'Tom', age: 52 },
];

const homeDir = os.homedir();
const filePath = path.join(homeDir, 'data.json');

async function updateData() {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(fileContent);

    jsonData.users = jsonData.users.concat(newData);

    await fs.writeFile(filePath, JSON.stringify(jsonData));
    console.log(`Data has been updated in ${filePath}`);
    
  } catch (error) {
    console.error(`Error updating data: ${error}`);
  }
}

async function isExist(filePath) {
    try {
        await fsPromises.stat(filePath);
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') {
            return false;
        }
        throw err;
    }
};

updateData();
