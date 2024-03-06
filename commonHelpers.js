import{a as f,i as p,S as u}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(o){return o.hits.map(({largeImageURL:a,webformatURL:s,tags:t,likes:e,views:r,comments:n,downloads:y})=>`<div class="gallery-item>
      <a class="gallery-link" href="${a}">
          <img 
          class="gallery-image" 
          src="${s}" 
          alt="${t}" 
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
              <span class="gallery-info-span">Comments: <span class="tag-span">${n}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Downloads: <span class="tag-span">${y}</span>
              </span>    
          </p>
      </div>
  </div>`).join("")}const g="42660444-3b11bfb6c5a092fcbbd55e52b",m="https://pixabay.com/api/",i=document.querySelector(".loader");async function h(o){const a=`${m}?key=${g}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true`;i.style.display="block";try{const s=await f.get(a);return s.data.hits.length||p.error({title:"Error",timeout:3e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),s.data}catch(s){console.error(`Error: ${s}`)}finally{i.style.display="none"}}const b=new u(".gallery div ",{captionsData:"alt",captionDelay:250,alertError:!1}),L=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");L.addEventListener("submit",$);l.style.display="none";function $(o){o.preventDefault(),l.style.display="inline-block",c.innerHTML="";const a=o.currentTarget,s=a.elements.query.value.trim();if(s===""){p.show({title:"Error",color:"yellow",message:"Please search for something"}),l.style.display="none";return}h(s).then(t=>{c.innerHTML=d(t),b.refresh(),a.reset()}).catch(t=>{console.error("Error:",t)})}
//# sourceMappingURL=commonHelpers.js.map
