(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(10),a=n.n(i),r=n(2),s=n(8),l=n(3),c=n(4),o=n(6),h=n(5),d=n(1),u=n.n(d),m=(n(15),n(9)),p=n.n(m),g=(n(16),n(0)),b=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={scrollWidth:0},t.gap=10,t.gapWidth=t.gap*(t.props.images.length-1),t.handleSlide=function(e){var n=e.currentTarget.innerHTML,i=t.props,a=i.itemWidth,r=i.step,s=i.infinite,l=r*a+(r-1)*t.gap,c=t.getMaxScrollWidth();"Next"===n&&t.nextSlideHandler(l,c,s),"Prev"===n&&t.prevSlideHandler(l,c,s)},t.nextSlideHandler=function(e,n,i){var a=t.state.scrollWidth;if(a+e<n)t.setState((function(n){return{scrollWidth:n.scrollWidth+e+t.gap}}));else{if(i&&a===n)return void t.setState({scrollWidth:0});t.setState({scrollWidth:n})}},t.prevSlideHandler=function(e,n,i){var a=t.state.scrollWidth;if(a-e>0)t.setState((function(n){return{scrollWidth:n.scrollWidth-e-t.gap}}));else{if(i&&0===a)return void t.setState({scrollWidth:n});t.setState({scrollWidth:0})}},t.getMaxScrollWidth=function(){var e=t.props,n=e.images,i=e.itemWidth,a=e.frameSize;return n.length*i+t.gapWidth-(i*a+(a-1)*t.gap)},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.itemWidth,i=t.animationDuration,a=t.infinite,r=t.frameSize,s=this.state.scrollWidth,l=e.length*n+this.gapWidth,c=r-1<0?0:(r-1)*this.gap,o=n*r+c,h="transform ".concat(i/1e3,"s ease"),d="translate(-".concat(s,"px, 0)"),u=s===this.getMaxScrollWidth(),m=p()({"Carousel__button--disabled":0===s&&!a}),b=p()({"Carousel__button--disabled":u&&!a});return Object(g.jsxs)("div",{className:"Carousel",style:{width:o},children:[Object(g.jsx)("ul",{className:"Carousel__list",style:{transition:h,width:l,gap:this.gap,transform:d},children:e.map((function(t,e){return Object(g.jsx)("li",{children:Object(g.jsx)("img",{src:t,alt:"".concat(e+1),width:n})},t)}))}),Object(g.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--prev ".concat(m),onClick:this.handleSlide,children:"Prev"}),Object(g.jsx)("button",{type:"button","data-cy":"next",className:"Carousel__button Carousel__button--next ".concat(b),onClick:this.handleSlide,children:"Next"})]})}}]),n}(d.Component),j=b,f=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},t.handleChange=function(e){var n=e.target.name,i=+e.target.value;t.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(r.a)({},n,i))}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,r=t.animationDuration,s=t.infinite;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{className:"title","data-cy":"title",children:"Carousel with ".concat(e.length," images")}),Object(g.jsx)(j,{images:e,step:n,frameSize:i,itemWidth:a,animationDuration:r,infinite:s}),Object(g.jsxs)("form",{action:"",className:"inputs",children:[Object(g.jsx)("label",{htmlFor:"itemId",children:"Item width:"}),Object(g.jsx)("input",{type:"number",name:"itemWidth",id:"itemId",value:a,onChange:this.handleChange,min:"0"}),Object(g.jsx)("label",{htmlFor:"frameId",children:"Frame size:"}),Object(g.jsx)("input",{type:"number",name:"frameSize",id:"frameId",value:i,onChange:this.handleChange,min:"0"}),Object(g.jsx)("label",{htmlFor:"stepId",children:"Step:"}),Object(g.jsx)("input",{type:"number",name:"step",id:"stepId",value:n,onChange:this.handleChange,min:"0"}),Object(g.jsx)("label",{htmlFor:"animationDuration",children:"Animation duration:"}),Object(g.jsx)("input",{type:"number",name:"animationDuration",id:"animationDuration",value:r,onChange:this.handleChange,min:"0"})]})]})}}]),n}(u.a.Component),v=f;a.a.render(Object(g.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8bd9555e.chunk.js.map