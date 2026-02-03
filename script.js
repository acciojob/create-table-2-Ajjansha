function createTable() {
    //Write your code here
  const table = document.getElementById("myTable");

  // Clear existing table
  table.innerHTML = "";

  // Prompt user for rows and columns
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  const rows = Number(rn);
  const cols = Number(cn);

  // Handle non-numeric input
  if (isNaN(rows) || isNaN(cols)) {
    return;
  }

  // Handle zero or negative input
  if (rows <= 0 || cols <= 0) {
    alert("Please enter positive numbers greater than zero");
    return;
  }

  // Create table rows and columns
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
