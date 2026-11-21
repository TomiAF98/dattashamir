/* Formularios locales: no transmiten DNI, teléfono, patente ni IMEI. */
(function(){
'use strict';
window.DattaUtil = {
 onlyDigits: function(x){return String(x||'').replace(/\D/g,'');},
 normalizePhone: function(s) {var x=this.onlyDigits(s);if(x.startsWith('549')&&x.length>=12)x=x.slice(3);else if(x.startsWith('54')&&x.length>=12)x=x.slice(2);if(x.startsWith('0')&&x.length>=11)x=x.slice(1);if(x.startsWith('15')&&x.length>=12)x=x.slice(2);return x;},
 result: function(id,title,description,type){
   var e=document.getElementById(id);if(!e)return;
   e.textContent='';e.dataset.type=type||'info';
   var s=document.createElement('strong');s.textContent=title;
   var p=document.createElement('div');p.textContent=description;
   e.append(s,p);e.classList.add('is-visible');e.setAttribute('role','status');
 }
};
})();
