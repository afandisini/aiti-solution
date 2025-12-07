/*!
 * AITI-Solutions JS — MIT (see LICENSE)
 * (c) 2025 Afan Hermawan
 */
export function ready(fn){ document.readyState!=='loading'?fn():document.addEventListener('DOMContentLoaded',fn); }
export function ripple(el){
  el.addEventListener('click',(e)=>{
    const r=document.createElement('span'); r.className='aiti-ripple';
    const size=Math.max(el.clientWidth,el.clientHeight);
    r.style.width=r.style.height=size+'px';
    const rect=el.getBoundingClientRect();
    r.style.left=(e.clientX-rect.left-size/2)+'px';
    r.style.top=(e.clientY-rect.top-size/2)+'px';
    el.appendChild(r); setTimeout(()=>r.remove(),450);
  },{passive:true});
}
const style=document.createElement('style');
style.textContent=`
.aiti-btn{position:relative;overflow:hidden}
.aiti-ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.35);
transform:scale(0);animation:aiti-ripple .45s ease-out;pointer-events:none;mix-blend-mode:screen;opacity:.9}
@keyframes aiti-ripple{to{transform:scale(3.5);opacity:0}}
`; document.head.appendChild(style);
