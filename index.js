import{a as m,S as g,i}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();async function d(r,e){const s="https://pixabay.com/api/",n=new URLSearchParams({key:"48899648-ccb58b22bf2a70621fef2a532",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:e}),a=`${s}?${n}`;return await m(a)}function h(r){return r.map(e=>`<li class="gallery-item">
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
</li> `).join("")}function u(r){return h(r)}const t={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".request"),searchBtn:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load"),noResults:document.querySelector(".no-results")},p=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});t.loader.style.display="none";t.loadBtn.style.display="none";t.noResults.style.display="none";const l={query:"",page:1,total:40};t.searchForm.addEventListener("submit",async r=>{if(r.preventDefault(),l.query=r.target.elements.query.value.trim(),l.page=1,!l.query){i.error({title:"Error",messageColor:"white",message:"Input is empty",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}t.loader.style.display="inline-block";try{const e=await d(l.query,l.page),s=e.data.hits;if(t.loader.style.display="none",e.data.hits.length===0)i.error({title:"Error",titleColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"});else{const n=u(s);t.gallery.innerHTML=n,p.refresh(),t.loadBtn.style.display="block",l.total=e.data.total,y()}}catch(e){t.loader.style.display="none",i.error({title:"Error",titleColor:"white",messageColor:"white",message:`Sorry, unexpected error:${e} occured!`,position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"})}r.target.reset()});t.loadBtn.addEventListener("click",f);async function f(){t.loader.style.display="block",t.loadBtn.style.display="none",l.page+=1;try{const r=await d(l.query,l.page),e=r.data.hits;t.loader.style.display="none";const s=u(e);t.gallery.insertAdjacentHTML("beforeend",s),p.refresh(),l.total=r.data.total,y()}catch(r){t.loader.style.display="none",i.error({title:"Error",titleColor:"white",messageColor:"white",message:`Sorry, unexpected error:${r} occured!`,position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"})}}function y(){const e=Math.ceil(l.total/40);l.page>=e?(t.loadBtn.style.display="none",t.noResults.style.display="block"):t.loadBtn.style.display="block",w()}function w(){const e=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
