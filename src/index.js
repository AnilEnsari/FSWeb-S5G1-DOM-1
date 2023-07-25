const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const nava = document.getElementsByTagName("a");
for (let i = 0; i < nava.length - 1; i++) {
  nava[i].setAttribute("class", "italic");
}
nava[0].textContent = siteContent.nav["nav-item-1"];
nava[1].textContent = siteContent.nav["nav-item-2"];
nava[2].textContent = siteContent.nav["nav-item-3"];
nava[3].textContent = siteContent.nav["nav-item-4"];
nava[4].textContent = siteContent.nav["nav-item-5"];
nava[5].textContent = siteContent.nav["nav-item-6"];
const navimg = document.getElementById("logo-img");
navimg.setAttribute("src", siteContent.images["logo-img"]);
const ctatext = document.querySelector(".cta-text>h1");
ctatext.textContent = siteContent.cta["h1"];
const buttontext = document.querySelector(".cta-text>button");
buttontext.textContent = siteContent.cta["button"];
const ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute("src", siteContent.images["cta-img"]);
const textContent1 = document.querySelectorAll(".text-content>h4");
textContent1[0].textContent = "Özellikler";
textContent1[1].textContent = "Hakkında";

textContent1[2].textContent = "Servisler";

textContent1[3].textContent = "Ürünler";
textContent1[4].textContent = "Vizyon";
const tcp = document.querySelectorAll(".text-content>p");
tcp[0].textContent =
  "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
tcp[1].textContent =
  "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
const middleimg = document.getElementsByClassName("middle-img")[0];
middleimg.setAttribute("src", siteContent.images["accent-img"]);
tcp[2].textContent =
  "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis";
tcp[3].textContent =
  "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis";
tcp[4].textContent =
  "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis";
const sch5 = document.querySelector(".contact>h4");
sch5.textContent = "İletişim";
const schp = document.querySelectorAll(".contact>p");
schp[0].textContent = "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
schp[1].textContent = "+90 (123) 456-7899";
schp[2].textContent = "satis@birsirketsitesi.com.tr";
const footeredit = document.querySelector("footer>a");
footeredit.textContent = "Copyright Bir Şirket Sitesi 2022";
footeredit.classList.add("bold");
