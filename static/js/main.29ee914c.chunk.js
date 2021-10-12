(this["webpackJsonpcavea-systems-panel"]=this["webpackJsonpcavea-systems-panel"]||[]).push([[0],{193:function(t,e,a){},349:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a(69),i=a.n(s),n=(a(193),a(26)),c=a(30),o=a(13),l=a(19),d=a(20),u=a(17),p=a(21),h=a(23),x=a(167),b=a.n(x),j=a(1);var g=function(){return Object(j.jsx)("div",{className:"h-40 flex justify-center items-center",children:Object(j.jsx)(b.a,{type:"pacman",size:"custom",active:!0})})},m=a(22),f=a.n(m),O=function(t){return Object(j.jsxs)("p",{className:"text-left text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:[t.text,": ",t.data]})},v=6e4,y="https://api-test-php.cavea.io",k=120,N=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:!1},r.getAverage=r.getAverage.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getAverage(),this.updateMetric=setInterval(this.getAverage,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getAverage",value:function(){var t,e=this,a="average";this.type.includes("_count")&&(a="aph"),t="".concat(y,"/api/logs/import/").concat(a),f.a.get("".concat(t),{params:{platform:this.platform,type:this.type}}).then((function(t){var a=t.data.avg;e.setState({data:a,loading:!1,error:!1})})).catch((function(){return e.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsx)(O,{data:this.state.data,text:this.props.text})}}]),a}(r.Component);var _=function(t){var e=Object(r.useState)(Object(c.a)(t.data)),a=Object(o.a)(e,1)[0];return Object(j.jsx)(j.Fragment,{children:a.map((function(e,a){return Object(j.jsx)(N,{platform:t.platform,type:e.type,text:e.text},"average-"+a)}))})},I=a(350),D=a(351),S=a(93),w=a(94),A=a(79),L=a(181),M=a(57),F=a.n(M);var T=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getTotalImports=r.getTotalImports.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getTotalImports(),this.updateMetric=setInterval(this.getTotalImports,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getTotalImports",value:function(){var t=this;f.a.get("".concat(y,"/api/logs/import/count_by_date"),{params:{platform:this.platform,type:this.type}}).then((function(e){var a=function(t){var e,a=[],r={},s=new Date,i=function(t){return F()(t).format("YYYY-MM-DD")};for(t.map((function(t){return r[t.date]=t.count})),e=30;e>0;--e)a.push({date:i(s),count:r[i(s)]||0}),s.setDate(s.getDate()-1);return a.reverse()}(e.data).map((function(t){return{x:F()(t.date).format("YYYY-MM-DD"),y:parseInt(t.count)}}));t.setState({data:a,loading:!1,error:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsx)(I.a,{width:"100%",height:k,children:Object(j.jsxs)(D.a,{data:this.state.data,children:[Object(j.jsx)(S.a,{dataKey:"x",stroke:"#222",tick:!1}),Object(j.jsx)(w.a,{dataKey:"y",stroke:"#222"}),Object(j.jsx)(A.a,{}),Object(j.jsx)(L.a,{dataKey:"y",name:"Count",stroke:this.props.color,strokeWidth:5})]})})}}]),a}(r.Component),E=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).platform=r.props.platform,r.platformOverride=r.props.platformOverride||null,r.type=r.props.type,r.state={data:null,loading:!0,error:null},r.getRuntime=r.getRuntime.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getRuntime(),this.updateMetric=setInterval(this.getRuntime,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getRuntime",value:function(){var t=this;f.a.get("".concat(y,"/api/logs/import/runtime"),{params:{platform:this.platformOverride||this.platform,type:this.type}}).then((function(e){t.setState({data:e.data,loading:!1,error:!1})})).catch((function(e){return t.setState({error:e,loading:!1})}))}},{key:"philipMethod",value:function(){var t="20px";return Object(j.jsxs)("div",{className:"health_container",style:{width:"100px",height:t,position:"relative",background:"linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 25%, rgba(26,255,0,1) 100%)",display:"flex",alignItems:"center"},children:[Object(j.jsx)("div",{className:"health_bar",style:{height:t,width:"".concat(this.state.data.runtime,"%"),position:"absolute",right:0,top:0,backgroundColor:"lightgrey",zIndex:1}}),Object(j.jsxs)("p",{className:"subpixel-antialiased",style:{zIndex:2,paddingLeft:"20px",color:"rebeccapurple"},children:[this.state.data.sleep_time,"%"]})]})}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):this.philipMethod()}}]),a}(r.Component);var P=function(t){var e=Object(r.useState)(Object(c.a)(t.data)),a=Object(o.a)(e,1)[0];return Object(j.jsx)(j.Fragment,{children:a.map((function(e,a){return Object(j.jsx)(E,{platform:t.platform,type:e.type,text:e.text,platformOverride:e.platformOverride},"runtime-"+a)}))})};var C=function(t){var e=Object(r.useState)(Object(c.a)(t.graphs));return Object(o.a)(e,1)[0].map((function(e,a){return Object(j.jsxs)("div",{className:"metric grid grid-cols-9",children:[Object(j.jsxs)("div",{className:"metric-header grid grid-flow-row-dense auto-rows-min col-span-2",children:[Object(j.jsxs)("div",{className:"grid grid-flow-col items-center",children:[Object(j.jsx)("h2",{className:"text-left font-semibold text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:e.header}),Object(j.jsx)(P,{data:e.runtime,platform:t.platform})]}),Object(j.jsx)(_,{data:e.averages,platform:t.platform})]}),Object(j.jsx)("div",{className:"col-span-7 grid-flow-row-dense",children:Object(j.jsx)(T,{platform:t.platform,color:t.color,type:e.total.type,width:200,height:120})})]},e.platform+e.header+a)}))};var W=function(t){return Object(j.jsxs)("div",{id:t.platform+"-metric",className:"grid",children:[Object(j.jsx)("h2",{className:"capitalize text-left font-bold text-3xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.platform}),Object(j.jsx)(C,{graphs:t.graphs,platform:t.platform,color:t.color})]})},H=a(355),B=a(184),Y=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).boxName=r.props.boxName,r.params=r.props.params,r.state={data:null,loading:!0,error:null},r.getLogs=r.getLogs.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getLogs(),this.updateMetric=setInterval(this.getLogs,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getLogs",value:function(){var t=this;f.a.get("".concat(y,"/api/logs/ai/get_downloads"),{params:this.params}).then((function(e){t.setState({data:e.data,loading:!1,error:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsx)(I.a,{width:"100%",height:k,children:Object(j.jsxs)(H.a,{data:this.state.data,children:[Object(j.jsx)(S.a,{dataKey:"date",stroke:"#222",tick:!1}),Object(j.jsx)(w.a,{}),Object(j.jsx)(A.a,{}),Object(j.jsx)(B.a,{dataKey:"aibox1",name:"aibox1",stackId:"a",fill:this.props.colors}),Object(j.jsx)(B.a,{dataKey:"aibox2",name:"aibox2",stackId:"a",fill:this.props.colors}),Object(j.jsx)(B.a,{dataKey:"aibox3",name:"aibox3",stackId:"a",fill:this.props.colors}),Object(j.jsx)(B.a,{dataKey:"aibox4",name:"aibox4",stackId:"a",fill:this.props.colors})]})})}}]),a}(r.Component);var U=function(t){var e=Object(r.useState)(Object(c.a)(t.graphs));return Object(o.a)(e,1)[0].map((function(t,e){return Object(j.jsxs)("div",{className:"metric grid col-span-full",children:[Object(j.jsx)("div",{className:"metric-header grid grid-flow-row auto-rows-max",children:Object(j.jsx)("h2",{className:"capitalize text-left font-bold text-xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.subTitle})}),Object(j.jsx)("div",{className:"col-span-7",children:Object(j.jsx)(Y,Object(n.a)({},t))})]},t.subTitle+"-"+e)}))},K=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).aibox_id=r.props.params.aibox_id,r.state={data:null,loading:!0,error:null},r.getLatestLog=r.getLatestLog.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getLatestLog(),this.updateMetric=setInterval(this.getLatestLog,1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getLatestLog",value:function(){var t=this;f.a.get("".concat(y,"/api/logs/ai/latest_log"),{params:{aibox_id:this.aibox_id}}).then((function(e){t.setState({data:e.data||"0",loading:!1,error:!1})})).catch((function(e){return t.setState({error:e,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsx)("code",{children:Object(j.jsxs)("p",{children:[this.state.data.activity," / ",this.state.data.sub_activity," / ",this.state.data.timestamp]})})}}]),a}(r.Component);var z=function(t){var e=Object(r.useState)(Object(c.a)(t.text));return Object(o.a)(e,1)[0].map((function(t,e){return Object(j.jsxs)("div",{className:"metric grid grid-cols-10",children:[Object(j.jsx)("div",{className:"metric-header grid grid-flow-row auto-rows-min col-span-2",children:Object(j.jsx)("h2",{className:"text-left font-semibold text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:t.subTitle})}),Object(j.jsx)("div",{className:"col-span-8 gap-y-2 justify-self-center",children:Object(j.jsx)(K,Object(n.a)({},t))})]},t.subTitle+"-"+e)}))},q=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).aibox_id=r.props.params.aibox_id,r.state={data:null,loading:!0,error:null},r.getDownloadFinished=r.getDownloadFinished.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getDownloadFinished(),this.updateMetric=setInterval(this.getDownloadFinished,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getDownloadFinished",value:function(){var t=this;f.a.get("https://spi.cavea.io/ai/que/count?filter=%7B%22state%22:%20%22download-finished%22,%22aibox_id%22:%22".concat(this.aibox_id,"%22%7D&limit=9999999")).then((function(e){t.setState({data:e.data||"0",loading:!1,error:!1})})).catch((function(e){return t.setState({error:e,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsxs)("code",{className:"text-center text-gray-900 dark:text-gray-200 flex-col content-end subpixel-antialiased",children:[Object(j.jsx)("p",{children:" Dl-finished:"})," ",Object(j.jsxs)("p",{children:[" ",this.state.data," "]})]})}}]),a}(r.Component),R=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).aibox_id=r.props.params.aibox_id,r.state={data:null,loading:!0,error:null},r.getDownloadStarted=r.getDownloadStarted.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getDownloadStarted(),this.updateMetric=setInterval(this.getDownloadStarted,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getDownloadStarted",value:function(){var t=this;f.a.get("https://spi.cavea.io/ai/que/count?filter=%7B%22state%22:%20%22download-started%22,%22aibox_id%22:%22".concat(this.aibox_id,"%22%7D&limit=9999999")).then((function(e){t.setState({data:e.data||"0",loading:!1,error:!1})})).catch((function(e){return t.setState({error:e,loading:!1})}))}},{key:"activeItems",value:function(){var t=this.state.data;if(t>8)return{backgroundColor:"#F50010",color:"white",fontWeight:900}}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsxs)("code",{className:"text-center text-gray-900 dark:text-gray-200 flex-col content-end subpixel-antialiased",children:[Object(j.jsx)("p",{children:" Dl-started:"})," ",Object(j.jsxs)("p",{style:this.activeItems(),children:[" ",this.state.data," "]})]})}}]),a}(r.Component),G=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).aibox_id=r.props.params.aibox_id,r.state={data:null,loading:!0,error:null},r.max="",r.getAIStartedPerBox=r.getAIStartedPerBox.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getAIStartedPerBox(),this.updateMetric=setInterval(this.getAIStartedPerBox,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getAIStartedPerBox",value:function(){var t=this;f.a.get("https://spi.cavea.io/ai/que/count?filter=%7B%22state%22:%20%22ai-started%22,%22aibox_id%22:%22".concat(this.aibox_id,"%22%7D&limit=9999999")).then((function(e){t.setState({data:e.data||"0",loading:!1,error:!1})})).catch((function(e){return t.setState({error:e,loading:!1})}))}},{key:"activeItems",value:function(t){var e=121213;switch(t){case"aibox1":e=5;break;case"aibox2":case"aibox3":e=3;break;case"aibox4":e=2;break;default:e=0}var a=this.state.data;if(a>e)return{backgroundColor:"#F50010",color:"white",fontWeight:900}}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsxs)("code",{className:"text-center text-gray-900 dark:text-gray-200 flex-col content-end subpixel-antialiased",children:[Object(j.jsx)("p",{children:" AI-started:"})," ",Object(j.jsxs)("p",{style:this.activeItems(this.aibox_id),children:[" ",this.state.data," "]})]})}}]),a}(r.Component);var X=function(t){var e=Object(r.useState)(Object(c.a)(t.text));return Object(o.a)(e,1)[0].map((function(t,e){return Object(j.jsxs)("div",{className:"metric grid grid-cols-10",children:[Object(j.jsx)("div",{className:"metric-header grid grid-flow-row auto-rows-min col-span-2",children:Object(j.jsx)("h2",{className:"text-left font-semibold text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"Status"})}),Object(j.jsxs)("div",{className:"col-span-8 gap-y-2 grid grid-cols-3 grid-flow-col justify-center content-end",children:[Object(j.jsx)(R,Object(n.a)({},t)),Object(j.jsx)(q,Object(n.a)({},t)),Object(j.jsx)(G,Object(n.a)({},t))]})]},t.subTitle+"-"+e)}))};function J(t){if(t.graphs.stacked.detections)return Object(j.jsx)(U,{graphs:t.graphs.stacked.detections})}function V(t){if(t.text)return Object(j.jsx)(z,{text:t.text})}function Q(t){if(t.text)return Object(j.jsx)(X,{text:t.text})}var Z=function(t){return Object(j.jsxs)("div",{id:t.boxName+"-metric",className:"grid gap-y-1 m-2",children:[Object(j.jsx)("div",{className:"grid grid-cols-1",children:J(t)}),Object(j.jsx)("h2",{className:"capitalize text-left font-bold text-3xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.boxName}),Object(j.jsx)("div",{className:"grid",children:Q(t)}),Object(j.jsx)("div",{className:"grid",children:V(t)})]})},$=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).boxName=r.props.boxName,r.params=r.props.params,r.state={data:null,loading:!0,error:null},r.getLogs=r.getLogs.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getLogs(),this.updateMetric=setInterval(this.getLogs,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getLogs",value:function(){var t=this;f.a.get("".concat(y,"/api/logs/ai/get_image_video"),{params:this.params}).then((function(e){var a=e.data,r=a.map((function(t){return{x:F()(t.date).format("YYYY-MM-DD"),y:parseInt(t.count)}}));console.log(a),t.setState({data:r,loading:!1,error:!1})})).catch((function(){return t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsx)(I.a,{width:"100%",height:k,children:Object(j.jsxs)(D.a,{data:this.state.data,children:[Object(j.jsx)(S.a,{dataKey:"x",stroke:"#222",tick:!1}),Object(j.jsx)(w.a,{dataKey:"y",stroke:"#222"}),Object(j.jsx)(A.a,{}),Object(j.jsx)(L.a,{dataKey:"y",name:"count",stroke:this.props.color,strokeWidth:5})]})})}}]),a}(r.Component);var tt=function(t){var e=Object(r.useState)(Object(c.a)(t.graphs));return Object(o.a)(e,1)[0].map((function(t,e){return Object(j.jsxs)("div",{className:"metric grid col-span-full",children:[Object(j.jsx)("div",{className:"metric-header grid grid-flow-row auto-rows-max",children:Object(j.jsx)("h2",{className:"capitalize text-left font-bold text-xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.subTitle})}),Object(j.jsx)("div",{className:"col-span-7",children:Object(j.jsx)($,Object(n.a)({},t))})]},t.subTitle+"-"+e)}))};function et(t){if(t.graphs.stacked.detections)return Object(j.jsx)(tt,{graphs:t.graphs.stacked.detections})}var at=function(t){return Object(j.jsxs)("div",{id:t.boxName+"-metric",className:"grid gap-y-1 m-2",children:[Object(j.jsx)("div",{className:"grid grid-cols-1",children:et(t)}),Object(j.jsx)("h2",{className:"capitalize text-left font-bold text-3xl text-gray-900 dark:text-gray-200 subpixel-antialiased",children:t.boxName})]})},rt=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).state={data:null,loading:!0,error:null},r.getAiStarted=r.getAiStarted.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getAiStarted(),this.updateMetric=setInterval(this.getAiStarted,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getAiStarted",value:function(){var t=this;f.a.get("https://spi.cavea.io/ai/que/count?filter={%22state%22:%20%22ai-started%22}").then((function(e){t.setState({data:e.data,loading:!1,error:!1})})).catch((function(e){return t.setState({error:e,loading:!1})}))}},{key:"activeItems",value:function(){var t=this.state.data;return t>13&&t<=17?{backgroundColor:"#EEDD33",fontWeight:900}:t>17?{backgroundColor:"#F50010",color:"white",fontWeight:900}:void 0}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsxs)("h1",{style:this.activeItems(),className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:["Num. Active Items: ",this.state.data]})}}]),a}(r.Component),st=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).state={data:null,loading:!0,error:null},r.getDownloadPending=r.getDownloadPending.bind(Object(u.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getDownloadPending(),this.updateMetric=setInterval(this.getDownloadPending,v)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateMetric)}},{key:"getDownloadPending",value:function(){var t=this;f.a.get("https://spi.cavea.io/ai/que/count?filter={%22state%22:%20%22download-pending%22}&limit=9999999").then((function(e){t.setState({data:e.data||"0",loading:!1,error:!1})})).catch((function(e){return t.setState({error:e,loading:!1})}))}},{key:"render",value:function(){return!this.state.data||this.state.error||this.state.loading?this.state.error?Object(j.jsx)("p",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:"An Error Occurred!"}):Object(j.jsx)(g,{}):Object(j.jsxs)("h1",{className:"text-center text-gray-900 dark:text-gray-200 text-xl subpixel-antialiased",children:["Num. Pending Items: ",this.state.data]})}}]),a}(r.Component),it=[{platform:"facebook",color:"#4267B2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[{platformOverride:"content-import",type:"sleep_timer",text:"Idle% = x / 1,44"}]},{header:"Live",total:{type:"streams_count"},averages:[{type:"process_stream_handle",text:"H/h"},{type:"streams_count",text:"S/h"}],runtime:[]}]},{platform:"instagram",color:"#C13584",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[{platformOverride:"content-import",type:"sleep_timer",text:"Idle% = x / 1,44"}]},{header:"Stories",total:{type:"story_count"},averages:[{type:"process_story_handle",text:"H/h"},{type:"story_count",text:"S/h"}],runtime:[]}]},{platform:"twitch",color:"#6441a5",graphs:[{header:"Clips",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[{type:"sleep_timer",text:"Idle% = x / 1,44"}]},{header:"Live",total:{type:"streams_count"},averages:[{type:"process_stream_handle",text:"H/h"},{type:"streams_count",text:"S/h"}],runtime:[]}]},{platform:"twitter",color:"#1DA1F2",graphs:[{header:"Posts",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[{type:"sleep_timer",text:"Idle% = x / 1,44"}]},{header:"Metrics",total:{type:"post_metric_count"},averages:[{type:"process_metric_handle",text:"H/h"},{type:"post_metric_count",text:"P/h"}],runtime:[]}]},{platform:"youtube",color:"#FF0000",graphs:[{header:"Videos",total:{type:"post_count"},averages:[{type:"process_handle",text:"H/h"},{type:"post_count",text:"P/h"}],runtime:[{type:"sleep_timer",text:"Idle% = x / 1,44"}]},{header:"Live",total:{type:"streams_count"},averages:[{type:"process_stream_handle",text:"H/h"},{type:"streams_count",text:"S/h"}],runtime:[]}]},{platform:"trovo",color:"#32c27c",graphs:[{header:"Live",total:{type:"streams_count"},averages:[{type:"process_stream_handle",text:"H/h"},{type:"streams_count",text:"S/h"}],runtime:[]}]},{platform:"Tiktok",color:"#fe2c55",graphs:[{header:"Live",total:{type:"streams_count"},averages:[{type:"process_stream_handle",text:"H/h"},{type:"streams_count",text:"S/h"}],runtime:[]}]}].map((function(t){return Object(r.createElement)(W,Object(n.a)(Object(n.a)({},t),{},{key:t.platform}))})),nt=[{boxName:"",graphs:{stacked:{detections:[{subTitle:"Download Failed",colors:"#fc0303",params:{activity:"DOWNLOADING",sub_activity:"FAILED"}},{subTitle:"Download Finished",colors:"#00bfff",params:{activity:"DOWNLOADING",sub_activity:"FINISHED"}},{subTitle:"AI Failed",colors:"#d9de00",params:{activity:"ANALYSIS",sub_activity:"FAILED"}},{subTitle:"AI Detections Not Found",colors:"#218200",params:{activity:"ANALYSIS",sub_activity:"FINISHED_NOTFOUND"}},{subTitle:"AI Detections Found",colors:"#40ff00",params:{activity:"ANALYSIS",sub_activity:"FINISHED_FOUND"}}]}}},{boxName:"AIBOX1",graphs:{stacked:{detections:[]},bar:[]},text:[{subTitle:"Latest Log",params:{aibox_id:"aibox1"}}]},{boxName:"AIBOX2",graphs:{stacked:{detections:[]},bar:[]},text:[{subTitle:"Latest Log",params:{aibox_id:"aibox2"}}]},{boxName:"AIBOX3",graphs:{stacked:{detections:[]},bar:[]},text:[{subTitle:"Latest Log",params:{aibox_id:"aibox3"}}]},{boxName:"AIBOX4",graphs:{stacked:{detections:[]},bar:[]},text:[{subTitle:"Latest Log",params:{aibox_id:"aibox4"}}]}].map((function(t){return Object(r.createElement)(Z,Object(n.a)(Object(n.a)({},t),{},{key:t.boxName}))})),ct=[{boxName:"",graphs:{stacked:{detections:[{subTitle:"Videos",color:"#065535",params:{activity:"DOWNLOADING",sub_activity:"FINISHED",source_type:"video"}},{subTitle:"Picture",color:"#407294",params:{activity:"DOWNLOADING",sub_activity:"FINISHED",source_type:"picture"}}]}}}].map((function(t){return Object(r.createElement)(at,Object(n.a)(Object(n.a)({},t),{},{key:t.boxName}))})),ot=function(){return Object(j.jsxs)("div",{className:"p-5 mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-x-5",children:[Object(j.jsx)("div",{className:"import-logs",children:it}),Object(j.jsxs)("div",{className:"ai-logs",children:[Object(j.jsxs)("div",{className:"grid grid-cols-2 grid-flow-col",children:[Object(j.jsx)(st,{}),Object(j.jsx)(rt,{})]}),nt,ct]})]})},lt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,357)).then((function(e){var a=e.getCLS,r=e.getFID,s=e.getFCP,i=e.getLCP,n=e.getTTFB;a(t),r(t),s(t),i(t),n(t)}))};i.a.render(Object(j.jsx)(ot,{}),document.getElementById("root")),lt()}},[[349,1,2]]]);
//# sourceMappingURL=main.29ee914c.chunk.js.map