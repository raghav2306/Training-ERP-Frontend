import { useEffect, useState, useContext } from "react";
import UsePrivateApi from "../../hooks/UsePrivateApi";
import { ClipLoader } from "react-spinners";
import UseAlert from "../../hooks/UseAlert";
import TeamCtx from "../../contexts/TeamContext";

const RoleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });

  const { data, loading, error, get } = UsePrivateApi();
  const teamCtx = useContext(TeamCtx);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      teamCtx.addRoleHandler(data?.data);
    }
    if (loading) {
      setIsLoading(true);
    }
    if (error) {
      setIsLoading(false);
      setShowAlert({
        type: "error",
        msg: error,
        show: true,
      });
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (teamCtx.roles.length === 0) get("/api/role/get-roles");
  }, []);

  return (
    <>
      <table>
        <thead>
          <th>Name</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {teamCtx.roles.length > 0 &&
            teamCtx.roles.map((role) => (
              <tr>
                <td>{role.name}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isLoading && (
        <div className="flex justify-center">
          <ClipLoader size={40} color="#333" />
        </div>
      )}
      {showAlert.show && (
        <UseAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </>
  );
};

export default RoleList;
