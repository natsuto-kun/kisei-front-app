const CosmosClient = require("@azure/cosmos").CosmosClient;

/*
// This script ensures that the database is setup and populated correctly
*/
async function create(client, DATABASEID, CONTAINERID) {
  const partitionKey = { kind: process.env.PARTITIONKEY_KIND, paths: process.env.PARTITIONKEY_PATHS };

  /**
   * Create the database if it does not exist
   */
  const { database } = await client.databases.createIfNotExists({
    id: DATABASEID
  });
  console.log(`Created database:\n${database.id}\n`);

  /**
   * Create the container if it does not exist
   */
  const { container } = await client
    .database(DATABASEID)
    .containers.createIfNotExists(
      { id: CONTAINERID, partitionKey },
      { offerThroughput: 400 }
    );

  console.log(`Created container:\n${container.id}\n`);
}

module.exports = { create };