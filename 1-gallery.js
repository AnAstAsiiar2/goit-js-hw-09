import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as r}from"./assets/vendor-CgTBfC_f.js";const m="/goit-js-hw-09/assets/im1-BTOW8WtS.jpg",s="/goit-js-hw-09/assets/im2-BnUDSjWx.jpg",t="/goit-js-hw-09/assets/im3-BDlqddev.jpg",e="/goit-js-hw-09/assets/im4-DjJLQ-qS.jpg",_="/goit-js-hw-09/assets/im5-Bnek9mdE.jpg",j="/goit-js-hw-09/assets/im6-_6rDUri3.jpg",o="/goit-js-hw-09/assets/im7-58QsE89I.jpg",p="/goit-js-hw-09/assets/im8-DPMk8yB9.jpg",l="/goit-js-hw-09/assets/im9-DcXnYkW-.jpg",n=Array.from({length:9},(g,i)=>({preview:new URL(Object.assign({"../img/im1.jpg":m,"../img/im2.jpg":s,"../img/im3.jpg":t,"../img/im4.jpg":e,"../img/im5.jpg":_,"../img/im6.jpg":j,"../img/im7.jpg":o,"../img/im8.jpg":p,"../img/im9.jpg":l})[`../img/im${i+1}.jpg`],import.meta.url).href,original:new URL(Object.assign({"../img/im1.jpg":m,"../img/im2.jpg":s,"../img/im3.jpg":t,"../img/im4.jpg":e,"../img/im5.jpg":_,"../img/im6.jpg":j,"../img/im7.jpg":o,"../img/im8.jpg":p,"../img/im9.jpg":l})[`../img/im${i+1}.jpg`],import.meta.url).href,description:`Зображення ${i+1}`})),c=document.querySelector(".gallery"),h=n.map(({preview:g,original:i,description:a})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img class="gallery-image" src="${g}" alt="${a}" />
    </a>
  </li>
`).join("");c.innerHTML=h;new r(".gallery a");
//# sourceMappingURL=1-gallery.js.map
