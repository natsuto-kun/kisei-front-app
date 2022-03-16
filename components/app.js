// @ts-check
//  <ImportConfiguration>
const CosmosClient = require("@azure/cosmos").CosmosClient;
const { Item, Items } = require("@azure/cosmos");
const dbContext = require("./data/databaseContext");
//  </ImportConfiguration>

//  <DefineNewItem>
const newItem = {
  id: "7",
  time: "17:22",
  name: "sample data 4",
  isComplete: false
};
//  </DefineNewItem>

const GetDB = async () => {
  
  // <CreateClientObjectDatabaseContainer>

  const client = new CosmosClient({ endpoint:process.env.ENDPOINT, key:process.env.KEY });

  const database = client.database(process.env.DATABASED);
  const container = database.container(process.env.CONTAINERID);

  // Make sure Tasks database is already setup. If not, create it.
  await dbContext.create(client, process.env.DATABASED, process.env.CONTAINERID);
  // </CreateClientObjectDatabaseContainer>
  
  const querySpec = {
      query: "SELECT * FROM Items"
  }

  try {
    // <QueryItems>
    console.log(`Querying container: Items`);

    // クエリを全部かえす
    const querySpec = {
      query: "SELECT * from c"
    };
    
    // コンテナのアイテムを取得!
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();

    items.forEach(item => {
      console.log(`${item.id} - ${item.time}`);
    });
    
    //新しいアイテムの作成
    const { resource: createdItem } = await container.items.create(newItem);
    
    console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.description}\r\n`);
    // </CreateItem>
    
    // <UpdateItem>
    /** Update item
     * Pull the id and partition key value from the newly created item.
     * Update the isComplete field to true.
     */
    const { id, category } = createdItem;

    createdItem.isComplete = true;

    const { resource: updatedItem } = await container
      .item(id, category)
      .replace(createdItem);

    console.log(`Updated item: ${updatedItem.id} - ${updatedItem.description}`); 
    console.log(`Updated isComplete to ${updatedItem.isComplete}\r\n`);
    // </UpdateItem>
    
    // <DeleteItem>    
    /**
     * Delete item
     * Pass the id and partition key value to delete the item
     */
    const { resource: result } = await container.item(id, category).delete();
    console.log(`Deleted item with id: ${id}`);
    // </DeleteItem>  

    
  } catch (err) {
    console.log(err.message);
  }

  return Items;
}

GetDB();