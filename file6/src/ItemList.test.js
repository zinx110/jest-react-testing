import React from "react";
import TestRenderer from "react-test-renderer";
import ItemList from "./ItemList";

describe("ItemList", () => {
    const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ];
    it("renders correctly", () => {
        const itemListComp = TestRenderer.create(<ItemList items={items} />);

        expect(itemListComp.toJSON()).toMatchSnapshot();
    });
    it("renders the correct number of items", () => {
        const itemListComp = TestRenderer.create(<ItemList items={items} />);
        const root = itemListComp.root;
        expect(root.findAllByType("li").length).toEqual(items.length);
    });
    xit("Test skip", () => {});
    it.todo("Test todo");

    it("Renders the correct item names", () => {
        const itemListComp = TestRenderer.create(<ItemList items={items} />);
        const root = itemListComp.root;
        const liNodes = root.findAllByType("li");
        liNodes.forEach((node, index) => {
            expect(node.children).toEqual([items[index].name]);
        });
    });
});
