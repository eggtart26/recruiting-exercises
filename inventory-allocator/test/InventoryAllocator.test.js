const expect = require('chai').expect
const InventoryAllocator = require("../src/InventoryAllocator.js");
const warehouses = require("../dummyData/dummyData");



describe("Testing Inventory Allocator class", () => {

    before(() => {
      const inventory = [];
      const order = {};
      inventoryAllocator = new InventoryAllocator(inventory, order);
    });

    it("Should exist class inventoryAllocator", () => {
      expect(inventoryAllocator).to.exist;
    });

    it("Should have methods checkInventoryExist", () => {
        expect(typeof inventoryAllocator.checkInventoryExist).to.equal("function");
      });
      
    it("Should have methods createShipment", () => {
        expect(typeof inventoryAllocator.createShipment).to.equal("function");
      });

    it("Should initialize properties", () => {
        expect(inventoryAllocator.warehouses).to.deep.equal([]);
        expect(inventoryAllocator.order).to.deep.equal({});
      });






      describe("Testing checkInventoryExist methods", () => {

        before(() => {
          const order = { name: 'owd', inventory: { apple: 1 } }
          inventoryAllocator = new InventoryAllocator(warehouses, order);
        });
      
        it("Should return true if item is in warehouse", () => {
          const warehouses = inventoryAllocator.warehouses[0].inventory;
          expect(inventoryAllocator.checkInventoryExist("apple", warehouses)).to.be.true;
        });
    
    
        it("Should return false if item is not in warehouse", () => {
           const warehouses = inventoryAllocator.warehouses[0].inventory;
           expect(inventoryAllocator.checkInventoryExist("orange", warehouses)).to.be.false;
        });
    })



    describe("Testing createShipment methods", () => {

        before(() => {
          const order = {};
          inventoryAllocator = new InventoryAllocator(warehouses, order);
        });

        it("Should handle an empty order", () => {
            expect(inventoryAllocator.createShipment()).to.be.empty;
          });
        
        it("Should return correct createShipment result, case#1 ship from single warehouses", () => {
            inventoryAllocator.order = { apple: 1 };
            const result = [{ owd: { apple: 1 } }]
            expect(inventoryAllocator.createShipment()).to.deep.equal(result);
          });
    
        it("Should return correct createShipment result, case#2 ship from multiple warehouses", () => {
            inventoryAllocator.order = { apple: 10 };
            const result = [ { owd: { apple: 5 } },{ dm: { apple: 5 } },]
            expect(inventoryAllocator.createShipment()).to.deep.equal(result);
          });

        it("Should return correct createShipment result, case#3 enought inventories in multiple warehouses, return []", () => {
            inventoryAllocator.order = { apple: 20 };
            const result = [ { "owd": { "apple": 5} },
            { "dm": { "apple": 5 } },
            { "sfo": { "apple": 5 } },
            { "bai": { "apple": 5} },
          ]
            expect(inventoryAllocator.createShipment()).to.deep.equal(result);
          });

        it("Should return correct createShipment result, case#4 not enought inventories in multiple warehouses, return []", () => {
            inventoryAllocator.order = { apple: 21 };
            const result = []
            expect(inventoryAllocator.createShipment()).to.deep.equal(result);
          });
    
        it("Should return correct createShipment result, case#5 not enought inventories in multiple warehouses, return []", () => {
            inventoryAllocator.order = { apple: 1, mango: 2, peach: 3, };
            const result = []
            expect(inventoryAllocator.createShipment()).to.deep.equal(result);
          });



    });




});