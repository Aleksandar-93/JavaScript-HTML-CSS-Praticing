import people from './util/data.js'
import get from './util/getElement.js'

const container = get('.slide-container');
const nextBtn = get('.next-btn');
const prevBtn = get('.prev-btn');

//set slides
container.innerHTML = people.map((person,slideIndex)=>{
    const {img,name,job,text} = person;
    let position = 'next';
    if(slideIndex === 0){
        position = "active";
    }
    if(slideIndex === people.length - 1){
        position = "last";
    }

    
    return `
    <article class="slide ${position}">
          <img src="${img}",alt="${name}" class="img">
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">${text}</p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>
    `
}).join('');