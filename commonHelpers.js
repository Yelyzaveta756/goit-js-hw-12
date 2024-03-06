import{a as $,i as y,S as L}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function u(o){return o.hits.map(({largeImageURL:t,webformatURL:a,tags:s,likes:e,views:r,comments:l,downloads:b})=>`<div class="gallery-item>
      <a class="gallery-link" href="${t}">
          <img 
          class="gallery-image" 
          src="${a}" 
          alt="${s}" 
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
              <span class="gallery-info-span">Comments: <span class="tag-span">${l}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Downloads: <span class="tag-span">${b}</span>
              </span>    
          </p>
      </div>
  </div>`).join("")}const v="42660444-3b11bfb6c5a092fcbbd55e52b",S="https://pixabay.com/api/",d=document.querySelector(".loader"),q=document.querySelector(".load-btn"),E=document.querySelector(".form");async function f(o,t,a){const s=`${S}?key=${v}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true&page=${a}&per_page=${t}`;d.style.display="block";try{const e=await $.get(s);if(!e.data.hits.length){y.error({title:"Error",timeout:3e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),q.style.display="none",d.style.display="none",E.reset();return}return e.data}catch(e){console.error(`Error: ${e}`)}finally{}}const g=new L(".gallery div ",{captionsData:"alt",captionDelay:250,alertError:!1}),w=document.querySelector(".form"),p=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".load-btn");w.addEventListener("submit",M);i.style.display="none";n.style.display="none";let c,m,h;async function M(o){o.preventDefault(),n.style.display="block",p.innerHTML="";const t=o.currentTarget,a=t.elements.query.value.trim();if(a===""){y.show({title:"Error",color:"yellow",message:"Please search for something"}),i.style.display="none",n.style.display="none";return}f(a,15,1).then(s=>{h=s.totalHits,p.innerHTML=u(s),m=a,c=1,i.style.display="block",n.style.display="none",g.refresh(),t.reset()}).catch(s=>{console.error("Error:",s)})}i.addEventListener("click",async o=>{n.style.display="block",c+=1;try{const t=await f(m,15,c);c*15<h?(p.innerHTML+=u(t),g.refresh(),n.style.display="none"):(i.style.display="none",y.info({title:"Info",timeout:3e3,position:"bottomRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.error("Error:",t),alert(t.message)}});
//# sourceMappingURL=commonHelpers.js.map
