(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"Y+KY":function(e,t,a){"use strict";a.r(t),a.d(t,"ChartjsModule",(function(){return s}));var r=a("Valr"),n=a("KZaR"),o=a("DUip"),l=a("BMe/"),c=a("TYT/"),d=[{path:"",component:function(){function e(){this.options={responsive:!0,tooltips:{enabled:!1,custom:l.customTooltips}},this.lineChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"},{data:[18,48,77,9,100,27,40],label:"Series C"}],this.lineChartLabels=["January","February","March","April","May","June","July"],this.lineChartOptions={responsive:!0,tooltips:{enabled:!1,custom:l.customTooltips}},this.lineChartColours=[{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(77,83,96,0.2)",borderColor:"rgba(77,83,96,1)",pointBackgroundColor:"rgba(77,83,96,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.lineChartLegend=!0,this.lineChartType="line",this.barChartOptions={responsive:!0,tooltips:{enabled:!1,custom:l.customTooltips},scales:{yAxes:[{showLine:!1}]}},this.barChartLabels=["2006","2007","2008","2009","2010","2011","2012"],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"}],this.doughnutChartLabels=["Download Sales","In-Store Sales","Mail-Order Sales"],this.doughnutChartData=[350,450,100],this.doughnutChartType="doughnut",this.radarChartLabels=["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],this.radarChartData=[{data:[65,59,90,81,56,55,40],label:"Series A"},{data:[28,48,40,19,96,27,100],label:"Series B"}],this.radarChartType="radar",this.pieChartLabels=["Download Sales","In-Store Sales","Mail Sales"],this.pieChartData=[300,500,100],this.pieChartType="pie",this.polarAreaChartLabels=["Download Sales","In-Store Sales","Mail Sales","Telesales","Corporate Sales"],this.polarAreaChartData=[300,500,100,40,120],this.polarAreaLegend=!0,this.polarAreaChartType="polarArea"}return e.prototype.chartClicked=function(e){console.log(e)},e.prototype.chartHovered=function(e){console.log(e)},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-charts"]],decls:50,vars:28,consts:[[1,"fade-in"],["col","6"],["href","http://www.chartjs.org"],[1,"text-muted"],[1,"chart-wrapper"],["cNoZoneBaseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType","chartHover","chartClick"],["cNoZoneBaseChart","",1,"chart",3,"datasets","labels","options","legend","chartType","chartHover","chartClick"],["cNoZoneBaseChart","",1,"chart",3,"data","labels","options","chartType","chartHover","chartClick"],["cNoZoneBaseChart","",1,"chart",3,"datasets","labels","options","chartType","chartHover","chartClick"],["cNoZoneBaseChart","",1,"chart",3,"data","labels","legend","options","chartType","chartHover","chartClick"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"c-row"),c["\u0275\u0275elementStart"](2,"c-col",1),c["\u0275\u0275elementStart"](3,"c-card"),c["\u0275\u0275elementStart"](4,"c-card-header"),c["\u0275\u0275text"](5," Line Chart "),c["\u0275\u0275elementStart"](6,"c-card-header-actions"),c["\u0275\u0275elementStart"](7,"a",2),c["\u0275\u0275elementStart"](8,"small",3),c["\u0275\u0275text"](9,"docs"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"c-card-body"),c["\u0275\u0275elementStart"](11,"div",4),c["\u0275\u0275elementStart"](12,"canvas",5),c["\u0275\u0275listener"]("chartHover",(function(e){return t.chartHovered(e)}))("chartClick",(function(e){return t.chartClicked(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"c-col",1),c["\u0275\u0275elementStart"](14,"c-card"),c["\u0275\u0275elementStart"](15,"c-card-header"),c["\u0275\u0275text"](16," Bar Chart "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"c-card-body"),c["\u0275\u0275elementStart"](18,"div",4),c["\u0275\u0275elementStart"](19,"canvas",6),c["\u0275\u0275listener"]("chartHover",(function(e){return t.chartHovered(e)}))("chartClick",(function(e){return t.chartClicked(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](20,"c-row"),c["\u0275\u0275elementStart"](21,"c-col",1),c["\u0275\u0275elementStart"](22,"c-card"),c["\u0275\u0275elementStart"](23,"c-card-header"),c["\u0275\u0275text"](24," Doughnut Chart "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](25,"c-card-body"),c["\u0275\u0275elementStart"](26,"div",4),c["\u0275\u0275elementStart"](27,"canvas",7),c["\u0275\u0275listener"]("chartHover",(function(e){return t.chartHovered(e)}))("chartClick",(function(e){return t.chartClicked(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](28,"c-col",1),c["\u0275\u0275elementStart"](29,"c-card"),c["\u0275\u0275elementStart"](30,"c-card-header"),c["\u0275\u0275text"](31," Radar Chart "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](32,"c-card-body"),c["\u0275\u0275elementStart"](33,"div",4),c["\u0275\u0275elementStart"](34,"canvas",8),c["\u0275\u0275listener"]("chartHover",(function(e){return t.chartHovered(e)}))("chartClick",(function(e){return t.chartClicked(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](35,"c-row"),c["\u0275\u0275elementStart"](36,"c-col",1),c["\u0275\u0275elementStart"](37,"c-card"),c["\u0275\u0275elementStart"](38,"c-card-header"),c["\u0275\u0275text"](39," Pie Chart "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](40,"c-card-body"),c["\u0275\u0275elementStart"](41,"div",4),c["\u0275\u0275elementStart"](42,"canvas",7),c["\u0275\u0275listener"]("chartHover",(function(e){return t.chartHovered(e)}))("chartClick",(function(e){return t.chartClicked(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](43,"c-col",1),c["\u0275\u0275elementStart"](44,"c-card"),c["\u0275\u0275elementStart"](45,"c-card-header"),c["\u0275\u0275text"](46," Polar Area Chart "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](47,"c-card-body"),c["\u0275\u0275elementStart"](48,"div",4),c["\u0275\u0275elementStart"](49,"canvas",9),c["\u0275\u0275listener"]("chartHover",(function(e){return t.chartHovered(e)}))("chartClick",(function(e){return t.chartClicked(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](12),c["\u0275\u0275property"]("datasets",t.lineChartData)("labels",t.lineChartLabels)("options",t.lineChartOptions)("colors",t.lineChartColours)("legend",t.lineChartLegend)("chartType",t.lineChartType),c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("legend",t.barChartLegend)("chartType",t.barChartType),c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("data",t.doughnutChartData)("labels",t.doughnutChartLabels)("options",t.options)("chartType",t.doughnutChartType),c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("datasets",t.radarChartData)("labels",t.radarChartLabels)("options",t.options)("chartType",t.radarChartType),c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("data",t.pieChartData)("labels",t.pieChartLabels)("options",t.options)("chartType",t.pieChartType),c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("data",t.polarAreaChartData)("labels",t.polarAreaChartLabels)("legend",t.polarAreaLegend)("options",t.options)("chartType",t.polarAreaChartType))},directives:[n.cb,n.db,n.Ib,n.Mb,n.Nb,n.Jb,n.Ob],styles:[""]}),e}(),data:{title:"Dashboard"}}],i=function(){function e(){}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(d)],o.g]}),e}(),s=function(){function e(){}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,i,n.i,n.h,n.o]]}),e}()}}]);