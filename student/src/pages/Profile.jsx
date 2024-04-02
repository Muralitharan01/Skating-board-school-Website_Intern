import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {

    sessionStorage.clear();
    // Show SweetAlert success message
    Swal.fire({
      title: 'Logout Successful!',
      text: 'Thank You!',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    navigate("/login");

  }

  const handleEditClick = () => {
    setIsEditPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsEditPopupOpen(false);
  };

  const handleUpdateDetails = (updatedDetails) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedDetails }));
    handleClosePopup();
  };

  return (
    <div>
      {user ? (
        <div className="container">
          <h2 className=" mt-5">Profile</h2>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>
                  Name:<b> {user.name}</b>
                </p>
                <p>
                  Email:<b> {user.email}</b>
                </p>
                <p>
                  Address:<b> {user.address}</b>
                </p>
                <p>
                  City:<b> {user.city}</b>
                </p>
                <p>
                  Mobile Number:<b> {user.mobileNumber}</b>
                </p>

                <button className="btn btn-primary" onClick={handleEditClick}>
                  Edit Details
                </button>
                <div>
                  <button className="btn btn-danger mt-2" onClick={handleLogout}>Logout</button>

                </div>
              </div>
            </div>
            <div className="col-6">
              {isEditPopupOpen && (
                <div className="popup">
                  <div className="popup-content">
                    <h2>Edit Details</h2>
                    {/* Add your edit form or component here */}
                    <form onSubmit={(e) => e.preventDefault()}>
                      <p>
                        {" "}
                        <label htmlFor="class">city:</label>
                        <input
                          type="text"
                          id="class"
                          value={user.class}
                          onChange={(e) =>
                            setUser({ ...user, class: e.target.value })
                          }
                        />
                      </p>

                      <p>
                        <label htmlFor="class">address:</label>
                        <input
                          type="text"
                          id="class"
                          value={user.address}
                          onChange={(e) =>
                            setUser({ ...user, address: e.target.value })
                          }
                        />
                      </p>



                      <p>
                        <label htmlFor="class">mobileNumber:</label>

                        <input
                          type="text"
                          id="class"
                          value={user.mobileNumber}
                          onChange={(e) =>
                            setUser({ ...user, mobileNumber: e.target.value })
                          }
                        />
                      </p>

                      <button
                        className="btn btn-success"
                        onClick={() => handleUpdateDetails(user)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={handleClosePopup}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
};

export default Profile;
