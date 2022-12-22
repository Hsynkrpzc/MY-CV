// window.addEventListener("load", function () {
//   const dataFromLocalStorage = JSON.parse(localStorage.getItem("isLogin")); //string veriyi js ye çevirmek için JSON.parse
//   console.log(dataFromLocalStorage);
//   if (dataFromLocalStorage === null) {
//     localStorage.setItem("isLogin", JSON.stringify(false));
//   }
//   if (dataFromLocalStorage === null || dataFromLocalStorage === false) {
//     window.location.replace("http://127.0.0.1:5500/login.html");
//   }
// });
const pdfBtn = document.getElementById("pdfBtn");
const langSelect = document.getElementById("language");
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {
  localStorage.setItem("isLogin", JSON.stringify(false));
  window.location.reload();
  
});

const dictionary = [
  {
    id: "personalDescription",
    tr: "Junior React Frontend-Developer olarak , kendimi geliştirmeye devam ediyorum ve çalışmalar yapıyorum, Ekip çalışmalarına uygun , pozitifbiriyim.",
    en: "I am constantly striving to improve.I am a positive person who works well in groups.",
  },
  {
    id: "personalDescription2",
    tr: "Çalışmalarımda araştırmaya ve öğrenmeye açığım",
    en: "In my studies, I am open to research and learning.",
  },
  {
    id: "personalDescription3",
    tr: "Çalışmalarıma https://github.com/Hsynkrpzc adresinden ulaşabilirsiniz.",
    en: "My work can be found at https://github.com/Hsynkrpzc.",
  },
  {
    id: "educationTitle",
    tr: "EĞİTİM",
    en: "EDUCATION",
  },
  {
    id: "experienceTitle",
    tr: "DENEYİM",
    en: "EXPERIENCE",
  },
  {
    id: "skillsTitle",
    tr: "YETENEKLER",
    en: "SKILLS",
  },
  {
    id: "languageTitle",
    tr: "DİLLER",
    en: "LANGUAGES",
  },
];

pdfBtn.addEventListener("click", function () {
  const myCv = document.getElementById("myCv");
  const nameSurname = document.getElementById("nameSurname");
  var opt = {
    margin: 1,
    filename: nameSurname.innerText + ".pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(myCv).save();
});

langSelect.addEventListener("change", function (event) {
  // console.log(event.target.value)
  translate(event.target.value);
});

function translate(selectedLanguage) {
  dictionary.map((item) => {
    const element = document.getElementById(item.id);
    switch (selectedLanguage) {
      case "tr":
        element.innerText = item.tr;
        break;
      case "en":
        element.innerText = item.en;
        break;
      case "de":
        element.innerText = item.de;
        break;

      default:
        break;
    }
  });
  // for (let i = 0; i < dictionary.length; i++) {
  //   const element = document.getElementById(dictionary[i].id);
  //   switch (selectedLanguage) {
  //     case "tr":
  //       element.innerText = dictionary[i].tr;
  //       break;
  //     case "en":
  //       element.innerText = dictionary[i].en;
  //       break;
  //     case "de":
  //       element.innerText = dictionary[i].de;
  //       break;

  //     default:
  //       break;
  //   }
  // }
}
