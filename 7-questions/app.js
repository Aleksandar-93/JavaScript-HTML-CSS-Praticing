//using selectors inside the element

 const questions = document.querySelectorAll('.question');

 questions.forEach(el => {
        const btn = el.querySelector('.question-btn');
        btn.addEventListener('click', ()=>{
            questions.forEach(item => {
                if(item !== el){
                    item.classList.remove('show-text')
                }
            });

            el.classList.toggle('show-text')
        })
    });







// traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(element => {
//   element.addEventListener('click', (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

