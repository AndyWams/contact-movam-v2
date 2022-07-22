import { useState } from "react";
import "./Form.scss";
import { RiUser4Line } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  let navigate = useNavigate();

  const routeHandler = (event) => {
    navigate("/home", { state: { data: formValues } });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Data submitted!", { autoClose: 1000 });
    routeHandler();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form-wrap">
          <div className="input pref">
            <label>Your name</label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={formValues?.name}
              required
              onChange={handleChange}
            />
            <span className="prefix">
              <RiUser4Line />
            </span>
          </div>
          <div className="input pref">
            <label>Mail</label>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              required
              value={formValues?.email}
              onChange={handleChange}
            />
            <span className="prefix">
              <IoMdMail />
            </span>
          </div>
          <div className="input">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Message"
              value={formValues?.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <Button type="submit" variant="contained" state={formValues}>
              Send Message
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
