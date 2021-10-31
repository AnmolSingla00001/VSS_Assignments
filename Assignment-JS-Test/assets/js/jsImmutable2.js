// Create an object and apply object immutable properties over them.
// So if someone try to perform create, update, delete the following action should get logged.
// For example timestamp, action and object name should get logged on localstorage or through memoization.
// Hint : You need to use Object Prototype method and override few methods.

let proxyLogsArr = localStorage.getItem("proxyLogs");
if (proxyLogsArr == null) {
  proxyLogsArr = [];
}
console.log(proxyLogsArr);
console.log(typeof proxyLogsArr);

// Creating the main object
const actualObj = {
  name: "Anmol Singla",
  organisation: "Infosys Limited",
  objTest: {
    city: "Pune",
  },
};

// Creating the proxy object
const proxyObj = new Proxy(actualObj, {
  // Overriding the proxy methods
  set: (obj, prop, value) => {
    console.log(
      prop in obj
        ? "Existing Property cannot be modified"
        : "New Property cannot be added"
    );
    prop in obj
      ? proxyLogsArr.push({
          time: Date.now(),
          operation: "Update",
          property: prop,
        })
      : proxyLogsArr.push({
          time: Date.now(),
          operation: "Add",
          property: prop,
        });
  },
  deleteProperty: (obj, prop) => {
    console.log(
      prop in obj
        ? "Property cannot be deleted"
        : "Property to be deleted does not exist"
    );
    prop in obj
      ? proxyLogsArr.push({
          time: Date.now(),
          operation: "Delete",
          property: prop,
        })
      : proxyLogsArr.push({
          time: Date.now(),
          operation: "Add",
          property: prop,
        });
  },
});

// Testing Operations
proxyObj.name = "Changed Name";
proxyObj.designation = "Sr. Systems Engineer";
delete proxyObj.objTest;

// Setting the Local Storage
console.log(proxyLogsArr);
localStorage.setItem("proxyLogs", proxyLogsArr);
