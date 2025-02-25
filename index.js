import{a as m,S as g,i}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();async function d(a,e){const l="https://pixabay.com/api/",n=new URLSearchParams({key:"48899648-ccb58b22bf2a70621fef2a532",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:e}),r=`${l}?${n}`;return await m(r)}function h(a){return a.map(e=>`<li class="gallery-item">
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
</li> `).join("")}function u(a){return h(a)}const t={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".request"),searchBtn:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load"),noResults:document.querySelector(".no-results")},p=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});t.loader.style.display="none";t.loadBtn.style.display="none";t.noResults.style.display="none";const s={query:"",page:1,total:40};t.searchForm.addEventListener("submit",async a=>{if(a.preventDefault(),s.query=a.target.elements.query.value.trim(),s.page=1,!s.query){i.error({title:"Error",messageColor:"white",message:"Input is empty",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}t.loader.style.display="inline-block";try{const e=await d(s.query,s.page),l=e.data.hits;if(t.loader.style.display="none",e.data.hits.length===0)i.error({title:"Error",titleColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"});else{const n=u(l);t.gallery.innerHTML=n,p.refresh(),t.loadBtn.style.display="block",s.total=e.data.total,y()}}catch(e){t.loader.style.display="none",i.error({title:"Error",titleColor:"white",messageColor:"white",message:`Sorry, unexpected error:${e} occured!`,position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"})}a.target.reset()});t.loadBtn.addEventListener("click",f);async function f(){t.loader.style.display="block",t.loadBtn.style.display="none",s.page+=1;try{const a=await d(s.query,s.page),e=a.data.hits;t.loader.style.display="none";const l=u(e);t.gallery.insertAdjacentHTML("beforeend",l),p.refresh(),s.total=a.data.total,y()}catch(a){t.loader.style.display="none",i.error({title:"Error",titleColor:"white",messageColor:"white",message:`Sorry, unexpected error:${a} occured!`,position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"})}}function y(){const e=Math.ceil(s.total/40);s.page>=e?(t.loadBtn.style.display="none",t.noResults.style.display="block"):t.loadBtn.style.display="block"}
//# sourceMappingURL=index.js.map
