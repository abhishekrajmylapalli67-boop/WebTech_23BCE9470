const Card = (props) => {
return (
<div className="card">
<h3>{props.name}</h3>
<p>{props.department}</p>
<p>Marks: {props.marks}</p>
</div>
);
};

const App = () => {
return (
<div className="container">
<Card name="Anu" department="IT" marks="88" />
<Card name="Vikram" department="ECE" marks="91" />
<Card name="Sara" department="CSE" marks="95" />
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);