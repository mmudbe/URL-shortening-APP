
function showAllElements(){
  
  for(let j=localStorage.length-1 ; j>=0 ;j--){
    console.log('function got called');
    let full_link2 = JSON.parse(localStorage.getItem(j)).full_link1 ;
    let short_link2 = JSON.parse(localStorage.getItem(j)).short_link1;
    let container_2_main = document.querySelector('.short-link-parent') ;
    const clone = container_2_main.cloneNode(true);
    clone.id = `link${j}`;
  
    let parent_container = document.querySelector('.container-2-main');
   console.log(parent_container.appendChild(clone)); 
    
    dynamicLinkValues(full_link2,short_link2, clone.id);
    
    // console.log(full_link2);
    console.log(short_link2);
    }

 }

 showAllElements();

function  saveLocalStorage (newLink , newAns){
  const storeObject = {
    full_link1 :newLink,
    short_link1 :newAns
  }
  let stored = localStorage.setItem(localStorage.length, JSON.stringify(storeObject) );   
        showAllElements();
}



function dynamicLinkValues(val1 , val2,id){
  let item = document.getElementById(id);
   let full_item_text =item.querySelector('.full-link').innerHTML=val1;
   let short_item_text = item.querySelector('.short-link').innerHTML =val2;
console.log('dynamic got called');
}

const input = document.querySelector('.container-2-input');
// console.log(input);
// event listner on input field
input.addEventListener('change',async(e)=>{
const  inputLink = e.target.value;
console.log(inputLink);
// let full_link = document.querySelector('.full-link');
// full_link.innerHTML = link;
try {
  let request1 = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(inputLink) }`);
let response1 = await request1.json(); 
console.log(response1);
let ans = await response1.result.full_short_link;
console.log(ans);
  // let short_link = document.querySelector('.short-link');
  // short_link.innerHTML = ans;

    
    saveLocalStorage(inputLink, ans);


} catch (error) {
  console.log('its error' + error);
  let errorContainer = document.querySelector('.container-2');
  let errorTag = errorContainer.insertAdjacentHTML('beforeend',`<p class='error'>error</p>`);
}

//    let newHTML = container.insertAdjacentHTML('beforeend',`<div><p>${ans}</p><button type></button></div>`)
    // console.log(newHTML);
console.log('changed');
});


// // copy the shorten link
// let btn_copy =  document.querySelectorAll('.copy-btn');



// btn_copy.forEach((button)=>{
//   button.addEventListener('click',async ()=>{
//     let copyText = button.querySelector('.short-link');
  
//     // Copy the text inside the text field
//     let copiedText = await navigator.clipboard.writeText(copyText.innerHTML);
//     await console.log(copiedText);
//     button.innerHTML='copied!';
//     button.style.backgroundColor = 'black';
//      setTimeout((button) => {
//       button.innerHTML = 'copy';
//       button.style.backgroundColor = ' hsl(180, 66%, 49%)';
    
//      }, 2000);
//   })
// })   



// new link visible 
document.getElementById('link').style.display='none';