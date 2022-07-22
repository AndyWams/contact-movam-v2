import { useEffect } from "react";
import "./Home.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location?.state?.data;
  useEffect(() => {
    if (data == null) {
      navigate("/");
      return;
    }
  });

  return (
    <section className="_landing">
      <div className="container">
        <div className="panel align-items-center d-flex flex-column">
          <h3>Thank you for your feedback!</h3>
          <p>Your details have been submitted succesfully</p>
          <span className="f12">Name: {data?.name} </span>
          <span className="f12">Email: {data?.email}</span>
          <span className="f12">Message: {data?.message}</span>
          <div className="mt-4">
            <Button variant="outlined" component={Link} to="/">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
