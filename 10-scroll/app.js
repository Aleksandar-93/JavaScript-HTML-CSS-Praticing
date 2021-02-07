// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContaner = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', ()=>{
    // linksContaner.classList.toggle('show-links');
    const containerHeight = linksContaner.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    //Dinamic height
    if(containerHeight === 0){
        linksContaner.style.height = `${linksHeight}px`
    }else{
        linksContaner.style.height = 0;
    }

});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
       navbar.classList.add('fixed-nav') 
    }else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
        
    }
});

// ********** smooth scroll ************
// select links
const ScrollLinks = document.querySelectorAll('.scroll-link');

ScrollLinks.forEach((link)=>{
    link.addEventListener('click', (e)=>{
         // prevent default
        e.preventDefault();
        // navigate to sepcific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        //calulate the hights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContaner.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        window.scrollTo({
            left:0,
            top:position,
        });
        //close link contaner when klicked
        linksContaner.style.height = 0;
    });
});
