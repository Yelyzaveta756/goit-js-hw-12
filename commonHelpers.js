import{a as w,i as y,S as $}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(a){return a.hits.map(({largeImageURL:s,webformatURL:o,tags:r,likes:e,views:t,comments:i,downloads:b})=>`<div class="gallery-item>
      <a class="gallery-link" href="${s}">
          <img 
          class="gallery-image" 
          src="${o}" 
          alt="${r}" 
          width="360px" height="260px"/>
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
  </div>`).join("")}const L="42660444-3b11bfb6c5a092fcbbd55e52b",v="https://pixabay.com/api/",d=document.querySelector(".loader"),S=document.querySelector(".load-btn"),q=document.querySelector(".form");async function f(a,s,o){const r=`${v}?key=${L}&q=${a}&image_type=photo&orientation=horizontal&savesearch=true&page=${o}&per_page=${s}`;d.style.display="block";try{const e=await w.get(r);return e.data.hits.length===0&&(y.error({title:"Error",timeout:2e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),S.style.display="none",d.style.display="none",q.reset()),e.data}catch(e){console.error(`Error: ${e}`)}}const g=new $(".gallery div ",{captionsData:"alt",captionDelay:250,alertError:!1}),E=document.querySelector(".form"),p=document.querySelector(".gallery"),n=document.querySelector(".loader"),l=document.querySelector(".load-btn");E.addEventListener("submit",H);l.style.display="none";n.style.display="none";let c,m,h;async function H(a){a.preventDefault(),n.style.display="block",p.innerHTML="";const s=a.currentTarget,o=s.elements.query.value.trim();if(o===""){y.show({title:"Error",color:"yellow",message:"Please search for something"}),l.style.display="none",n.style.display="none";return}f(o,15,1).then(r=>{h=r.totalHits,p.innerHTML=u(r),m=o,c=1,l.style.display="none",n.style.display="none",g.refresh(),s.reset()}).catch(r=>{console.error("Error:",r)})}l.addEventListener("click",async a=>{n.style.display="block",c+=1;try{const s=await f(m,15,c);c*15<h?(p.innerHTML+=u(s),g.refresh(),n.style.display="none",l.style.display="none"):y.show({title:"Info",timeout:2e3,color:"blue",position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(s){console.error("Error:",s),alert(s.message)}finally{l.style.display="none"}});window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight?(l.style.display="block",n.style.display="block"):(l.style.display="none",n.style.display="none")};
//# sourceMappingURL=commonHelpers.js.map
