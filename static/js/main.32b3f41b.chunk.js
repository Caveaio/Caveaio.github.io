(this["webpackJsonpcavea-systems-panel"]=this["webpackJsonpcavea-systems-panel"]||[]).push([[0],{189:function(t,e,a){},345:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a(65),s=a.n(n),o=(a(189),a(115)),c=a(57),i=a(17),l=a(49),p=a(50),u=a(36),d=a(51),h=a(58),m=a(161),g=a.n(m),x=a(6);var j=function(){return Object(x.jsx)("div",{className:"h-40 flex justify-center items-center",children:Object(x.jsx)(g.a,{type:"pacman",size:"custom",active:!0})})},y=a(52),f=a.n(y),b=function(t){return Object(x.jsxs)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:[t.text,": ",t.data]})},v=6e4,O="https://cavea-test-api-php-review-develop-3zknud.cavea.dev",_=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:!1},r.getAverage=r.getAverage.bind(Object(u.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getAverage(),this.updateMetric=setInterval(this.getAverage,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getAverage",value:function(){var t,e=this,a="average";this.type.includes("_count")&&(a="aph"),t="".concat(O,"/api/logs/import/").concat(a),f.a.get("".concat(t),{params:{platform:this.platform,from:30,type:this.type,interval:3600}}).then((function(t){var a=t.data.avg;e.setState({data:a,loading:!1,error:!1})})).catch((function(){return e.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(x.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(x.jsx)(j,{}):Object(x.jsx)(b,{data:this.state.data,text:this.props.text})}}]),a}(r.Component);var k=function(t){var e=Object(r.useState)(Object(c.a)(t.data)),a=Object(i.a)(e,1)[0];return Object(x.jsx)(x.Fragment,{children:a.map((function(e,a){return Object(x.jsx)(_,{platform:t.platform,type:e.type,text:e.text},"average-"+a)}))})},I=a(347),M=a(348),N=a(177),S=a(178),w=a(76),D=a(180),P=a(111),C=a.n(P),A=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getTotalImports=r.getTotalImports.bind(Object(u.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getTotalImports(),this.updateMetric=setInterval(this.getTotalImports,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getTotalImports",value:function(){var t=this;f.a.get("".concat(O,"/api/logs/import/total"),{params:{platform:this.platform,type:this.type,from:30}}).then((function(e){var a,r=[],n={},s=e.data,o=new Date,c=function(t){return C()(t).format("YYYY-MM-DD")};for(s.map((function(t){return n[t.date]=t.count})),a=30;a>0;--a)r.push({date:c(o),count:n[c(o)]||0}),o.setDate(o.getDate()-1);var i=r.reverse().map((function(t){return{x:C()(t.date).format("YYYY-MM-DD"),y:parseInt(t.count)}}));t.setState({data:i,loading:!1,error:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(x.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(x.jsx)(j,{}):Object(x.jsx)(I.a,{width:"100%",height:this.props.height,children:Object(x.jsxs)(M.a,{data:this.state.data,children:[Object(x.jsx)(N.a,{dataKey:"x",stroke:"#222",tick:!1}),Object(x.jsx)(S.a,{dataKey:"y",stroke:"#222"}),Object(x.jsx)(w.a,{}),Object(x.jsx)(D.a,{dataKey:"y",name:"Count",stroke:this.props.color,strokeWidth:5})]})})}}]),a}(r.Component),F=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getRuntime=r.getRuntime.bind(Object(u.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getRuntime(),this.updateMetric=setInterval(this.getRuntime,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getRuntime",value:function(){var t=this;f.a.get("https://cavea-test-api-php-review-develop-3zknud.cavea.dev/api/logs/import/runtime",{params:{platform:this.platform,type:this.type}}).then((function(e){t.setState({data:e.data,loading:!1,error:!1})})).catch((function(e){return t.setState({error:e,loading:!1})}))}},{key:"philipMethod",value:function(){var t="50px";return Object(x.jsxs)("div",{className:"health_container",style:{width:"100px",height:t,position:"relative",background:"linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 25%, rgba(26,255,0,1) 100%)",display:"flex",alignItems:"center"},children:[Object(x.jsx)("div",{className:"health_bar",style:{height:t,width:"".concat(this.state.data.runtime,"%"),position:"absolute",right:0,top:0,backgroundColor:"lightgrey",zIndex:1}}),Object(x.jsxs)("p",{className:"subpixel-antialiased",style:{zIndex:2,paddingLeft:"20px",color:"rebeccapurple"},children:[this.state.data.sleep_time,"%"]})]})}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(x.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(x.jsx)(j,{}):this.philipMethod()}}]),a}(r.Component);var H=function(t){var e=Object(r.useState)(Object(c.a)(t.data)),a=Object(i.a)(e,1)[0];return Object(x.jsx)(x.Fragment,{children:a.map((function(e,a){return Object(x.jsx)(F,{platform:t.platform,type:e.type,text:e.text},"runtime-"+a)}))})};var Y=function(t){var e=Object(r.useState)(Object(c.a)(t.graphs));return Object(i.a)(e,1)[0].map((function(e,a){return Object(x.jsxs)("div",{className:"metric grid gap-y-5",children:[Object(x.jsxs)("div",{className:"metric-header grid grid-flow-col-dense items-center",children:[Object(x.jsx)("h2",{className:"text-left font-semibold text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:e.header}),Object(x.jsx)(k,{data:e.averages,platform:t.platform}),Object(x.jsx)(H,{data:e.runtime,platform:t.platform})]}),Object(x.jsx)(A,{platform:t.platform,color:t.color,type:e.total.type,width:200,height:150})]},e.platform+e.header+a)}))};var T=function(t){return Object(x.jsxs)("div",{id:t.platform+"-metric",className:"grid gap-y-3",children:[Object(x.jsx)("h2",{className:"capitalize text-left font-bold text-3xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.platform}),Object(x.jsx)(Y,{graphs:t.graphs,platform:t.platform,color:t.color})]})},z=[{platform:"facebook",color:"#4267B2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[]},{header:"Live",total:{type:"streams_count"},averages:[{type:"process_stream_handle",text:"H/h"},{type:"streams_count",text:"S/h"}],runtime:[]}]},{platform:"instagram",color:"#C13584",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[]},{header:"Stories",total:{type:"story_count"},averages:[{type:"process_story_handle",text:"H/h"},{type:"story_count",text:"S/h"}],runtime:[]}]},{platform:"twitch",color:"#6441a5",graphs:[{header:"Clips",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[]}]},{platform:"twitter",color:"#1DA1F2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[]},{header:"Metrics",total:{type:"post_metric_count"},averages:[{type:"process_metric_handle",text:"H/h"},{type:"post_metric_count",text:"P/h"}],runtime:[]}]},{platform:"youtube",color:"#FF0000",graphs:[{header:"Videos",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[{type:"sleep_timer",text:"Idle% = x / 1,44"}]}]}].map((function(t,e){return Object(r.createElement)(T,Object(o.a)(Object(o.a)({},t),{},{key:t.platform}))})),E=function(){return Object(x.jsx)("div",{className:"p-5 mx-auto grid grid-cols-2 gap-y-5",children:Object(x.jsx)("div",{className:"import-logs",children:z})})},R=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,353)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,s=e.getLCP,o=e.getTTFB;a(t),r(t),n(t),s(t),o(t)}))};s.a.render(Object(x.jsx)(E,{}),document.getElementById("root")),R()}},[[345,1,2]]]);
//# sourceMappingURL=main.32b3f41b.chunk.js.map