const { useState } = React;

const FormApp = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const validate = () => {
if (!name || !email || !password) return "All fields required";
if (!email.includes("@")) return "Invalid email";
return "";
};

const handleSubmit = (e) => {
e.preventDefault();
let err = validate();
if (err) {
setError(err);
} else {
setError("");
setName("");
setEmail("");
setPassword("");
alert("Submitted");
}
};

return (
<form className="formBox" onSubmit={handleSubmit}>
<input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
<input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
<input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
{error && <span>{error}</span>}
<button type="submit">Submit</button>
</form>
);
};

ReactDOM.createRoot(document.getElementById("root")).render(<FormApp />);