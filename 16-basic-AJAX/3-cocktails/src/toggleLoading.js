import get from './getElement.js'

const loading = get('.loading');

export const showLoading =()=>{
    loading.classList.remove('hide-loading')
}

export const hideLoading =()=>{
    setTimeout(()=>{
    loading.classList.add('hide-loading')
 }, 500);
}