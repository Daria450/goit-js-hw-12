import{a as c,S as d,i as n}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function u(a){const e="https://pixabay.com/api/",o=new URLSearchParams({key:"48899648-ccb58b22bf2a70621fef2a532",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${e}?${o}`;return c(s)}function m(a){return a.map(e=>`<li class="gallery-item">
        <div class="img-container">
  <a class="gallery-link" href=${e.largeImageURL}> 
    <img
      class="gallery-image"
      src=${e.webformatURL}
      data-source=${e.largeImageURL}
      alt=${e.tags}
      height = 200
      width = 360
    />
  </a>
  </div>
  <ul class="img-data">
  <li class ="img-data-item">
    <p class="data-name">Likes</p>
    <p class="data-value">${e.likes}</p> 
  </li>
   <li class ="img-data-item">
    <p class="data-name">Views</p>
    <p class="data-value">${e.views}</p> 
  </li>
  <li class ="img-data-item">
    <p class="data-name">Comments</p>
    <p class="data-value">${e.comments}</p> 
  </li>
  <li class ="img-data-item">
    <p class="data-name">Downloads</p>
    <p class="data-value">${e.downloads}</p> 
  </li>
  </ul>
</li> `).join("")}function p(a,e){const o=m(a);e.innerHTML=o,new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const l={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".request"),searchBtn:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.loader.style.display="none";l.searchForm.addEventListener("submit",a=>{a.preventDefault();let e=a.target.elements.query.value.trim();if(!e){n.error({title:"Error",messageColor:"white",message:"Input is empty",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}l.loader.style.display="inline-block",u(e).then(o=>{l.loader.style.display="none";const s=o.data.hits;o.data.hits.length===0?n.error({title:"Error",titleColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"}):(p(s,l.gallery),a.target.reset())}).catch(o=>{l.loader.style.display="none",n.error({title:"Error",titleColor:"white",messageColor:"white",message:`Sorry, unexpected ${o} occured!`,position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"})})});
//# sourceMappingURL=index.js.map
