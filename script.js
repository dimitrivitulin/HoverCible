const rayon1 = document.getElementById("rayon1");
const rayon2 = document.getElementById("rayon2");
const rayon3 = document.getElementById("rayon3");
const rayon4 = document.getElementById("rayon4");

const carte1 = document.getElementById("carte1");
const carte2 = document.getElementById("carte2");
const carte3 = document.getElementById("carte3");
const carte4 = document.getElementById("carte4");



// Hover

rayon1.addEventListener('mouseenter', () => 
{
    carte1.style.transition="1s ease-in-out";
    carte1.style.transform= "scale(1.2) translateX(340px)";
});

rayon1.addEventListener('mouseout', () => 
{
    carte1.style.transition="1s ease-in-out";
    carte1.style.transform= "scale(1) translateX(-340px)";
});



rayon2.addEventListener('mouseenter', () => 
{
    carte2.style.transition="1s ease-in-out";
    carte2.style.transform= "scale(1.2) translateX(340px)";
});

rayon2.addEventListener('mouseout', () => 
{
    carte2.style.transition="1s ease-in-out";
    carte2.style.transform= "scale(1) translateX(-340px)";
});



rayon3.addEventListener('mouseenter', () => 
{
    carte3.style.transition="1s ease-in-out";
    carte3.style.transform= "scale(1.2) translateX(-340px)";
});

rayon3.addEventListener('mouseout', () => 
{
    carte3.style.transition="1s ease-in-out";
    carte3.style.transform= "scale(1) translateX(340px)";
});

rayon4.addEventListener('mouseenter', () => 
{
    carte4.style.transition="1s ease-in-out";
    carte4.style.transform= "scale(1.2) translateX(-340px)";
});

rayon4.addEventListener('mouseout', () => 
{
    carte4.style.transition="1s ease-in-out";
    carte4.style.transform= "scale(1) translateX(340px)";
});

