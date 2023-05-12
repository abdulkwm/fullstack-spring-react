import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';
import StudentService from '../services/StudentService';

const AddStudentComponent = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [emailId, setemailId] = useState('');
    const [image_src, setimage_src] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();
        const student = { firstName, lastName, emailId, image_src}

        if(id){
            StudentService.updateStudent(id, student).then((response)=> {
                navigate('/students')
            }).catch(error => {
                console.log(error);
            })
        }else{
            StudentService.createStudent(student).then((response) => {
                navigate('/students')
                console.log(response.data)
            }).catch(error => {
                console.log(error);
            })
        }
    }
    useEffect(() => {
      StudentService.getStudentById(id).then((response)=> {
          setfirstName(response.data.firstName);
          setlastName(response.data.lastName);
          setemailId(response.data.emailId);
          setimage_src(response.data.image_src);
      }).catch(error => {
          console.log(error);
      })
    }, [id]);

const title = ()=> {
        if(id){
            return <h2 className='text-center'>Update Student</h2>
        }else{
            return <h2 className='text-center'>Add Student</h2>
        }
    }
  return (
    <div><br></br>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                    title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name :</label>
                                <input 
                                type="text"
                                placeholder="Enter First Name"
                                name="firstName"
                                className="form-control"
                                value={firstName}
                                onChange = {(e)=>setfirstName(e.target.value)}
                                >
                                </input>
                            </div>
                              <div className='form-group mb-2'>
                                  <label className='form-label'>Last Name :</label>
                                  <input
                                      type="text"
                                      placeholder="Enter Last Name"
                                      name="lastName"
                                      className="form-control"
                                      value={lastName}
                                      onChange={(e) => setlastName(e.target.value)}
                                  >
                                  </input>
                              </div>
                              <div className='form-group mb-2'>
                                  <label className='form-label'>Email Id :</label>
                                  <input
                                      type="text"
                                      placeholder="Enter Email Id"
                                      name="emailId"
                                      className="form-control"
                                      value={emailId}
                                      onChange={(e) => setemailId(e.target.value)}
                                  >
                                  </input>
                              </div>
                              <div className='form-group mb-2'>
                                  <label className='form-label'>Image :</label>
                                  <input
                                      type="text"
                                      placeholder="Enter Image Src"
                                      name="image_src"
                                      className="form-control"
                                      value={image_src}
                                      onChange={(e) => setimage_src(e.target.value)}
                                  >
                                  </input>
                              </div>
                              <button className='btn btn-success' onClick={(e) => saveOrUpdateStudent(e)}>Submit</button>
                              <Link to="/students" className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudentComponent