import{a as w,i as p,S as $}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function u(o){return o.hits.map(({largeImageURL:t,webformatURL:n,tags:r,likes:e,views:s,comments:i,downloads:b})=>`<div class="gallery-item>
      <a class="gallery-link" href="${t}">
          <img 
          class="gallery-image" 
          src="${n}" 
          alt="${r}" 
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
  </div>`).join("")}const v="42660444-3b11bfb6c5a092fcbbd55e52b",L="https://pixabay.com/api/",d=document.querySelector(".loader"),S=document.querySelector(".load-btn"),q=document.querySelector(".form");async function f(o,t,n){const r=`${L}?key=${v}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true&page=${n}&per_page=${t}`;d.style.display="block";try{const e=await w.get(r);return e.data.hits.length===0&&(p.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),S.style.display="none",d.style.display="none",q.reset()),e.data}catch(e){console.error(`Error: ${e}`)}}const g=new $(".gallery div ",{captionsData:"alt",captionDelay:250,alertError:!1}),E=document.querySelector(".form"),y=document.querySelector(".gallery"),a=document.querySelector(".loader"),l=document.querySelector(".load-btn");E.addEventListener("submit",H);l.style.display="none";a.style.display="none";let c,m,h;async function H(o){o.preventDefault(),a.style.display="block",y.innerHTML="";const t=o.currentTarget,n=t.elements.query.value.trim();if(n===""){p.show({title:"Error",color:"yellow",message:"Please search for something"}),l.style.display="none",a.style.display="none";return}f(n,15,1).then(r=>{h=r.totalHits,y.innerHTML=u(r),m=n,c=1,l.style.display="none",a.style.display="none",g.refresh(),t.reset()}).catch(r=>{console.error("Error:",r)})}l.addEventListener("click",async o=>{a.style.display="block",c+=1;try{const t=await f(m,15,c);c*15<h?(y.innerHTML+=u(t),g.refresh(),a.style.display="none",l.style.display="none",M()):p.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(t){console.error("Error:",t),alert(t.message)}finally{l.style.display="none"}});window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight?(l.style.display="block",a.style.display="block"):(l.style.display="none",a.style.display="none")};function M(){const o=document.querySelector(".gallery-item");if(o.length>0){const t=o[0].getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
