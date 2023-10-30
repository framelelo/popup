// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

const lastLevel = window.scrollY;

const navbar = document.getElementById('navbar');
const imgImprovise = document.getElementById('imgImprovise');

const topHeight = document.getElementById('adapt').scrollHeight;
const pageHeight = document.getElementById('improvise').scrollHeight;
const closeBtn = document.getElementById('closeBtn');

const popup = document.getElementById('popup');



window.addEventListener('scroll',(e) =>{
  const actualLevel = window.scrollY;
  
  if(actualLevel > lastLevel) {
    navbar.style.height ='50px';
  }
  else {
    navbar.style.height ='90px';
  }

});

// Faire apparaitre l'image de la partie improvise

window.addEventListener('scroll',(e) =>{
    const actualLevel = window.scrollY;

    if(actualLevel > topHeight) {
        imgImprovise.style.opacity ='1';
        imgImprovise.style.transform ='translate(0,0)';
    }
  
  });

// Faire apparaitre la popup quand on est en bas du site

window.addEventListener('scroll',(e) =>{
  const actualLevel = window.scrollY;
  
  if(actualLevel > pageHeight) {
    popup.style.opacity ='1';
    popup.style.transform ='translate(0,0)';
  }
  else {
    popup.style.opacity ='0';
  };
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours

closeBtn.addEventListener('click',(e) =>{

    popup.style.display='none';

});
