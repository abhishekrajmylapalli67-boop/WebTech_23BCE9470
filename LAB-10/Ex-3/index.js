const { useState, useEffect } = React;

const FetchApp = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(res => {
setData(res);
setLoading(false);
})
.catch(() => {
setError("Error loading data");
setLoading(false);
});
}, []);

if (loading) return <h3>Loading...</h3>;
if (error) return <h3>{error}</h3>;

return (
<div className="container">
{data.map(user => (
<p key={user.id}>{user.name}</p>
))}
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")).render(<FetchApp />);