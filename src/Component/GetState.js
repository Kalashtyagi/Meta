import React, { useEffect } from "react";

const StateList = () => {
  useEffect(() => {
    const url = "https://api.countrystatecity.in/v1/countries/IN/states";

    const fetchData = async () => {
      try {
        const headers = new Headers();
        headers.append("X-CSCAPI-KEY", "API_KEY");

        const requestOptions = {
          method: "GET",
          headers: headers,
          redirect: "follow",
        };

        const response = await fetch(url, requestOptions);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetching States</h2>
      {/* Render your fetched data here if needed */}
    </div>
  );
};

export default StateList;
