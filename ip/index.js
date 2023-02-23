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


// {
// 	"sorgu":"46.196.81.16",
// 	"durum":"OK",
// 	"kıta":"Asia",
// 	"ülke":"Turkey",
// 	"ülkeKodu":"TR",
// 	"ülkebayrağı":"https:\/\/apis.ergineer.com\/ulkebayraklari\/TR",
// 	"bölge":"34",
// 	"bölgeAdı":"Istanbul",
// 	"şehir":"Istanbul",
// 	"zip":"34096",
// 	"enlem":41.014499999999998181010596454143524169921875,
// 	"boylam":28.9532999999999987039700499735772609710693359375,
// 	"saatdilimi":"Europe\/Istanbul",
// 	"parabirimi":"TRY",
// 	"isp":"Turksat Internet Services",
// 	"organizasyon":"",
// 	"as":"AS47524 Turksat Uydu Haberlesme ve Kablo TV Isletme A.S."
//   }
// <div class="card">
// <img src={ülke bayrağı url} />
// <div class="card-info">
// 	<h3 class="ip">{ip adresi}</h3>
// 	<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
// 	<p>Enlem: {enlem} Boylam: {boylam}</p>
// 	<p>Şehir: {şehir}</p>
// 	<p>Saat dilimi: {saat dilimi}</p>
// 	<p>Para birimi: {para birimi}</p>
// 	<p>ISP: {isp}</p>

const cardYapici = (ip, bayrakUrl, ulke, ulkeKodu, enlem, boylam, sehir, saat, para, isp) => {
	const card = document.createElement("div");
	card.classList.add("card");

	const bayrak = document.createElement("img");
	bayrak.setAttribute("src", bayrakUrl)
	card.append(bayrak);

	const cardInfo = document.createElement("div");
	cardInfo.classList.add("card-info");
	card.append(cardInfo);

	const baslik = document.createElement("h3");
	baslik.classList.add("ip");
	baslik.textContent = ip;
	cardInfo.append(baslik);

	const ulkeBilgisi = document.createElement("p");
	ulkeBilgisi.classList.add("ulke");
	ulkeBilgisi.textContent = `${ulke} (${ulkeKodu})`;
	cardInfo.append(ulkeBilgisi);

	const enBoy = document.createElement("p");
	enBoy.textContent=`Enlem: ${enlem} Boylam: ${boylam}`;
	cardInfo.append(enBoy);

	const sehirBilgi = document.createElement("p");
	sehirBilgi.textContent=`Şehir: ${sehir}`;
	cardInfo.append(sehirBilgi);


	const saatDilimi = document.createElement("p");
	saatDilimi.textContent=`Saat dilimi: ${saat}`;
	cardInfo.append(saatDilimi);

	const paraBirimi = document.createElement("p");
	paraBirimi.textContent=`Para birimi: ${para}`;
	cardInfo.append(paraBirimi);

	const ispBilgi = document.createElement("p");
	ispBilgi.textContent=`ISP: ${isp}`;
	cardInfo.append(ispBilgi);

	return card;
}

const cardListele = () => {
	const cardContainer = document.querySelector(".cards");
	axios
		.get("https://apis.ergineer.com/ipgeoapi/46.196.81.16")
		.then((data) => {
			const cardBilgi = cardYapici(
				data["sorgu"],
				data["ülkebayrağı"],
				data["ülke"],
				data["ülkeKodu"],
				data["enlem"],
				data["boylam"],
				data["şehir"],
				data["saatdilimi"],
				data["parabirimi"],
				data["isp"]);

			cardContainer.append(cardBilgi);
		})
		.catch(err=>{
			console.log("error",err);
		})
}
cardListele();



