import{a as w,i as p,S as $}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function u(r){return r.hits.map(({largeImageURL:t,webformatURL:n,tags:o,likes:e,views:s,comments:i,downloads:b})=>`<div class="gallery-item>
      <a class="gallery-link" href="${t}">
          <img 
          class="gallery-image" 
          src="${n}" 
          alt="${o}" 
          width="360px" height="260px"/>
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
  </div>`).join("")}const v="42660444-3b11bfb6c5a092fcbbd55e52b",L="https://pixabay.com/api/",d=document.querySelector(".loader"),S=document.querySelector(".load-btn"),E=document.querySelector(".form");async function f(r,t,n){const o=`${L}?key=${v}&q=${r}&image_type=photo&orientation=horizontal&savesearch=true&page=${n}&per_page=${t}`;d.style.display="block";try{const e=await w.get(o);return e.data.hits.length===0&&(p.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),S.style.display="none",d.style.display="none",E.reset()),e.data}catch(e){console.error(`Error: ${e}`)}}const g=new $(".gallery div ",{captionsData:"alt",captionDelay:250,alertError:!1}),q=document.querySelector(".form"),y=document.querySelector(".gallery"),a=document.querySelector(".loader"),l=document.querySelector(".load-btn");q.addEventListener("submit",H);l.style.display="none";a.style.display="none";let c,m,h;async function H(r){r.preventDefault(),a.style.display="block",y.innerHTML="";const t=r.currentTarget,n=t.elements.query.value.trim();if(n===""){p.show({title:"Error",color:"yellow",message:"Please search for something"}),l.style.display="none",a.style.display="none";return}f(n,15,1).then(o=>{h=o.totalHits,y.innerHTML=u(o),m=n,c=1,l.style.display="none",a.style.display="none",g.refresh(),t.reset()}).catch(o=>{console.error("Error:",o)})}l.addEventListener("click",async r=>{a.style.display="block",c+=1;try{const t=await f(m,15,c);c*15<h?(y.innerHTML+=u(t),g.refresh(),a.style.display="none",l.style.display="none",M()):p.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(t){console.error("Error:",t),alert(t.message)}finally{l.style.display="none"}});window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight?(l.style.display="block",a.style.display="block"):(l.style.display="none",a.style.display="none")};function M(){const r=y.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:3*r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
