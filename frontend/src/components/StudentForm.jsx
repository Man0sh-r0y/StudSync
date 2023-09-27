import { useForm } from "react-hook-form";
import Image from "../assets/student-image.jpg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios';

function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  async function submitForm(data) {

    const url = `${process.env.REACT_APP_BASE_URL}/createStudent`;

    const JSONdata = {
      "name": `${data.name}`,
      "phone": `${data.phone}`,
      "email": `${data.email}`,
      "department": `${data.department}`,
      "address": `${data.address}`
    }

    // Send the POST request using Axios
    await axios.post(url, JSONdata)
      .then((response) => {
        console.log("POST request was successful:", response.data);
        toast.success("Student data added successfully!");
      })
      .catch((error) => {
        console.error("There was a problem with the POST request:", error);
        toast.error("There was a problem with adding student data!");
      });

    navigate("/");
  }

  return (
    <div className="form">
      <figure>
        <img src={Image} alt="student" />
        <figcaption>
          Elevating Education with Organized Student Profiles!
        </figcaption>
      </figure>

      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Create a Student</h1>
        <div className="form-feild name">
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name here.."
            {...register("name", { required: true })}
          />
          {errors.name && <p>Please enter student name.</p>}
        </div>

        <div className="form-feild phone">
          <label htmlFor="phone">Student Phone No:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter phone number here.."
            {...register("phone", { required: true })}
          />
          {errors.phone && <p>Please enter phone number.</p>}
        </div>

        <div className="form-feild email">
          <label htmlFor="email">Student Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email here.."
            {...register("email", { required: true })}
          />
          {errors.email && <p>Please enter email.</p>}
        </div>

        <div className="form-feild department">
          <label htmlFor="department">Student Department:</label>
          <input
            type="text"
            id="department"
            placeholder="Enter department here.."
            {...register("department", { required: true })}
          />
          {errors.department && <p>Please enter department.</p>}
        </div>

        <div className="form-feild address">
          <label htmlFor="address">Student Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address here.."
            {...register("address", { required: true })}
          />
          {errors.address && <p>Please enter address.</p>}
        </div>

        <button className="create-usr" type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default UserForm;
