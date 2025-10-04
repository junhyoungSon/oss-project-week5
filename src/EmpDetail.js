import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();
  const [empdata, setEmpdata] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div id="detailbox" className="card" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>학생 세부사항</h2>
          </div>
          <div className="card-body"></div>
          {empdata && (
            <div>
              <h5>
                학생 이름 : <b>{empdata.name}</b>
              </h5>
              <h5>호수 : {empdata.id}호</h5>
              <h5>전공 : {empdata.major}</h5>

              <h5>
                Email : <b>{empdata.email}</b>
              </h5>
              <h5>
                전화번호 : <b>{empdata.phone}</b>
              </h5>
              <h5>성별 : {empdata.gender}</h5>

              <Link className="btn btn-danger" to="/">
                목록으로 돌아가기
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
