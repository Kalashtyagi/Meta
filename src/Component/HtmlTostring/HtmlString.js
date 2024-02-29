import React, { useState } from "react";
import axios from "axios";

const HtmlString = () => {
  const [htmlContent, setHtmlContent] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setHtmlContent(content);
    };

    reader.readAsText(file);
  };
  console.log(htmlContent, "html");

  const uploadToBackend = () => {
    axios
      .post("/api/upload", { htmlContent })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {/* <button onClick={uploadToBackend}>Upload</button> */}
    </div>
  );
};

export default HtmlString;
