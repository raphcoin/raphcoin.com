(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1564:function(e,t,n){"use strict";var c=n(394);n.n(c).a},1565:function(e,t,n){(e.exports=n(46)(!1)).push([e.i,"#game[data-v-7edda2e1]{padding:10px}",""])},1566:function(e,t,n){"use strict";var c=n(395);n.n(c).a},1567:function(e,t,n){(e.exports=n(46)(!1)).push([e.i,".container{margin:0 auto;min-height:100vh;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px;padding-bottom:15px}",""])},1572:function(e,t,n){"use strict";n.r(t);var c,o,r=n(672),l=n(673),d=n(1571),f=n(674),h=n(1570),m=n(675),v=n.n(m),y={type:v.a.AUTO,parent:"game_container",debug:!0,width:2048,height:2048,scene:null},j=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"preload",value:function(){this.load.json("map","map.json"),this.load.image("mine","mine.png")}},{key:"create",value:function(){var data=this.cache.json.get("map"),e=data.tilewidth,t=data.tileheight;c=e/2,o=t/2;for(var n=data.layers[0].data,r=data.layers[0].width,l=data.layers[0].height,d=r*c,f=l*o,i=0,h=0;h<l;h++)for(var m=0;m<r;m++){var v=n[i]-1,y=(m-h)*c,j=(m+h)*o;this.add.image(d+y,f+j,"mine",v);i++}this.cameras.main.setZoom(.4)}},{key:"update",value:function(time,e){}}]),t}(v.a.Scene),w=function(e){function t(){return Object(r.a)(this,t),y.scene=new j,Object(d.a)(this,Object(f.a)(t).call(this,y))}return Object(h.a)(t,e),t}(v.a.Game),x={data:function(){return{game:null}},mounted:function(){this.game=new w}},k=(n(1564),n(23)),O={components:{Game:Object(k.a)(x,function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"game_container"}})},[],!1,null,"7edda2e1",null).exports}},_=(n(1566),Object(k.a)(O,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",[t("game")],1)])},[],!1,null,null,null));t.default=_.exports},394:function(e,t,n){var content=n(1565);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("61278010",content,!0,{sourceMap:!1})},395:function(e,t,n){var content=n(1567);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("4270b25c",content,!0,{sourceMap:!1})}}]);