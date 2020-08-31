const expect = require('chai').expect;
const ItemsInWarehouse = require("../src/ItemsInWarehouse.js");
const warehouses = require("../dummyData/dummyData");



describe("Testing ItemsInWarehouse class", () => {
  
    before(() => {
      const name = "cho";
      itemsInWarehouse = new ItemsInWarehouse(name);
    });

    it("Should exist class ItemsInWarehouse", () => {
        expect(ItemsInWarehouse).to.exist;
      });
    
      it("Should have methods set & getItems", () => {
        expect(typeof itemsInWarehouse.set).to.equal("function");
        expect(typeof itemsInWarehouse.getItems).to.equal("function");
      });
  
    it("Should return the correct key and value", () => {
      itemsInWarehouse.set("mango", 2);
      const key = Object.keys(itemsInWarehouse.list["cho"])[0];
      const value = Object.values(itemsInWarehouse.list["cho"])[0];
      expect(key).to.equal("mango");
      expect(value).to.equal(2);
    });
  

    it("Should return the Items In Warehouse", () => {
        itemsInWarehouse.set("mango", 2);
      const list = itemsInWarehouse.getItems();
      expect(list).to.deep.equal({ "cho": {mango: 2 }});
    });
  });