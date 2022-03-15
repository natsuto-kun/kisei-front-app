const config = {
    endpoint: "https://kisei-player-data.documents.azure.com:443/",
    key: "TIiQdZbpXAO7EZwCQ7sQt21JcZscAOFdApEvg17TXyIwuPbPDfVUEY8Bzm5MmYKuYwOItvTrwef1JG9FY4rwZw==",
    databaseId: "Users",
    containerId: "playdata",
    partitionKey: { kind: "Hash", paths: ["/time"] }
  };
  
  module.exports = config;