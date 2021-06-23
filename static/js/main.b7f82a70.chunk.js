(this["webpackJsonpcavea-systems-panel"]=this["webpackJsonpcavea-systems-panel"]||[]).push([[0],{193:function(t,e,a){},349:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a(69),n=a.n(s),o=(a(193),a(35)),c=a(62),i=a(17),l=a(39),p=a(40),u=a(29),d=a(41),h=a(43),m=a(166),x=a.n(m),j=a(2);var g=function(){return Object(j.jsx)("div",{className:"h-40 flex justify-center items-center",children:Object(j.jsx)(x.a,{type:"pacman",size:"custom",active:!0})})},b=a(42),y=a.n(b),f=function(t){return Object(j.jsxs)("p",{className:"text-left text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:[t.text,": ",t.data]})},v=6e4,O="https://cavea-test-api-php-review-develop-3zknud.cavea.dev",_=120,k=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:!1},r.getAverage=r.getAverage.bind(Object(u.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getAverage(),this.updateMetric=setInterval(this.getAverage,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getAverage",value:function(){var t,e=this,a="average";this.type.includes("_count")&&(a="aph"),t="".concat(O,"/api/logs/import/").concat(a),y.a.get("".concat(t),{params:{platform:this.platform,type:this.type}}).then((function(t){var a=t.data.avg;e.setState({data:a,loading:!1,error:!1})})).catch((function(){return e.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsx)(f,{data:this.state.data,text:this.props.text})}}]),a}(r.Component);var N=function(t){var e=Object(r.useState)(Object(c.a)(t.data)),a=Object(i.a)(e,1)[0];return Object(j.jsx)(j.Fragment,{children:a.map((function(e,a){return Object(j.jsx)(k,{platform:t.platform,type:e.type,text:e.text},"average-"+a)}))})},I=a(350),M=a(351),w=a(93),S=a(94),D=a(79),A=a(180),C=a(56),Y=a.n(C);function L(t){var e,a=[],r={},s=new Date,n=function(t){return Y()(t).format("YYYY-MM-DD")};for(t.map((function(t){return r[t.date]=t.count})),e=30;e>0;--e)a.push({date:n(s),count:r[n(s)]||0}),s.setDate(s.getDate()-1);return a.reverse()}var P=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getTotalImports=r.getTotalImports.bind(Object(u.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getTotalImports(),this.updateMetric=setInterval(this.getTotalImports,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getTotalImports",value:function(){var t=this;y.a.get("".concat(O,"/api/logs/import/count_by_date"),{params:{platform:this.platform,type:this.type}}).then((function(e){var a=L(e.data).map((function(t){return{x:Y()(t.date).format("YYYY-MM-DD"),y:parseInt(t.count)}}));t.setState({data:a,loading:!1,error:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsx)(I.a,{width:"100%",height:_,children:Object(j.jsxs)(M.a,{data:this.state.data,children:[Object(j.jsx)(w.a,{dataKey:"x",stroke:"#222",tick:!1}),Object(j.jsx)(S.a,{dataKey:"y",stroke:"#222"}),Object(j.jsx)(D.a,{}),Object(j.jsx)(A.a,{dataKey:"y",name:"Count",stroke:this.props.color,strokeWidth:5})]})})}}]),a}(r.Component),F=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getRuntime=r.getRuntime.bind(Object(u.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getRuntime(),this.updateMetric=setInterval(this.getRuntime,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getRuntime",value:function(){var t=this;y.a.get("https://cavea-test-api-php-review-develop-3zknud.cavea.dev/api/logs/import/runtime",{params:{platform:this.platform,type:this.type}}).then((function(e){t.setState({data:e.data,loading:!1,error:!1})})).catch((function(e){return t.setState({error:e,loading:!1})}))}},{key:"philipMethod",value:function(){var t="50px";return Object(j.jsxs)("div",{className:"health_container",style:{width:"100px",height:t,position:"relative",background:"linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 25%, rgba(26,255,0,1) 100%)",display:"flex",alignItems:"center"},children:[Object(j.jsx)("div",{className:"health_bar",style:{height:t,width:"".concat(this.state.data.runtime,"%"),position:"absolute",right:0,top:0,backgroundColor:"lightgrey",zIndex:1}}),Object(j.jsxs)("p",{className:"subpixel-antialiased",style:{zIndex:2,paddingLeft:"20px",color:"rebeccapurple"},children:[this.state.data.sleep_time,"%"]})]})}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):this.philipMethod()}}]),a}(r.Component);var H=function(t){var e=Object(r.useState)(Object(c.a)(t.data)),a=Object(i.a)(e,1)[0];return Object(j.jsx)(j.Fragment,{children:a.map((function(e,a){return Object(j.jsx)(F,{platform:t.platform,type:e.type,text:e.text},"runtime-"+a)}))})};var T=function(t){var e=Object(r.useState)(Object(c.a)(t.graphs));return Object(i.a)(e,1)[0].map((function(e,a){return Object(j.jsxs)("div",{className:"metric grid grid-cols-9",children:[Object(j.jsxs)("div",{className:"metric-header grid grid-flow-row auto-rows-min col-span-2",children:[Object(j.jsx)("h2",{className:"text-left font-semibold text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:e.header}),Object(j.jsx)(N,{data:e.averages,platform:t.platform}),Object(j.jsx)(H,{data:e.runtime,platform:t.platform})]}),Object(j.jsx)("div",{className:"col-span-7",children:Object(j.jsx)(P,{platform:t.platform,color:t.color,type:e.total.type,width:200,height:120})})]},e.platform+e.header+a)}))};var z=function(t){return Object(j.jsxs)("div",{id:t.platform+"-metric",className:"grid",children:[Object(j.jsx)("h2",{className:"capitalize text-left font-bold text-3xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.platform}),Object(j.jsx)(T,{graphs:t.graphs,platform:t.platform,color:t.color})]})},E=a(355),K=a(183),R=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).boxName=r.props.boxName,r.params=r.props.params,r.state={data:null,loading:!0,error:null},r.getLogs=r.getLogs.bind(Object(u.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getLogs(),this.updateMetric=setInterval(this.getLogs,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getLogs",value:function(){var t=this;y.a.get("".concat(O,"/api/logs/ai/count_by_date"),{params:this.params}).then((function(e){console.log(e.data);var a=L(e.data).map((function(t){return{x:Y()(t.date).format("YYYY-MM-DD"),y:parseInt(t.count)}}));t.setState({data:a,loading:!1,error:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsx)(I.a,{width:"100%",height:_,children:Object(j.jsxs)(E.a,{data:this.state.data,children:[Object(j.jsx)(w.a,{dataKey:"x",stroke:"#222",tick:!1}),Object(j.jsx)(S.a,{dataKey:"y",stroke:"#222"}),Object(j.jsx)(D.a,{}),Object(j.jsx)(K.a,{dataKey:"y",name:"Count",fill:this.props.color})]})})}}]),a}(r.Component);var B=function(t){return console.log(t),Object(j.jsxs)("div",{className:"metric grid grid-cols-9",children:[Object(j.jsx)("div",{className:"metric-header grid grid-flow-row auto-rows-min col-span-2",children:Object(j.jsx)("h2",{className:"text-left font-semibold text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:t.subTitle})}),Object(j.jsx)("div",{className:"col-span-7",children:Object(j.jsx)(R,Object(o.a)({},t))})]})};var W=function(t){return Object(j.jsxs)("div",{id:t.boxName+"-metric",className:"grid gap-y-3",children:[Object(j.jsx)("h2",{className:"capitalize text-left font-bold text-3xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.boxName}),Object(j.jsx)(B,Object(o.a)({},t))]})},U=[{platform:"facebook",color:"#4267B2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[]},{header:"Live",total:{type:"streams_count"},averages:[{type:"process_stream_handle",text:"H/h"},{type:"streams_count",text:"S/h"}],runtime:[]}]},{platform:"instagram",color:"#C13584",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[]},{header:"Stories",total:{type:"story_count"},averages:[{type:"process_story_handle",text:"H/h"},{type:"story_count",text:"S/h"}],runtime:[]}]},{platform:"twitch",color:"#6441a5",graphs:[{header:"Clips",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[]},{header:"Live",total:{type:"streams_count"},averages:[{type:"process_stream_handle",text:"H/h"},{type:"streams_count",text:"S/h"}],runtime:[]}]},{platform:"twitter",color:"#1DA1F2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[]},{header:"Metrics",total:{type:"post_metric_count"},averages:[{type:"process_metric_handle",text:"H/h"},{type:"post_metric_count",text:"P/h"}],runtime:[]}]},{platform:"youtube",color:"#FF0000",graphs:[{header:"Videos",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[{type:"sleep_timer",text:"Idle% = x / 1,44"}]},{header:"Live",total:{type:"streams_count"},averages:[{type:"process_stream_handle",text:"H/h"},{type:"streams_count",text:"S/h"}],runtime:[]}]}].map((function(t,e){return Object(r.createElement)(z,Object(o.a)(Object(o.a)({},t),{},{key:t.platform}))})),J=[{boxName:"AIBOX1",subTitle:"AI Runs",color:"#F30482",params:{aibox_id:"AIBOX1"}}].map((function(t,e){return Object(r.createElement)(W,Object(o.a)(Object(o.a)({},t),{},{key:t.platform}))})),X=function(){return Object(j.jsxs)("div",{className:"p-5 mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-x-5",children:[Object(j.jsx)("div",{className:"import-logs",children:U}),Object(j.jsx)("div",{className:"ai-logs",children:J})]})},V=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,357)).then((function(e){var a=e.getCLS,r=e.getFID,s=e.getFCP,n=e.getLCP,o=e.getTTFB;a(t),r(t),s(t),n(t),o(t)}))};n.a.render(Object(j.jsx)(X,{}),document.getElementById("root")),V()}},[[349,1,2]]]);
//# sourceMappingURL=main.b7f82a70.chunk.js.map