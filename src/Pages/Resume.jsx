import React from "react";

const Resume = () => {
  return (
    <div style={{ height: "100vh" }} className="container   ">
      <div style={{ paddingTop: "250px" }} className="section">
        <h1 style={{ color: "aqua" }} className="text-center pt-5">
          View and download my resume
        </h1>
        <a
          style={{ marginLeft: "590px" }}
          className="text-center btn btn-primary mt-5"
          href="SreejithResume.pdf"
        >
          Click Here
        </a>
      </div>
    </div>
  );
};

export default Resume;
