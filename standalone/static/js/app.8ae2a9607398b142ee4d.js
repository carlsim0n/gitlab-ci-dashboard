webpackJsonp([1],{"35LD":function(t,s,e){"use strict";var a=e("hr6q"),i=e("R1ya"),n=e("VU/8"),r=n(a.a,i.a,null,null,null);s.a=r.exports},"8taH":function(t,s,e){"use strict";s.a={name:"loading",props:["onLoading"],data:function(){return{loadingText:""}}}},ExWZ:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.onInvalid,expression:"onInvalid"}],staticClass:"row",attrs:{id:"gcim-invalid-config"}},[e("div",{staticClass:"eight wide column centered "},[e("div",{staticClass:"ui attached message"},[e("div",{staticClass:"header"},[t._v(t._s(t.headerText))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ui attached fluid segment"},[e("p",[t._v("\n          Make sure all configs are set.\n          The following properties must be defined in the URL.\n        ")]),t._v(" "),e("ul",[e("li",[t._v("gitlab")]),t._v(" "),e("li",[t._v("token")]),t._v(" "),e("li",[t._v("projectsFile")]),t._v(" "),e("li",[t._v("gitlabciProtocol (optional)")]),t._v(" "),e("li",[t._v("hideSuccessCards (optional)")]),t._v(" "),e("li",[t._v("hideVersion (optional)")]),t._v(" "),e("li",[t._v("interval (optional)")])]),t._v(" "),e("p",[t._v("projectsFile json pattern")]),t._v(" "),e("pre",[t._v('[\n  {\n    "description": "React Native render for draft.js model",\n    "namespace": "globocom",\n    "project": "react-native-draftjs-render",\n    "branch": "master"\n  }\n  (...)\n]\n        ')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ui bottom attached warning message"},[e("p",[t._v("Ex: http://gitlab-ci-dashboard.example.com?gitlab=gitlab.example.com&token=some-token&projectsFile=http://gitlab-ci-dashboard.example.com/file.json&gitlabciProtocol=http&hideSuccessCards=false")]),t._v(" "),e("h4",[t._v("gitlab-ci-monitor compatibility")]),t._v(" "),e("p",[t._v("Ex: http://gitlab-ci-monitor.example.com/?gitlab=gitlab.example.com&token=12345&projects=namespace/project1,namespace/project1/branch,namespace/project2")])])}],n={render:a,staticRenderFns:i};s.a=n},FQwc:function(t,s,e){"use strict";var a=e("oFeA"),i=e("Sqqd"),n=e("VU/8"),r=n(a.a,i.a,null,null,null);s.a=r.exports},M93x:function(t,s,e){"use strict";function a(t){e("y1kj")}var i=e("xJD8"),n=e("cnUV"),r=e("VU/8"),o=a,c=r(i.a,n.a,o,null,null);s.a=c.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),e.d(s,"getProjectsByQuerystring",function(){return u}),e.d(s,"getParameterByName",function(){return l}),e.d(s,"getProjectByFile",function(){return d}),e.d(s,"getTopItem",function(){return h});var a=e("7+uW"),i=e("PJh5"),n=e.n(i),r=e("mtWM"),o=e.n(r),c=e("M93x");a.a.config.productionTip=!1;var u=function(t){var s=[],e=t.split(",");for(var a in e)try{var i=e[a].split("/"),n=i[0].trim(),r=i[1].trim(),o="master";i.length>2&&(o=i[2].trim()),s.push({description:"",namespace:n,project:r,branch:o})}catch(t){console.log(t)}return s},l=function(t,s){s||(s=window.location.href),t=t.replace(/[[]]/g,"\\$&");var e=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=e.exec(s);if(!a)return null;if(!a[2])return"";var i=decodeURIComponent(a[2].replace(/\+/g," "));return"true"===i||"false"!==i&&i},d=function(t,s){o.a.get(t).then(function(t){s(t.data)}).catch(function(){return[]})},h=function(t){if(Array.isArray(t)&&0!==t.length)return t[0]};new a.a({el:"#app",data:function(){return{projects:[],onBuilds:[],nonSuccessBuilds:[],statusQueue:[],status:[],token:null,gitlab:null,projectsParam:null,projectsFile:null,gitlabciProtocol:"https",hideSuccessCards:!1,hideVersion:!1,repositoriesParams:[],repositories:null,onLoading:!1,onInvalid:!1,onError:null,debug:"",interval:60}},computed:{sortedBuilds:function(){if(null==this.onBuilds)return[];var t=this.onBuilds.sort(function(t,s){return t.id<s.id?1:t.id>s.id?-1:0});return this.hideSuccessCards?t.filter(function(t){return"success"!==t.status}):t}},created:function(){var t=this;this.loadConfig(),this.standalone?o.a.get("/params").then(function(s){var e=s.data;t.gitlab=e.gitlab,t.token=e.token,t.ref=e.ref,t.projectsFile="standalone",t.projects=e.projects,t.gitlabciProtocol=e.gitlabciProtocol,t.hideSuccessCards=e.hideSuccessCards,t.hideVersion=e.hideVersion,t.interval=e.interval,t.startup()}).catch(function(){return[]}):this.startup()},methods:{loadConfig:function(){this.standalone=l("standalone"),this.gitlab=l("gitlab"),this.token=l("token"),this.ref=l("ref"),this.projectsParam=l("projects"),this.projectsFile=l("projectsFile"),this.gitlabciProtocol=l("gitlabciProtocol")||"https",this.hideSuccessCards=l("hideSuccessCards"),null==this.hideSuccessCards&&(this.hideSuccessCards=!1),this.hideVersion=l("hideVersion"),null==this.hideVersion&&(this.hideVersion=!1),this.interval=l("interval")||60},loadProjects:function(t){var s=this;if(null!=t){var e=[];for(var a in t)try{var i=t[a];this.debug+=i;var n=i.namespace,r=i.project,o=i.branch,c=n+"/"+r,u=r;e.push({nameWithNamespace:c,projectName:u,branch:o||"master"})}catch(t){this.handlerError.bind(this)({message:"Wrong format",response:{status:500}})}this.repositories=e,this.setupDefaults(),this.fetchProjects(),setInterval(function(){s.handlerError(),s.fetchProjects()},1e3*this.interval),this.handlerStatus()}},startup:function(){if(!this.configValid())return void(this.onInvalid=!0);this.standalone&&this.loadProjects(this.projects),this.projectsParam?(this.projects=u(this.projectsParam),this.loadProjects(this.projects)):d(this.projectsFile,this.loadProjects)},handlerError:function(t){if(null==t)return void(this.onError={message:""});this.onError={message:"Something went wrong. Make sure the configuration is ok and your Gitlab is up and running."},"Wrong format"===t.message&&(this.onError={message:"Wrong projects format! Try: 'namespace/project' or 'namespace/project/branch'"}),"Network Error"===t.message&&(this.onError={message:"Network Error. Please check the Gitlab domain."}),t.response&&401===t.response.status&&(this.onError={message:"Unauthorized Access. Please check your token."})},configValid:function(){var t=!0,s=this.projectsFile,e=this.token,a=this.gitlab;return(null==this.projects&&null==s||null==e||null==a)&&(t=!1),t},setupDefaults:function(){var t=this.gitlab,s=this.token;o.a.defaults.baseURL=this.gitlabciProtocol+"://"+t+"/api/v3",o.a.defaults.headers.common["PRIVATE-TOKEN"]=s},fetchProjects:function(t){var s=this,e=this.repositories;e&&e.forEach(function(t){s.onLoading=!0,o.a.get("/projects/"+t.nameWithNamespace.replace("/","%2F")).then(function(e){s.onLoading=!1,s.fetchBuilds({repo:t,project:e.data})}).catch(s.handlerError.bind(s))})},addStatusQueue:function(t,s){this.statusQueue.push({status:t,action:s})},handlerStatus:function(t){var s=this;t&&this.updateStatus(t),setTimeout(function(){s.handlerStatus(s.statusQueue.shift())},500)},updateStatus:function(t){var s=this.status.filter(function(s){return t.status===s.text});if(0===s.length)return void this.status.push({text:t.status,total:1});var e=s[0];"increase"===t.action?e.total++:"decrease"===t.action&&e.total--},loadBuilds:function(t,s,e,a,i){var r=this,o=!1,c=h(s);if(c){var u=n()(c.started_at).fromNow();if(t.forEach(function(t){t.project===e.projectName&&t.branch===e.branch&&(o=!0,t.status!==c.status&&(r.addStatusQueue(t.status,"decrease"),r.addStatusQueue(c.status,"increase")),t.lastStatus=t.status,t.status=c.status,t.id=c.id,t.started_at=u,t.author=c.commit.author_name,t.commit_message=c.commit.message,t.project_path=a.path_with_namespace,t.branch=e.branch,t.tag_name=i.name,t.namespace_name=a.namespace.name)}),!o){this.addStatusQueue(c.status,"increase");var l={project:e.projectName,id:c.id,status:c.status,lastStatus:"",started_at:u,author:c.commit.author_name,commit_message:c.commit.message,project_path:a.path_with_namespace,branch:e.branch,tag_name:i.name,namespace_name:a.namespace.name};t.push(l)}}},fetchBuilds:function(t){var s=this,e=this.onBuilds;if(t){var a=t.repo,i=t.project;o.a.get("/projects/"+i.id+"/repository/branches/"+a.branch).then(function(t){var n=t.data.commit.id;o.a.get("/projects/"+i.id+"/repository/commits/"+n+"/builds").then(function(t){var n=t.data;o.a.get("/projects/"+i.id+"/repository/tags").then(function(t){var r=h(t.data);s.loadBuilds(e,n,a,i,r)}).catch(s.handlerError.bind(s))}).catch(s.handlerError.bind(s))}).catch(this.handlerError.bind(this))}}},template:'<App v-bind:onLoading="onLoading" v-bind:onInvalid="onInvalid" v-bind:onError="onError" v-bind:onBuilds="onBuilds" v-bind:sortedBuilds="sortedBuilds" v-bind:status="status" v-bind:hideSuccessCards="hideSuccessCards"v-bind:interval="interval"v-bind:hideVersion="hideVersion"/>',components:{App:c.a}})},NxGh:function(t,s,e){"use strict";var a=e("8taH"),i=e("vVyA"),n=e("VU/8"),r=n(a.a,i.a,null,null,null);s.a=r.exports},R1ya:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row",staticStyle:{margin:"1em 0 1em 1em"},attrs:{id:"gcim-builds"}},[e("div",{staticClass:"sixteen wide column"},[e("div",{staticClass:"ui stackable cards"},t._l(t.sortedBuilds,function(s){return e("div",{key:s.id,class:t.statusClass(s)},[e("div",{staticClass:"content"},[e("div",{staticClass:"header project-name"},[e("a",{attrs:{target:"_blank",href:s.project_url}},[t._v(t._s(s.project)+" ("+t._s(s.branch)+")")])]),t._v(" "),e("div",{staticClass:"meta"},[t._v(t._s(s.namespace_name))]),t._v(" "),t.isSuccessCard(s)?t._e():e("div",{staticClass:"description"},[t._v("\n            "+t._s(s.commit_message)+"\n          ")]),t._v(" "),t.isSuccessCard(s)?t._e():e("div",{staticClass:"meta"},[t._v(t._s(s.author))]),t._v(" "),!t.isSuccessCard(s)&&t.showVersion(s)?e("div",{staticClass:"ui center floated basic button"},[e("h1",{staticStyle:{"font-size":"1.5em"}},[t._v(t._s(s.tag_name))])]):t._e(),t._v(" "),t.isSuccessCard(s)&&t.showVersion(s)?e("div",{staticClass:"ui center floated basic button"},[e("h1",{staticStyle:{"font-size":"2.5em"}},[t._v(t._s(s.tag_name))])]):t._e()]),t._v(" "),e("div",{staticClass:"extra content"},[e("span",{staticClass:"left floated hashtag build-id"},[e("a",{attrs:{target:"_blank",href:s.project_build_url}},[e("i",{staticClass:"hashtag icon"}),t._v("\n              "+t._s(s.id)+"\n            ")])]),t._v(" "),e("span",{staticClass:"right floated calendar"},[e("i",{staticClass:"calendar icon"}),t._v("\n            "+t._s(s.started_at)+"\n          ")])])])}))])])},i=[],n={render:a,staticRenderFns:i};s.a=n},Sqqd:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"this.show"}],staticClass:"row",attrs:{id:"gcim-error"}},[e("div",{staticClass:"eight wide column centered "},[e("div",{staticClass:"ui red message"},[t._v(t._s(this.message))])])])},i=[],n={render:a,staticRenderFns:i};s.a=n},"V/J3":function(t,s,e){"use strict";var a=e("rcrA"),i=e("ExWZ"),n=e("VU/8"),r=n(a.a,i.a,null,null,null);s.a=r.exports},ZCEl:function(t,s,e){"use strict";function a(t){e("oeOy")}var i=e("l9v6"),n=e("lsrg"),r=e("VU/8"),o=a,c=r(i.a,n.a,o,null,null);s.a=c.exports},cnUV:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ui grid",attrs:{id:"app"}},[e("div",{staticClass:"two column row",attrs:{id:"gcim-app"}},[e("div",{staticClass:"thirteen wide column"},[e("error",{attrs:{onError:t.onError}}),t._v(" "),e("invalid-config",{attrs:{onInvalid:t.onInvalid}}),t._v(" "),e("loading",{attrs:{onLoading:t.onLoading}}),t._v(" "),e("builds",{attrs:{onBuilds:t.onBuilds,sortedBuilds:t.sortedBuilds,status:t.status,hideSuccessCards:t.hideSuccessCards,hideVersion:t.hideVersion}})],1),t._v(" "),e("div",{staticClass:"three wide column"},[e("painel",{attrs:{status:t.status,interval:t.interval}})],1)])])},i=[],n={render:a,staticRenderFns:i};s.a=n},hr6q:function(t,s,e){"use strict";s.a={name:"builds",props:["onBuilds","sortedBuilds","hideSuccessCards","hideVersion"],data:function(){return{gitlab:""}},methods:{isSuccessCard:function(t){return"success"===t.status},showVersion:function(t){return!this.hideVersion&&null!=t.tag_name},statusClass:function(t){return"card "+t.status+" "+this.positionClass(t)},positionClass:function(t){var s=(t.lastStatus,t.status);return this.hideSuccessCards?"success"===s?"bounce-out-top":"bounce-in-top":""}}}},l9v6:function(t,s,e){"use strict";s.a={name:"painel",props:["status","interval"],computed:{localStatus:function(){var t=this;return this.painelStatus.map(function(s){if(null==t.status)return s;var e=t.status.filter(function(t){return t.text===s.text});if(e.length>0){var a=e[0];s.total=a.total}return s})},filterAnimation:function(){return"opa "+this.interval+"s steps(1, end) infinite reverse"},maskAnimation:function(){return"opa "+this.interval+"s steps(1, end) infinite"},spinnerAnimation:function(){return"rota "+this.interval+"s linear infinite"}},data:function(){return{painelStatus:[{text:"success",color:"#00ad68",total:0},{text:"failed",color:"#e7484d",total:0},{text:"running",color:"#2d9fd8",total:0},{text:"pending",color:"#ffb541",total:0},{text:"canceled",color:"#aaaaaa",total:0}]}}}},lsrg:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ui grid card",staticStyle:{"background-color":"white"},attrs:{id:"gcim-painel"}},[t._m(0),t._v(" "),t._l(t.localStatus,function(s){return e("div",{key:s.color,staticClass:"ui row"},[e("div",{staticStyle:{margin:"1em"}},[e("span",{staticStyle:{"font-size":"5em"}},[t._v(t._s(s.total))]),t._v(" "),e("span",{staticStyle:{"font-size":"1.1em"},style:{color:s.color}},[t._v(t._s(s.text.toUpperCase()))])])])}),t._v(" "),e("div",{staticClass:"ui row centered"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"pie spinner",style:{animation:t.spinnerAnimation}}),t._v(" "),e("div",{staticClass:"pie filler",style:{animation:t.filterAnimation}}),t._v(" "),e("div",{staticClass:"mask",style:{animation:t.maskAnimation}})])]),t._v(" "),t._m(1)],2)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ui row centered",staticStyle:{"padding-bottom":"2em"}},[a("img",{staticClass:"logo",attrs:{src:e("vW8a")}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ui row centered"},[e("h5",[e("a",{attrs:{target:"_blank",href:"https://github.com/emilianoeloi/gitlab-ci-dashboard"}},[t._v("\n        GitLab CI Dashboard\n      ")])])])}],n={render:a,staticRenderFns:i};s.a=n},oFeA:function(t,s,e){"use strict";s.a={name:"error",props:["onError"],computed:{show:function(){return this.onError&&null!=this.onError.message&&""!==this.onError.message},message:function(){return this.onError&&this.onError.message?this.onError.message:""}}}},oeOy:function(t,s){},rcrA:function(t,s,e){"use strict";s.a={name:"invalid-config",props:["onInvalid"],data:function(){return{headerText:"Invalid Configuration"}}}},uslO:function(t,s,e){function a(t){return e(i(t))}function i(t){var s=n[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="uslO"},vVyA:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"row",attrs:{id:"gcim-loading"}},[e("div",{staticClass:"ui large active centered inline loader"})])},i=[],n={render:a,staticRenderFns:i};s.a=n},vW8a:function(t,s){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPmxvZ28tc3F1YXJlPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00OTUuMTk5IDI4MC4yMjVMNDY3LjY0IDE5NS40MSA0MTMuMDIzIDI3LjMxM2MtMi44MS04LjY0OC0xNS4wNDYtOC42NDgtMTcuODU2IDBMMzQwLjU0OCAxOTUuNDFIMTU5LjE4MWwtNTQuNjItMTY4LjA5N2MtMi44MDktOC42NDgtMTUuMDQ1LTguNjQ4LTE3Ljg1NiAwTDMyLjA4OCAxOTUuNDEgNC41MzEgMjgwLjIyNWExOC43NzUgMTguNzc1IDAgMCAwIDYuODIgMjAuOTkybDIzOC41MTMgMTczLjI5IDIzOC41MTUtMTczLjI5YTE4Ljc3NyAxOC43NzcgMCAwIDAgNi44Mi0yMC45OTIiIGZpbGw9IiNGQzZEMjYiLz48cGF0aCBkPSJNMjQ5Ljg2NSA0NzQuNTA2bDkwLjY4NC0yNzkuMDk2SDE1OS4xOGw5MC42ODQgMjc5LjA5NnoiIGZpbGw9IiNFMjQzMjkiLz48cGF0aCBkPSJNMjQ5Ljg2NSA0NzQuNTA2TDE1OS4xOCAxOTUuNDFIMzIuMDg5bDIxNy43NzYgMjc5LjA5NXoiIGZpbGw9IiNGQzZEMjYiLz48cGF0aCBkPSJNMzIuMDg5IDE5NS40MWwtMjcuNTYgODQuODE1YTE4Ljc3MyAxOC43NzMgMCAwIDAgNi44MjIgMjAuOTkxbDIzOC41MTQgMTczLjI5TDMyLjA4OSAxOTUuNDF6IiBmaWxsPSIjRkNBMzI2Ii8+PHBhdGggZD0iTTMyLjA4OSAxOTUuNDExSDE1OS4xOEwxMDQuNTYgMjcuMzE0Yy0yLjgxLTguNjUtMTUuMDQ2LTguNjUtMTcuODU1IDBMMzIuMDg5IDE5NS40MXoiIGZpbGw9IiNFMjQzMjkiLz48cGF0aCBkPSJNMjQ5Ljg2NSA0NzQuNTA2bDkwLjY4NC0yNzkuMDk1SDQ2Ny42NEwyNDkuODY1IDQ3NC41MDZ6IiBmaWxsPSIjRkM2RDI2Ii8+PHBhdGggZD0iTTQ2Ny42NCAxOTUuNDFsMjcuNTU5IDg0LjgxNWExOC43NzMgMTguNzczIDAgMCAxLTYuODIxIDIwLjk5MWwtMjM4LjUxNCAxNzMuMjlMNDY3LjY0IDE5NS40MXoiIGZpbGw9IiNGQ0EzMjYiLz48cGF0aCBkPSJNNDY3LjY0IDE5NS40MTFIMzQwLjU0OGw1NC42MTktMTY4LjA5N2MyLjgxLTguNjUgMTUuMDQ3LTguNjUgMTcuODU2IDBMNDY3LjY0IDE5NS40MXoiIGZpbGw9IiNFMjQzMjkiLz48L2c+PC9zdmc+"},xJD8:function(t,s,e){"use strict";var a=e("ZCEl"),i=e("FQwc"),n=e("V/J3"),r=e("NxGh"),o=e("35LD");s.a={name:"app",components:{Painel:a.a,Error:i.a,InvalidConfig:n.a,Loading:r.a,Builds:o.a},props:["onLoading","onInvalid","onError","onBuilds","sortedBuilds","status","hideSuccessCards","interval","hideVersion"],data:function(){return{projects:[]}}}},y1kj:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.8ae2a9607398b142ee4d.js.map