import{a as w,i as d,S as $}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function g(t){return t.hits.map(({largeImageURL:r,webformatURL:o,tags:a,likes:e,views:s,comments:i,downloads:b})=>`<div class="gallery-item">
      <a class="gallery-link" href="${r}">
          <img 
          class="gallery-image" 
          src="${o}" 
          alt="${a}" 
          />
      </a>
      <div class="gallery-info">
          <p class="gallery-info-par">
              <span class="gallery-info-span">Likes: <span class="tag-span">${e}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Views: <span class="tag-span">${s}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Comments: <span class="tag-span">${i}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Downloads: <span class="tag-span">${b}</span>
              </span>    
          </p>
      </div>
  </div>`).join("")}const L="42660444-3b11bfb6c5a092fcbbd55e52b",v="https://pixabay.com/api/",f=document.querySelector(".loader"),S=document.querySelector(".load-btn"),q=document.querySelector(".form");async function m(t,r){const o=`${v}?key=${L}&q=${t}&image_type=photo&orientation=horizontal&savesearch=true&page=${r}&per_page=15`;f.style.display="block";try{const a=await w.get(o);return a.data.hits.length===0&&(d.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),S.style.display="none",f.style.display="none",q.reset()),a.data}catch(a){console.error(`Error: ${a}`)}}const h=new $("div .gallery-link ",{captionsData:"alt",captionDelay:250,alertError:!1}),E=document.querySelector(".form"),y=document.querySelector(".gallery"),n=document.querySelector(".loader"),c=document.querySelector(".load-btn");E.addEventListener("submit",H);let l,p,u;c.style.display="none";async function H(t){l=1,t.preventDefault(),n.style.display="block",y.innerHTML="";const r=t.currentTarget;if(p=r.elements.query.value.trim(),p===""){d.show({title:"Error",color:"yellow",message:"Please search for something"}),c.style.display="none",n.style.display="none";return}m(p,l).then(o=>{u=o.totalHits,y.innerHTML=g(o),c.style.display="none",n.style.display="none",h.refresh(),r.reset()}).catch(o=>{console.error("Error:",o)})}c.addEventListener("click",async()=>{n.style.display="block";try{const t=await m(p,l);l+=1,l*15<u?(y.innerHTML+=g(t),h.refresh(),M()):d.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(t){console.error("Error:",t),alert(t.message)}finally{c.style.display="none"}});window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&l*15<u?n.style.display="block":n.style.display="none"};function M(){const t=y.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
