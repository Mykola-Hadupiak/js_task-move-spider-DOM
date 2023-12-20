document.addEventListener("click",e=>{let t=document.querySelector(".spider"),i=document.querySelector(".wall");if(e.target!==i)return;let l=t.clientWidth/2,c=t.clientHeight/2,f=e.offsetX-l,n=e.offsetY-c;e.offsetX<l&&(f=0),e.offsetY<c&&(n=0),e.offsetX>i.clientWidth-l&&(f=i.clientWidth-t.clientWidth),e.offsetY>i.clientHeight-c&&(n=i.clientHeight-t.clientHeight),t.style.left=f+"px",t.style.top=n+"px"});//# sourceMappingURL=index.a51ec3d4.js.map

//# sourceMappingURL=index.a51ec3d4.js.map
