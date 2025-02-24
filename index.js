import{a as y,S as m,i}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();async function d(t,e){const l="https://pixabay.com/api/",n=new URLSearchParams({key:"48899648-ccb58b22bf2a70621fef2a532",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:e}),r=`${l}?${n}`;return await y(r)}function g(t){return t.map(e=>`<li class="gallery-item">
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
</li> `).join("")}function u(t){return g(t)}const a={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".request"),searchBtn:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load")},p=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.loader.style.display="none";a.loadBtn.style.display="none";const s={query:"",page:1,total:40};a.searchForm.addEventListener("submit",async t=>{if(t.preventDefault(),s.query=t.target.elements.query.value.trim(),s.page=1,!s.query){i.error({title:"Error",messageColor:"white",message:"Input is empty",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}a.loader.style.display="inline-block";try{const e=await d(s.query,s.page),l=e.data.hits;if(a.loader.style.display="none",e.data.hits.length===0)i.error({title:"Error",titleColor:"white",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"});else{const n=u(l);a.gallery.innerHTML=n,p.refresh(),a.loadBtn.style.display="block"}}catch(e){a.loader.style.display="none",i.error({title:"Error",titleColor:"white",messageColor:"white",message:`Sorry, unexpected error:${e} occured!`,position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"})}t.target.reset()});a.loadBtn.addEventListener("click",h);async function h(){s.page+=1;try{const t=await d(s.query,s.page),e=t.data.hits;a.loader.style.display="none";const l=u(e);a.gallery.insertAdjacentHTML("beforeend",l),p.refresh(),s.total=t.data.total,f()}catch(t){a.loader.style.display="none",i.error({title:"Error",titleColor:"white",messageColor:"white",message:`Sorry, unexpected error:${t} occured!`,position:"topRight",backgroundColor:"#EF4040",iconColor:"white",overlayColor:"#EF4040",theme:"dark"})}}function f(){const e=Math.ceil(s.total/40);s.page>=e?(a.loadBtn.style.display="none",a.gallery.insertAdjacentHTML("afterend","<p class='no-results'>We're sorry, but you've reached the end of search results.</p>")):a.loadBtn.style.display="block",w()}function w(){const e=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
