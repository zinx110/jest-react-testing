type itemType = {
    name: string;
    id: string;
};
type itemsType = Array<itemType>;

interface ItemListProps {
    items: itemsType;
}

const ItemList = ({ items }: ItemListProps) => {
    return (
        <ul>
            {items.map((item: itemType) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default ItemList;
