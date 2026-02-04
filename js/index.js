// slå dig løs her... 

const cube = `<svg class ="cube" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0654 16.9245V31.9999L30.1229 24.4615V9.3855L17.0654 16.9245Z" fill="white"/>
<path d="M30.1229 9.3855L17.0654 16.9245V31.9999" fill="white"/>
<path d="M29.0586 7.53848L16.0001 0L2.94263 7.53848V7.54102L16.0001 15.08L29.0586 7.54102V7.53848Z" fill="white"/>
<path d="M2.94263 7.53845V7.54099L16.0001 15.08L29.0586 7.54099V7.53845" fill="white"/>
<path d="M14.9357 16.9245L1.8772 9.3855V24.4615L14.9357 31.9999V16.9245Z" fill="white"/>
<path d="M14.9357 31.9999V16.9245L1.8772 9.3855" fill="white"/>
</svg>`;

const login_group = `<svg width="86" height="53" viewBox="0 0 86 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="86" height="53" rx="26.5" fill="white"/>
<g clip-path="url(#clip0_1_44)">
<path d="M56 10C47.164 10 40 17.163 40 26C40 34.837 47.164 42 56 42C64.836 42 72 34.837 72 26C72 17.163 64.836 10 56 10ZM56 38C52.249 38 48.902 36.277 46.702 33.581C47.705 30.547 49.711 28.122 52.228 26.89C50.288 25.646 49 23.475 49 21C49 17.376 51.754 14.395 55.284 14.036C55.522 14.022 55.758 14 56 14C56.242 14 56.478 14.022 56.716 14.036C60.246 14.395 63 17.376 63 21C63 23.475 61.712 25.646 59.772 26.89C62.29 28.123 64.295 30.548 65.298 33.581C63.098 36.277 59.751 38 56 38Z" fill="#F78065"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.71 29.29L31.3 24.7C31.69 24.31 31.69 23.68 31.3 23.29C30.91 22.9 30.28 22.9 29.89 23.29L26 27.17L22.12 23.29C21.73 22.9 21.1 22.9 20.71 23.29C20.32 23.68 20.32 24.31 20.71 24.7L25.3 29.29C25.68 29.68 26.32 29.68 26.71 29.29Z" fill="#444B53"/>
<defs>
<clipPath id="clip0_1_44">
<rect width="32" height="32" fill="white" transform="translate(40 10)"/>
</clipPath>
</defs>
</svg>
`

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))

/* HERO SECTION  */
// 
let heroSection = document.querySelector(".hero");
// let hero_Image = document.createElement("img");

// hero_Image.setAttribute("src" , hero.image);
// heroSection.appendChild(hero_Image);
// console.log(hero_Image);

const headerString = 
    /*html*/
    `
    <img src="${hero.image}" alt="hej" class="hero__img">
    <figure class ="hero__figure">
   <div class ="figure__svg"> ${cube}
    ${login_group}
    </div>
    </figure>
    <section class="hero__section__headline "><h1>${hero.headline}</h1>
    <p>${hero.copy}</p>
    <button class ="hero__button"><img src="${hero.icon}" alt="button explorer">explore</button></section>  
    
    `
    // <img src="${login_group}" alt="logo" class="hero__figure__logo">

heroSection.insertAdjacentHTML("afterbegin", headerString);



console.log(hero.headline);
let headline_string = hero.headline;























