
import useLocalStorage from "use-local-storage";

const PersistentForm = () => {
  const [formData, setFormData] = useLocalStorage("formData", { name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3>Persistent Form</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <p>Saved Data:</p>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default PersistentForm;
