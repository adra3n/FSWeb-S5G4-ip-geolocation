//axios import buraya gelecek
import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
		.then(function (response) {
			return response.data
		})
		.then(function (a) {
			benimIP = a
		});
}
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
	(tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
	https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
	DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
	</div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek


const cardYapici = (data) => {
	const card = document.createElement("div");
	card.classList.add("card");
  
	const bayrak = document.createElement("img");
	bayrak.setAttribute("src", data?.["ülkebayrağı"]);
	card.append(bayrak);
  
	const cardInfo = document.createElement("div");
	cardInfo.classList.add("card-info");
	card.append(cardInfo);
  
	const baslik = document.createElement("h3");
	baslik.classList.add("ip");
	baslik.textContent = `IP: ${data?.sorgu}`;
	cardInfo.append(baslik);
  
	const ulkeBilgisi = document.createElement("p");
	ulkeBilgisi.classList.add("ulke");
	ulkeBilgisi.textContent = `${data?.["ülke"]} (${data?.["ülkeKodu"]})`;
	cardInfo.append(ulkeBilgisi);
  
	const enBoy = document.createElement("p");
	enBoy.textContent = `Enlem: ${data?.enlem} Boylam: ${data?.boylam}`;
	cardInfo.append(enBoy);
  
	const sehirBilgi = document.createElement("p");
	sehirBilgi.textContent = `Şehir: ${data?.["şehir"]}`;
	cardInfo.append(sehirBilgi);
  
	const saatDilimi = document.createElement("p");
	saatDilimi.textContent = `Saat dilimi: ${data?.saatdilimi}`;
	cardInfo.append(saatDilimi);
  
	const paraBirimi = document.createElement("p");
	paraBirimi.textContent = `Para birimi: ${data?.parabirimi}`;
	cardInfo.append(paraBirimi);
  
	const ispBilgi = document.createElement("p");
	ispBilgi.textContent = `ISP: ${data?.isp}`;
	cardInfo.append(ispBilgi);
  
	return card;
  };

const cardListele = () => {
	const cardContainer = document.querySelector(".cards");
	axios 
	.get("https://apis.ergineer.com/ipadresim")
	.then ((res)=>{
		 const ipAdresi = res.data ;
		 console.log(ipAdresi);
		axios
			.get(`https://apis.ergineer.com/ipgeoapi/${ipAdresi}`)
			.then((res) => {
				console.log(res);
				const cardBilgi = cardYapici(res.data);
				cardContainer.append(cardBilgi);
			})
	})
	.catch(err=>{
		console.log("error",err);
	});
	}
cardListele();


// ipAdresimiAl();

//  !!!!  yukarıdaki fonksiyonu iceride calıştıramadım. içiçe 2 axios .get olarak kendim yazdım.    !!!!
// console.log(benimIP);

// const cardListele = () => {
// 	const cardContainer = document.querySelector(".cards");

	// let myIp = "https://apis.ergineer.com/ipgeoapi/" + benimIP; 

	// axios
			// .get(myIp)
			// .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`) 

			// calısmadı

// ESKİ ÇÖZÜM (birden fazla parametre alarak)


// const cardYapici = (ip, bayrakUrl, ulke, ulkeKodu, enlem, boylam, sehir, saat, para, isp) => {
// 	const card = document.createElement("div");
// 	card.classList.add("card");

// 	const bayrak = document.createElement("img");
// 	bayrak.setAttribute("src", bayrakUrl)
// 	card.append(bayrak);

// 	const cardInfo = document.createElement("div");
// 	cardInfo.classList.add("card-info");
// 	card.append(cardInfo);

// 	const baslik = document.createElement("h3");
// 	baslik.classList.add("ip");
// 	baslik.textContent = ip;
// 	cardInfo.append(baslik);

// 	const ulkeBilgisi = document.createElement("p");
// 	ulkeBilgisi.classList.add("ulke");
// 	ulkeBilgisi.textContent = `${ulke} (${ulkeKodu})`;
// 	cardInfo.append(ulkeBilgisi);

// 	const enBoy = document.createElement("p");
// 	enBoy.textContent=`Enlem: ${enlem} Boylam: ${boylam}`;
// 	cardInfo.append(enBoy);

// 	const sehirBilgi = document.createElement("p");
// 	sehirBilgi.textContent=`Şehir: ${sehir}`;
// 	cardInfo.append(sehirBilgi);


// 	const saatDilimi = document.createElement("p");
// 	saatDilimi.textContent=`Saat dilimi: ${saat}`;
// 	cardInfo.append(saatDilimi);

// 	const paraBirimi = document.createElement("p");
// 	paraBirimi.textContent=`Para birimi: ${para}`;
// 	cardInfo.append(paraBirimi);

// 	const ispBilgi = document.createElement("p");
// 	ispBilgi.textContent=`ISP: ${isp}`;
// 	cardInfo.append(ispBilgi);

// 	return card;
// }


// 	axios 
// 	.get("https://apis.ergineer.com/ipadresim")
// 	.then ((res)=>{
// 		 const ipAdresi = res.data ;
// 		 console.log(ipAdresi);
// 		axios
// 			.get(`https://apis.ergineer.com/ipgeoapi/${ipAdresi}`)
// 			.then((res) => {
// 				console.log(res);
// 				const cardBilgi = cardYapici(
// 					res.data["sorgu"],
// 					res.data["ülkebayrağı"],
// 					res.data["ülke"],
// 					res.data["ülkeKodu"],
// 					res.data["enlem"],
// 					res.data["boylam"],
// 					res.data["şehir"],
// 					res.data["saatdilimi"],
// 					res.data["parabirimi"],
// 					res.data["isp"]);
// 				cardContainer.append(cardBilgi);
// 			})
// 			.catch(err=>{
// 				console.log("error",err);
// 			})
// 		})
// }
// cardListele();






// const cardContainer = document.querySelector(".cards");

// let myIp = null;
// async function getMyIp() {
//   await axios
//     .get("https://apis.ergineer.com/ipadresim")
//     .then(function (response) {
//       // handle success
//       myIp = response.data;
//       return myIp;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .finally(function () {
//       // always executed
//       console.log("myIp", myIp);
//     });
// }

// async function getApiDetails() {
//   await getMyIp();

//   axios
//     .get(`https://apis.ergineer.com/ipgeoapi/${myIp}`)
//     .then(function (response) {
//       cardContainer.append(cardYapici(response.data));
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// }

// getApiDetails();
