import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  _id: "1",
  boxholder: "",
  boxSize: "",
};

const MailboxForm = ({addMailbox}) => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    addMailbox(formData);
    navigator("/mailboxes");
  };
  const handleChange = ({ target }) => {
    console.log(target);
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      <main>
        <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="boxHolder">Enter a Boxholder:</label>
          <input
            type="textr"
            id="boxHolder"
            name="boxHolder"
            value={formData.boxholder.value}
            onChange={handleChange}
          />
          <label htmlFor="boxSize">Select a Box Size:</label>
          <select
            id="boxSize"
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default MailboxForm;