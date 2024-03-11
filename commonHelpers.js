import{a as w,i as p,S as $}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function f(s){return s.hits.map(({largeImageURL:r,webformatURL:n,tags:o,likes:e,views:t,comments:i,downloads:b})=>`<div class="gallery-item">
      <a class="gallery-link" href="${r}">
          <img 
          class="gallery-image" 
          src="${n}" 
          alt="${o}" 
          />
      </a>
      <div class="gallery-info">
          <p class="gallery-info-par">
              <span class="gallery-info-span">Likes: <span class="tag-span">${e}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Views: <span class="tag-span">${t}</span>
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
  </div>`).join("")}const L="42660444-3b11bfb6c5a092fcbbd55e52b",v="https://pixabay.com/api/",u=document.querySelector(".loader"),S=document.querySelector(".load-btn"),E=document.querySelector(".form");async function g(s,r,n){const o=`${v}?key=${L}&q=${s}&image_type=photo&orientation=horizontal&savesearch=true&page=${n}&per_page=${r}`;u.style.display="block";try{const e=await w.get(o);return e.data.hits.length===0&&(p.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),S.style.display="none",u.style.display="none",E.reset()),e.data}catch(e){console.error(`Error: ${e}`)}}const m=new $("div .gallery-link ",{captionsData:"alt",captionDelay:250,alertError:!1}),q=document.querySelector(".form"),y=document.querySelector(".gallery"),a=document.querySelector(".loader"),l=document.querySelector(".load-btn");q.addEventListener("submit",H);l.style.display="none";a.style.display="none";let c,h,d;async function H(s){s.preventDefault(),a.style.display="block",y.innerHTML="";const r=s.currentTarget,n=r.elements.query.value.trim();if(n===""){p.show({title:"Error",color:"yellow",message:"Please search for something"}),l.style.display="none",a.style.display="none";return}g(n,15,1).then(o=>{d=o.totalHits,y.innerHTML=f(o),h=n,c=1,l.style.display="none",a.style.display="none",m.refresh(),r.reset()}).catch(o=>{console.error("Error:",o)})}l.addEventListener("click",async()=>{a.style.display="block";try{const s=await g(h,15,c);c+=1,c*15<d?(y.innerHTML+=f(s),m.refresh(),a.style.display="none",l.style.display="none",M()):p.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(s){console.error("Error:",s),alert(s.message)}finally{l.style.display="none"}});window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&c*15<d?(l.style.display="block",a.style.display="block"):(l.style.display="none",a.style.display="none")};function M(){const s=y.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
