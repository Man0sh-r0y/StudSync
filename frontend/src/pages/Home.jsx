import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";


function Home() {

  const [StudentData, setStudentData] = useState({
    message: "",
    data: []
  });

  async function getAllData() {

    await axios.get(`${process.env.REACT_APP_BASE_URL}/getAllStudents`)
      .then((response) => {
        console.log("GET request was successful:", response.data);
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error("There was a problem with the GET request:", error.message);
        toast.error("There was a problem with fetching student data!");
      });

  };

  useEffect(() => {
    getAllData();
  }, []);

  async function handleDelete(id) {

    setStudentData({
      ...StudentData,
      data: StudentData.data.filter((student) => student._id !== id),
    });

    const url = `${process.env.REACT_APP_BASE_URL}/deleteStudent/${id}`;
    await axios.delete(url)
      .then((response) => {
        console.log('DELETE request was successful:', response.data);
        toast.success("Student data deleted successfully!");
      })
      .catch((error) => {
        console.error('There was a problem with the DELETE request:', error.message);
        toast.error("There was a problem with deleting student data!");
      });
  }


  return (
    <div className="home">
      <Navbar />

      {/* <h1>All Students Data</h1> */}

      <div className="student-table">
        <table>
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Student Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Department</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {StudentData?.data.map((student, index) => (
              <tr key={student._id}>
                <td className="sl-no">{index+1}</td>
                <td>
                  <div className="student-name-img">
                    <img src={student.image} alt="student" />
                    {student.name}
                  </div>
                </td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.address}</td>
                <td>
                  <div className="action-btn">
                    <Link to={`/updateStudent/${student._id}`}>
                      <button>
                        <FiEdit />
                      </button>
                    </Link>
                    <button onClick={() => handleDelete(student._id)}>
                      <AiFillDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
