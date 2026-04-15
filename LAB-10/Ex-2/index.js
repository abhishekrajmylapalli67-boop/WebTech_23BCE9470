const { useState } = React;

const ListApp = () => {
const [items, setItems] = useState([]);
const [text, setText] = useState("");

const addItem = () => {
if (text) {
setItems([...items, { id: Date.now(), value: text }]);
setText("");
}
};

const removeItem = (id) => {
setItems(items.filter(item => item.id !== id));
};

return (
<div className="wrapper">
<div>
<input value={text} onChange={e => setText(e.target.value)} />
<button onClick={addItem}>Add</button>
</div>
<ul>
{items.length === 0 ? <p>No items</p> :
items.map(item => (
<li key={item.id}>
{item.value}
<button onClick={() => removeItem(item.id)}>X</button>
</li>
))}
</ul>
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")).render(<ListApp />);