(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{416:function(t,e,r){var o=r(5);o(o.S+o.F*!r(15),"Object",{defineProperties:r(246)})},417:function(t,e,r){var o=r(5),n=r(418),i=r(27),a=r(137),s=r(248);o(o.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,r,o=i(t),c=a.f,p=n(o),l={},u=0;p.length>u;)void 0!==(r=c(o,e=p[u++]))&&s(l,e,r);return l}})},418:function(t,e,r){var o=r(136),n=r(170),i=r(17),a=r(14).Reflect;t.exports=a&&a.ownKeys||function(t){var e=o.f(i(t)),r=n.f;return r?e.concat(r(t)):e}},620:function(t,e,r){"use strict";r.r(e);r(169),r(416),r(417),r(46),r(34),r(11),r(58);var o=r(1),n=r(166),i=r(175);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}var s={name:"CChartLineSimple",components:{CChartLine:n.CChartLine},props:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(r,!0).forEach(function(e){Object(o.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},n.CChartLine.props,{borderColor:{type:String,default:"rgba(255,255,255,.55)"},backgroundColor:{type:String,default:"transparent"},dataPoints:{type:Array,default:function(){return[10,22,34,46,58,70,46,23,45,78,34,12]}},label:{type:String,default:"Sales"},pointed:Boolean}),computed:{defaultDatasets:function(){return[{data:this.dataPoints,borderColor:Object(i.getColor)(this.borderColor),backgroundColor:Object(i.getColor)(this.backgroundColor),pointBackgroundColor:this.pointBackgroundColor,pointHoverBackgroundColor:Object(i.getColor)(this.borderColor),label:this.label}]},pointBackgroundColor:function(){return"transparent"===this.backgroundColor?"#fff":Object(i.getColor)(this.backgroundColor)},pointedOptions:function(){return{scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,this.dataPoints)-5,max:Math.max.apply(Math,this.dataPoints)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}},straightOptions:function(){return{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}}},defaultOptions:function(){var t=this.pointed?this.pointedOptions:this.straightOptions;return Object.assign({},t,{maintainAspectRatio:!1,legend:{display:!1}})},computedDatasets:function(){return Object(i.deepObjectsMerge)(this.defaultDatasets,this.datasets||{})},computedOptions:function(){return Object(i.deepObjectsMerge)(this.defaultOptions,this.options||{})}}},c=r(0),p=Object(c.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("CChartLine",{attrs:{datasets:this.computedDatasets,options:this.computedOptions,labels:this.labels}})},[],!1,null,null,null);e.default=p.exports}}]);