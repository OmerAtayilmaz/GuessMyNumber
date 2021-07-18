
/*  DOCUMENT OBJECT MODEL
// DOM !== JS, dom, JS ile uyumlu bir web APIsidir.

// document.querySelector('.message'); => objelere erişim sağlar

var h1Document= document.querySelector(".title");
console.log(h1Document);
//çıktı: <h1 class="bg-dark text-white title">DOM manipulation in JS</h1>

var objeContent = h1Document.textContent;
console.log(objeContent);
//çıktı:DOM manipulation in JS

//texti değiştirmek  ve win + . ile emoji yapımı :))
//h1Document = document.querySelector(".title") - yani uzun uzun yazmak yerine h1Documenti kullandık.
h1Document.textContent="Document Objects Model in JS 🎉😎";

//value ile değer alınıp set edilebilir - textContent gibi
document.querySelector(".text-bilgi").value="🔜Between 1 and 20🔚";
console.log(document.querySelector(".text-bilgi").value);
*/

//event ekleme ve evente göre işlem yapma

let score=20;
var number = Math.trunc(Math.random()*20);
let highscore =0 ;
document.querySelector(".check").addEventListener('click',function(){

  score--;
  document.querySelector(".score").textContent=score;
  const guessVal = Number(document.querySelector(".guess").value);
  if(!guessVal) document.querySelector(".message").textContent="😢 No number";
  //kontroller
  if(guessVal<number) document.querySelector(".message").textContent="too low";
  if(guessVal>number) document.querySelector(".message").textContent="too high";
  if(guessVal===number){
  document.querySelector(".message").textContent="CORRECT!";  
   
    document.querySelector('.message').style.backgroundColor='Black';
    if(score>highscore)
    {
      highscore=score;
      document.querySelector(".highscore").textContent=highscore;
    }
  }

});

//rand sayi


const AgainFunction =() =>
{
  number = Math.trunc(Math.random()*20);
  document.querySelector(".score").textContent=20;
  document.querySelector(".message").textContent="Start guessing";

  score=20;
}

document.querySelector(".again").addEventListener('click',AgainFunction);
