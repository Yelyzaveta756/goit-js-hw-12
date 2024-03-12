import{i as d,a as b,S as L}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(n){return n.hits.map(({largeImageURL:t,webformatURL:o,tags:s,likes:e,views:r,comments:a,downloads:h})=>`<div class="gallery-item">
      <a class="gallery-link" href="${t}">
          <img 
          class="gallery-image" 
          src="${o}" 
          alt="${s}" 
          />
      </a>
      <div class="gallery-info">
          <p class="gallery-info-par">
              <span class="gallery-info-span">Likes: <span class="tag-span">${e}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Views: <span class="tag-span">${r}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Comments: <span class="tag-span">${a}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Downloads: <span class="tag-span">${h}</span>
              </span>    
          </p>
      </div>
  </div>`).join("")}function v(){d.show({title:"Info",color:"blue",timeout:3e3,position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}function w(){d.info({timeout:3e3,color:"yellow",position:"bottomRight",message:"Please search for something"})}function $(){d.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"})}const E="42660444-3b11bfb6c5a092fcbbd55e52b",M="https://pixabay.com/api/";async function m(n,t){const o=`${M}?key=${E}&q=${n}&image_type=photo&orientation=horizontal&savesearch=true&page=${t}&per_page=15`;try{return(await b.get(o)).data}catch(s){console.error(`Error: ${s}`)}}const f=new L(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".search-form"),i=document.querySelector(".gallery"),y=document.querySelector(".loader"),l=document.querySelector(".load-btn");let p,u;c.addEventListener("submit",S);l.addEventListener("click",q);async function S(n){if(u=1,n.preventDefault(),i.innerHTML="",p=c.elements.query.value.trim(),l.style.display="block",p===""){w(),i.innerHTML="",l.style.display="none",c.reset();return}y.style.display="block";try{const t=await m(p,u).then(o=>{const s=g(o);if(o.hits.length===0){$(),l.style.display="none",y.style.display="none";return}i.insertAdjacentHTML("beforeend",s),f.refresh(),y.style.display="none"})}catch(t){console.error("Error:",t)}c.reset()}async function q(){u+=1;try{const n=await m(p,u).then(t=>{const o=g(t);i.insertAdjacentHTML("beforeend",o),f.refresh();const s=i.getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"}),t.hits.length<=14&&(l.style.display="none",v(),f.refresh())})}catch(n){console.error("Error:",n)}}
//# sourceMappingURL=commonHelpers.js.map
