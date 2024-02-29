import React from "react";

export default function table() {
  return (
    <div>
      <table style={{}}>
        <tr>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Street</th>
          <th>Male</th>
          <th>Female</th>
          <th>Others</th>
        </tr>

        <tr>
          <td rowspan="8">1</td>
          <td rowspan="4">kerala</td>
          <td rowspan="2">Cochin</td>
          <td>New street</td>
          <td>500</td>
          <td>600</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Main Street</td>
          <td>300</td>
          <td>288</td>
          <td>2</td>
        </tr>
        <tr>
          <td rowspan="2">Trivandrum</td>
          <td>Guru Street</td>
          <td>300</td>
          <td>288</td>
          <td>2</td>
        </tr>
        <tr>
          <td>TVK Street</td>
          <td>300</td>
          <td>288</td>
          <td>2</td>
        </tr>

        <tr>
          <td rowspan="4">Maharashtra</td>
          <td rowspan="2">Mumbai</td>
          <td>Krishna Street</td>
          <td>288</td>
          <td>2</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Main Street</td>
          <td>288</td>
          <td>2</td>
          <td>1</td>
        </tr>

        <tr>
          <td rowspan="2">Surath</td>
          <td>New Street</td>
          <td>288</td>
          <td>2</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Billa Street</td>
          <td>288</td>
          <td>2</td>
          <td>1</td>
        </tr>

        <tr>
          <td rowspan="2">2</td>
          <td rowspan="2">Alaska</td>
          <td rowspan="2">AKA</td>
          <td>New Street</td>
          <td>200</td>
          <td>2</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Cross Street</td>
          <td>200</td>
          <td>2</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
}
