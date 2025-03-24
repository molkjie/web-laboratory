//data
// const dataSite = {
//   proSoft: ["Antivirus", "VPN", "Firewall"],
//   whyUs:["High quality", "Reliable", "Fast"]
// };

//current date
// function updateCurrentDate() {
//     const dateElement = document.querySelector('.date');
//     if (!dateElement) return;

//     const now = new Date();
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
//     const formattedDate = now.toLocaleDateString('en-US', options);

//     dateElement.innerHTML = formattedDate.replace(',', '');
// }

// document.addEventListener('DOMContentLoaded', updateCurrentDate);

// setInterval(updateCurrentDate, 60000);

//delete news

// const newsSection = document.querySelector('.col1');
// const toggleButton = document.querySelector('.toggleNewsBtn');

// let newsVisible = true;
// const newsContent = [...newsSection.children].filter(el => !el.classList.contains('toggleNewsBtn'));

// toggleButton.addEventListener('click', () => {
//     if (newsVisible) {
//         newsContent.forEach(el => el.style.display = 'none');
//         toggleButton.textContent = 'Show';
//     } else {
//         newsContent.forEach(el => el.style.display = '');
//         toggleButton.textContent = 'Delete';
//     }
//     newsVisible = !newsVisible;
// });

// toggleButton.textContent = 'Delete';

//soft list

// function renderSoftList() {

//   const softList = document.querySelector(".prof-soft-list");

//  softList.innerHTML = "";

//   const sortedSoft = dataSite.proSoft.sort();

//   sortedSoft.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.className = "prof-soft-item";
//     li.textContent = `${index + 1}. ${item}`;
//     softList.appendChild(li);
//   });
// }

// renderSoftList();

//change image
// const firstImage = document.querySelector("#myRoundabout li:first-child img");
// if (firstImage) {
//     firstImage.src = "images/bg-soft.png";
// }

//change image
// const firstImage = document.querySelector("#myRoundabout li:first-child img");
// if (firstImage) {
//     firstImage.src = "images/bg-soft.png";
// }


//why-us list

// function renderWhyUsList() {

//   const whyUsList = document.querySelector(".list1");

//   whyUsList.innerHTML = "";

//   const sortedWhyUs = dataSite.whyUs.sort();

//   sortedWhyUs.forEach((item, index) => {
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     a.href = "#";
//     a.textContent = item;
//     li.appendChild(a);
//     whyUsList.appendChild(li);
//   });
// }

// renderWhyUsList();
