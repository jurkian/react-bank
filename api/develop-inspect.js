const cluster = require("cluster");
const inspector = require("inspector");
const develop = require("strapi/lib/commands/develop.js");

// propagate the port number to the new cluster, normally each time a cluster forks, it assigns
// a random ip to the inspector
cluster.setupMaster &&
   cluster.setupMaster({
      inspectPort: process.debugPort,
   });

// Close inspector manually on fork so we can keep reusing the same inspector window in new forks.
cluster.on("fork", (worker) => {
   inspector.close();
});

// Call the original develop command
develop(false, true);
