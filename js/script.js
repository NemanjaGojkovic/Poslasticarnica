// forma
const forma = document.getElementById('forma');
const ime = document.getElementById('name');
const email = document.getElementById('email');
const polje = document.getElementById('polje');
const submit = document.getElementById('submit');



ime.addEventListener('blur',()=> {
 if(ime.value == ""){
    ime.classList.toggle('error');
    
  }else {
   ime.classList.toggle('success');
  }
});

email.addEventListener('blur',()=> {
 if(email.value == "" || !(email.value.includes('@'))){
    email.classList.toggle('error');
   
  }else{
   email.classList.toggle('success');
  }
});

number.addEventListener('blur',()=> {
  console.log(number.value.length);
  if(number.value == "" || number.value.length > 10){
     number.classList.toggle('error');
 
   }else{
    number.classList.toggle('success');
   }
});

polje.addEventListener('blur', ()=> {
  if(polje.value == ""){
    polje.classList.toggle('error');

  }else{
    polje.classList.toggle('success');
  }
}) 



 submit.addEventListener('click',(e)=>{

 if(ime.classList.contains('success') && email.classList.contains('success') && number.classList.contains('success') && polje.classList.contains('success')){
     
     window.confirm(`Hvala Vam! Poruka je uspešno poslata! \nIme i prezime: ${ime.value} \nEmail: ${email.value} \nBroj telefona: ${number.value} \nPoruka: ${polje.value}` );
   }else{
     e.preventDefault();
     window.alert('Podaci nisu dobro uneti! Pokušajte ponovo');
   }
});


//  Date

const time = new Date();
document.getElementById("time").textContent = time;


//dugme za vrh

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.na-vrh').fadeIn(200);
    } else {
      $('.na-vrh').fadeOut(200);
    }
  });
  $('.na-vrh').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300);
  })
});