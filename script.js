const textarea = document.querySelector(".text-area");
const char_element = document.querySelector(".char-number");
const twitter_element = document.querySelector(".twitter-number");
const insta_element = document.querySelector(".insta-number");

let x_char_limit = 280;
let insta_char_limit = 160;

const colorChange = (count) => {
    if(count> 280){
        twitter_element.classList.add(".change-color");
    }
    else{
        twitter_element.classList.remove("change-color");
    }
}

const charCounter = (e) => {
    console.log(e);
    char_element.innerText = e.target.value.length;
}

const twitterCounter = (e) =>{
    twitter_element.innerText = x_char_limit - e.target.value.length;
    colorChange(e.target.value.length);
}

const instaCounter = (e) =>{
    insta_element.innerText = insta_char_limit - e.target.value.length;
}

textarea.addEventListener("input",(e) =>{
    charCounter(e);
    twitterCounter(e);
    instaCounter(e);
});

