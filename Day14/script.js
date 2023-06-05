const formData = {
  firstName: "",
  lastName: "",
  gender: "",
  address: "",
  pincode: "",
  foodType: [],
  state: "",
  country: "",
};

reloadTable(JSON.parse(localStorage.getItem("data")));

function saveDataInStorage(value = {}) {
  try {
    const data = JSON.parse(localStorage.getItem("data"))
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    data.push(value);
    localStorage.setItem("data", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
  window.location.reload();
}

function handleInput(element) {
  console.log(element.id, element.name, element.value, element.type);
  if (element.type === "radio") {
    formData[element.name] = element.id;
  } else if (element.type === "checkbox") {
    if (formData[element.name].includes(element.id)) {
      formData[element.name] = formData[element.name].filter(
        (d) => d !== element.id
      );
    } else {
      formData[element.name].push(element.id);
    }
  } else {
    formData[element.id] = element.value;
  }
}

function handleSave() {
  if (formData.foodType.length >= 2) {
    saveDataInStorage(formData);
    reloadTable(JSON.parse(localStorage.getItem("data")));
  } else {
    throw new Error("Food Type should be atleast 2");
  }
}

function reloadTable(data = []) {
  const tableBody = document.querySelector("tbody");
  tableBody.append(...renderRows(data));
}

function renderRows(data = []) {
  const rows = [];
  if (data.length > 0) {
    data.forEach((e) => {
      const rowElement = document.createElement("tr");
      rowElement.append(...renderColumns(e));
      rows.push(rowElement);
    });
  }
  return rows;
}

function renderColumns(data = {}) {
  const tds = [];
  if (Object.values(data).length > 0) {
    Object.values(data).forEach((d) => {
      const td = document.createElement("td");
      td.innerText = d;
      tds.push(td);
    });
  }
  return tds;
}
