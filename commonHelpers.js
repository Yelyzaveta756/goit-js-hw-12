import{a as w,i as y,S as $}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(a){return a.hits.map(({largeImageURL:t,webformatURL:s,tags:o,likes:e,views:r,comments:i,downloads:b})=>`<div class="gallery-item>
      <a class="gallery-link" href="${t}">
          <img 
          class="gallery-image" 
          src="${s}" 
          alt="${o}" 
          width="360px" height="260px"/>
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
              <span class="gallery-info-span">Comments: <span class="tag-span">${i}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Downloads: <span class="tag-span">${b}</span>
              </span>    
          </p>
      </div>
  </div>`).join("")}const L="42660444-3b11bfb6c5a092fcbbd55e52b",v="https://pixabay.com/api/",d=document.querySelector(".loader"),S=document.querySelector(".load-btn"),q=document.querySelector(".form");async function f(a,t,s){const o=`${v}?key=${L}&q=${a}&image_type=photo&orientation=horizontal&savesearch=true&page=${s}&per_page=${t}`;d.style.display="block";try{const e=await w.get(o);return e.data.hits.length===0&&(y.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),S.style.display="none",d.style.display="none",q.reset()),e.data}catch(e){console.error(`Error: ${e}`)}}const g=new $(".gallery div ",{captionsData:"alt",captionDelay:250,alertError:!1}),E=document.querySelector(".form"),p=document.querySelector(".gallery"),l=document.querySelector(".loader"),n=document.querySelector(".load-btn");E.addEventListener("submit",H);n.style.display="none";l.style.display="none";let c,m,h;async function H(a){a.preventDefault(),l.style.display="block",p.innerHTML="";const t=a.currentTarget,s=t.elements.query.value.trim();if(s===""){y.show({title:"Error",color:"yellow",message:"Please search for something"}),n.style.display="none",l.style.display="none";return}f(s,15,1).then(o=>{h=o.totalHits,p.innerHTML=u(o),m=s,c=1,n.style.display="none",l.style.display="none",g.refresh(),t.reset()}).catch(o=>{console.error("Error:",o)})}n.addEventListener("click",async a=>{l.style.display="block",c+=1;try{const t=await f(m,15,c);c*15<h?(p.innerHTML+=u(t),g.refresh(),l.style.display="none",n.style.display="none",M()):y.show({title:"Info",timeout:2e3,position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(t){console.error("Error:",t),alert(t.message)}});function M(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight?x():n.style.display="none"};function x(){n.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
