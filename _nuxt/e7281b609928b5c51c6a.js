(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2045:function(e,t,n){"use strict";var o=n(530);n.n(o).a},2046:function(e,t,n){(e.exports=n(46)(!1)).push([e.i,"#game[data-v-7edda2e1]{padding:10px}",""])},2047:function(e,t,n){"use strict";var o=n(531);n.n(o).a},2048:function(e,t,n){(e.exports=n(46)(!1)).push([e.i,"*[data-v-7cb10356]{overflow-y:hidden}#game_container[data-v-7cb10356]{margin:0;padding:0;min-height:100vh;min-width:100vw}",""])},2452:function(e,t,n){"use strict";n.r(t);var o=n(358),r=n(433),c=n(359),h=n(434),d=n(602),l=n.n(d),m=n(2044),f=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"preload",value:function(){this.input.keyboard.on("keydown",this.onKeydown.bind(this)),this.load.json("map","/assets/map.json"),this.load.image("mine","/assets/mine.png")}},{key:"create",value:function(){for(var data=this.cache.json.get("map"),e=data.tilewidth/2,t=data.tileheight/2,n=data.layers[0].data,o=data.layers[0].width,r=data.layers[0].height,c=o*e,h=r*t,i=0,d=0;d<r;d++)for(var l=0;l<o;l++){var m=n[i]-1,f=(l-d)*e,w=(l+d)*t;this.add.image(c+f,h+w,"mine",m).depth=h+w,i++}this.cameras.main.setBounds(0,0,1e3,1e3),this.cameras.main.setZoom(.3),this.cameras.main.setPosition(-50,-200)}},{key:"onKeydown",value:function(e){var t=this.cameras.main;switch(e.key){case"ArrowLeft":t.x-=10;break;case"ArrowRight":t.x+=10;break;case"ArrowUp":t.y-=10;break;case"ArrowDown":t.y+=10}t.setPosition(t.x,t.y)}}]),t}(l.a.Scene),w={type:l.a.CANVAS,parent:"game_container",debug:!0,width:window.innerWidth,height:window.innerHeight,scene:null},v=function(e){function t(){return Object(o.a)(this,t),w.scene=new f,Object(r.a)(this,Object(c.a)(t).call(this,w))}return Object(h.a)(t,e),t}(l.a.Game),y={data:function(){return{game:null}},mounted:function(){this.game=new v}},j=(n(2045),n(23)),k={components:{Game:Object(j.a)(y,function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"game_container"}})},[],!1,null,"7edda2e1",null).exports}},O=(n(2047),Object(j.a)(k,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"game_container"},[t("game")],1)},[],!1,null,"7cb10356",null));t.default=O.exports},530:function(e,t,n){var content=n(2046);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("61278010",content,!0,{sourceMap:!1})},531:function(e,t,n){var content=n(2048);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("79c15eec",content,!0,{sourceMap:!1})}}]);