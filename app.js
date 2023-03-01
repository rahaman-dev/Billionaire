let loadAPI = () => {
  fetch("https://forbes400.onrender.com/api/forbes400?limit=10")
    .then((res) => res.json())
    .then((data) => getData(data));
};

let getData = (data) => {
  let getCardSection = document.getElementById("container");
  data.forEach((element) => {
    let crtdiv = document.createElement("div");
    crtdiv.innerHTML = `
      <div class="card">
        <div class="img">
          <img src="${element.squareImage}" alt="" />
        </div>
        <div class="card-body">
        <h1>Position:${element.position}</h1>
            <h3>Name: <span>${element.personName}</span></h3>
            <h3>Id: <span>${element.uri}</span></h3>
            <h3>Citizenship: <span>${element.countryOfCitizenship}</span></h3>
            <h3>State: <span>${
              element.state ? element.state : "no state here"
            }</span></h3>
            <h3>City: <span>${element.city}</span></h3><h3>Source: <span>${
      element.source
    }</span></h3>
    <button onclick="getInformationOnModal()" id="seeMoreBtn" class="btn">See More</button>
        </div>
      </div>
    `;
    getCardSection.appendChild(crtdiv);
  });
};

let loadModal = () => {
  fetch("https://forbes400.onrender.com/api/forbes400?limit=3")
    .then((res) => res.json())
    .then((date) => getInformationOnModal(date));
};
let getInformationOnModal = (date) => {
  let getModalContainer = document.getElementById("modal-container");
  date.forEach((elm) => {
    let getSeeMoreBtn = document.getElementById("seeMoreBtn");
    getSeeMoreBtn.addEventListener("click", function () {
      getModalContainer.style.display = "block";
      let crtDivForModal = document.createElement("div");
      crtDivForModal.innerHTML = `
      <div id="modal" class="modal">
      <i onclick="closeIcon()" id="closeBtn" class="fa fa-window-close" aria-hidden="true"></i>
        <h1 class="center">${elm.personName}</h1>
        <div class="description">
          <h3 class="center bio">Biography</h3>
          <p class="center">${elm.bios}</p>
        </div>
        <div class="second">
          <div class="img">
          <img src="${elm.squareImage}" alt="" />
          </div>
          <div class="general-information">
            <h2>General Information</h2>
            <h3>Name: <span>${elm.personName}</span></h3>
            <h3>Total Exchange: <span>${elm.financialAssets[0].birthDate}</span></h3>
            <h3>Citizenship: <span>${elm.countryOfCitizenship}</span></h3>
            <h3>City: <span>${elm.city}</span></h3>
            <h3>Source: <span>${elm.source}</span></h3>             
          </div>
          <div class="Financial-Information">
            <h2>Financial Information</h2>
            <h3>Total Exchange: <span>${elm.financialAssets[0].exchange}</span></h3>
            <h3>Total Ticker: <span>${elm.financialAssets[0].ticker}</span></h3>
            <h3>Total Shares: <span>${elm.financialAssets[0].numberOfShares}</span></h3>
            <h3>Share Price: <span>${elm.financialAssets[0].sharePrice}</span></h3>
          </div>
        </div>
      </div>;
    `;
      getModalContainer.appendChild(crtDivForModal);
    });
  });
};
loadModal();
loadAPI();
// close icon

let closeIcon = () => {
  document.getElementById("closeBtn").addEventListener("click", function () {
    let getModalContainer = document.getElementById("modal-container");
    getModalContainer.style.display = "none";
  });
};
