import Image from "../assets/student-image.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

function UpdateForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const location = useLocation();
  const navigate = useNavigate();


  async function submitForm(data) {

    const JSONdata = {
      "name": `${data.name}`,
      "phone": `${data.phone}`,
      "email": `${data.email}`,
      "department": `${data.department}`,
      "address": `${data.address}`
    }

    if (location.pathname.includes("/updateStudent")) {
      const id = location.pathname.split("/").at(-1);
      const url = `${process.env.REACT_APP_BASE_URL}/updateStudent/${id}`
      // Send a POST request to update the student data
      await axios.put(url, JSONdata)
        .then((response) => {
          console.log('Student data updated successfully:', response.data);
          toast.success("Student data updated successfully!");
        })
        .catch((error) => {
          console.error('Error updating student data:', error);
          toast.error("There was a problem with updating student data!");
        });
    }
    navigate("/");    
  };

  return (
    <div className="form">
      <figure>
        <img src={Image} alt="student" />
        <figcaption>
          Elevating Education with Organized Student Profiles!
        </figcaption>
      </figure>

      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Update Student Data</h1>
        <div className="form-feild name">
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Update Student Name.."
            {...register("name", { required: true })}
          />
          {errors.name && <p>Please enter student name.</p>}
        </div>

        <div className="form-feild phone">
          <label htmlFor="phone">Student Phone No:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Update Phone Number.."
            {...register("phone", { required: true })}
          />
          {errors.phone && <p>Please enter phone number.</p>}
        </div>

        <div className="form-feild email">
          <label htmlFor="email">Student Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Update Email.."
            {...register("email", { required: true })}
          />
          {errors.email && <p>Please enter email.</p>}
        </div>

        <div className="form-feild department">
          <label htmlFor="department">Student Department:</label>
          <input
            type="text"
            name="department"
            id="department"
            placeholder="Update Department.."
            {...register("department", { required: true })}
          />
          {errors.department && <p>Please enter department.</p>}
        </div>

        <div className="form-feild address">
          <label htmlFor="address">Student Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Update Address.."
            {...register("address", { required: true })}
          />
          {errors.address && <p>Please enter address.</p>}
        </div>

        <button className="create-usr" type="submit">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
