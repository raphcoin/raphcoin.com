(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2045:function(e,t,n){"use strict";var o=n(531);n.n(o).a},2046:function(e,t,n){(e.exports=n(46)(!1)).push([e.i,"body[data-v-33884cde]{background:#eee}#game_container[data-v-33884cde]{margin:0;padding:0;min-height:100vh;min-width:100vw}",""])},2448:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(315),c=n(361),h=n(316),l=n(359),d=n(435),f=n.n(d),m=n(872),y=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,{key:"BootScene"}))}return Object(l.a)(t,e),Object(m.a)(t,[{key:"preload",value:function(){var e=this,t=this.cameras.main.width,n=this.cameras.main.height,o=this.add.graphics(),r=this.add.graphics();r.fillStyle(2236962,.8),r.fillRect(t/2-160,n/2-30,320,50);var c=this.make.text({x:t/2,y:n/2-50,text:"Loading...",style:{font:"20px monospace",fill:"#ffffff"}});c.setOrigin(.5,.5);var h=this.make.text({x:t/2,y:n/2-5,text:"0%",style:{font:"18px monospace",fill:"#ffffff"}});h.setOrigin(.5,.5);var l=this.make.text({x:t/2,y:n/2+50,text:"",style:{font:"18px monospace",fill:"#ffffff"}});l.setOrigin(.5,.5),this.load.on("progress",function(e){h.setText("".concat(100*e,"%")),o.clear(),o.fillStyle(16777215,1),o.fillRect(t/2-150,n/2-20,300*e,30)}),this.load.on("fileprogress",function(e){l.setText("Loading asset: "+e.key)}),this.load.on("complete",function(){o.destroy(),r.destroy(),c.destroy(),h.destroy(),l.destroy(),e.scene.start("MainScene")}),this.load.json("map","/assets/map.json"),this.load.image("mine","/assets/mine.png")}}]),t}(f.a.Scene),w=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,{key:"MainScene"}))}return Object(l.a)(t,e),Object(m.a)(t,[{key:"create",value:function(){this.input.keyboard.on("keydown",this.onKeydown.bind(this)),this.addTiles(),this.cameras.main.setPosition(0,0),this.cameras.main.setBounds(window.innerWidth/-2,0,window.innerWidth,window.innerHeight),this.cameras.main.setZoom(.2),this.cameras.main.setBackgroundColor("#eee")}},{key:"addTiles",value:function(){for(var data=this.cache.json.get("map"),e=data.tilewidth/2,t=data.tileheight/2,n=data.layers[0].data,o=data.layers[0].width,r=data.layers[0].height,c=o*e,h=r*t,i=0,l=0;l<r;l++)for(var d=0;d<o;d++,i++){var f=n[i],m=(d-l)*e,y=(d+l)*t;this.add.image(c+m,h+y-600,"mine",f).depth=h+y}}},{key:"onKeydown",value:function(e){var t=this.cameras.main;switch(e.key){case"ArrowLeft":t.x-=50;break;case"ArrowRight":t.x+=50;break;case"ArrowUp":t.y-=50;break;case"ArrowDown":t.y+=50}t.setPosition(t.x,t.y)}}]),t}(f.a.Scene),v={type:f.a.CANVAS,parent:"game_container",width:window.innerWidth,height:window.innerHeight,scene:[y,w]},x=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,v))}return Object(l.a)(t,e),t}(f.a.Game),k=o.a.extend({data:function(){return{}},mounted:function(){this.game=new x}}),j=n(23),O=Object(j.a)(k,function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"game_container"}})},[],!1,null,null,null).exports,S=o.a.extend({components:{Game:O}}),_=(n(2045),Object(j.a)(S,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"game_container"},[t("game")],1)},[],!1,null,"33884cde",null));t.default=_.exports},531:function(e,t,n){var content=n(2046);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("2df3ff0a",content,!0,{sourceMap:!1})}}]);