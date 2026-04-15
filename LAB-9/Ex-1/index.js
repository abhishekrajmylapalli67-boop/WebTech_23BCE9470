const Profile = () => {
const name = "Rahul";
const department = "CSE";
const year = "3rd";
const section = "A";

return (
<div className="profile">
<h2>{name}</h2>
<p>{department}</p>
<p>{year} Year</p>
<p>Section {section}</p>
</div>
);
};

ReactDOM.createRoot(document.getElementById("root")).render(<Profile />);