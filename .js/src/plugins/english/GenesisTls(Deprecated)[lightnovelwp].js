var e=this&&this.__awaiter||function(e,a,t,l){return new(t||(t=Promise))((function(s,r){function n(e){try{i(l.next(e))}catch(e){r(e)}}function o(e){try{i(l.throw(e))}catch(e){r(e)}}function i(e){var a;e.done?s(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(n,o)}i((l=l.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var t,l,s,r,n={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;r&&(r=0,o[0]&&(n=0)),n;)try{if(t=1,l&&(s=2&o[0]?l.return:o[0]?l.throw||((s=l.return)&&s.call(l),0):l.next)&&!(s=s.call(l,o[1])).done)return s;switch(l=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,l=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!(s=n.trys,(s=s.length>0&&s[s.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){n.label=o[1];break}if(6===o[0]&&n.label<s[1]){n.label=s[1],s=o;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(o);break}s[2]&&n.ops.pop(),n.trys.pop();continue}o=a.call(e,n)}catch(e){o=[6,e],l=0}finally{t=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("cheerio"),l=require("htmlparser2"),s=require("@libs/fetch"),r=require("@libs/novelStatus"),n=require("@libs/defaultCover");function o(e,a){var t=e.match(/(\d+)$/);t&&t[0]&&(a.chapterNumber=parseInt(t[0]))}var i=new(function(){function i(e){var a,t;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var l=(null===(a=e.options)||void 0===a?void 0:a.versionIncrements)||0;this.version="1.1.".concat(4+l),this.options=null!==(t=e.options)&&void 0!==t?t:{},this.filters=e.filters}return i.prototype.getHostname=function(e){var a=(e=e.split("/")[2]).split(".");return a.pop(),a.join(".")},i.prototype.safeFecth=function(t,l){return e(this,void 0,void 0,(function(){var e,r,n,o,i;return a(this,(function(a){switch(a.label){case 0:return[4,(0,s.fetchApi)(t)];case 1:if(!(e=a.sent()).ok&&1!=l)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return[4,e.text()];case 2:if(r=a.sent(),n=null===(i=null===(o=r.match(/<title>(.*?)<\/title>/))||void 0===o?void 0:o[1])||void 0===i?void 0:i.trim(),this.getHostname(t)!=this.getHostname(e.url)||n&&("Bot Verification"==n||"You are being redirected..."==n||"Un instant..."==n||"Just a moment..."==n||"Redirecting..."==n))throw new Error("Captcha error, please open in webview");return[2,r]}}))}))},i.prototype.parseNovels=function(e){var a=this;e=(0,t.load)(e).html();var l=[];return(e.match(/<article([\s\S]*?)<\/article>/g)||[]).forEach((function(e){var t=e.match(/<a href="(.*?)".*title="(.*?)"/)||[],s=t[1],r=t[2];if(r&&s){var o=e.match(/<img.*src="(.*?)"(?:\sdata-src="(.*?)")?.*\/?>/)||[];l.push({name:r,cover:o[2]||o[1]||n.defaultCover,path:s.replace(a.site,"")})}})),l},i.prototype.popularNovels=function(t,l){return e(this,arguments,void 0,(function(e,t){var l,s,r,n,o,i,u,c,v,h=t.filters,p=t.showLatestNovels;return a(this,(function(a){switch(a.label){case 0:for(r in l=null!==(v=null===(c=this.options)||void 0===c?void 0:c.seriesPath)&&void 0!==v?v:"series/",s=this.site+l+"?page="+e,h||(h=this.filters||{}),p&&(s+="&order=latest"),h)if("object"==typeof h[r].value)for(n=0,o=h[r].value;n<o.length;n++)i=o[n],s+="&".concat(r,"=").concat(i);else h[r].value&&(s+="&".concat(r,"=").concat(h[r].value));return[4,this.safeFecth(s,!1)];case 1:return u=a.sent(),[2,this.parseNovels(u)]}}))}))},i.prototype.parseNovel=function(t){return e(this,void 0,void 0,(function(){var e,s,i,u,c,v,h,p,d,m,f,b,g,y,w,k,N,C,S;return a(this,(function(a){switch(a.label){case 0:return e=this.site,[4,this.safeFecth(e+t,!1)];case 1:return s=a.sent(),i={path:t,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},u=!1,c=!1,v=!1,h=!1,p=!1,d=!1,m=!1,f=!1,b=!1,g=!1,y=0,w=!1,k=[],N={},C=new l.Parser({onopentag:function(a,t){var l;!i.cover&&(null===(l=t.class)||void 0===l?void 0:l.includes("ts-post-image"))?(i.name=t.title,i.cover=t["data-src"]||t.src||n.defaultCover):"genxed"===t.class||"sertogenre"===t.class?u=!0:u&&"a"===a?c=!0:"div"!==a||"entry-content"!==t.class&&"description"!==t.itemprop?"spe"===t.class||"serl"===t.class?h=!0:h&&"span"===a?p=!0:"div"===a&&"sertostat"===t.class?(h=!0,p=!0,f=!0):t.class&&t.class.includes("eplister")?b=!0:b&&"li"===a?g=!0:g&&("a"===a&&void 0===N.path?N.path=t.href.replace(e,"").trim():"epl-num"===t.class?y=1:"epl-title"===t.class?y=2:"epl-date"===t.class?y=3:"epl-price"===t.class&&(y=4)):v=!0},ontext:function(e){var a,t;if(u)c&&(i.genres+=e+", ");else if(v)i.summary+=e.trim();else if(h){if(p){var l=e.toLowerCase().replace(":","").trim();if(d)i.author+=e||"Unknown";else if(m)i.artist+=e||"Unknown";else if(f)switch(l){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":i.status=r.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":i.status=r.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":i.status=r.NovelStatus.OnHiatus;break;default:i.status=r.NovelStatus.Unknown}switch(l){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":d=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":f=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":m=!0}}}else if(b&&g)if(1===y)o(e,N);else if(2===y)N.name=(null===(t=null===(a=e.match(RegExp("^".concat(i.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===a?void 0:a[1])||void 0===t?void 0:t.trim())||e.trim(),N.chapterNumber||o(e,N);else if(3===y)N.releaseTime=e;else if(4===y){switch(l=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":w=!1;break;default:w=!0}}},onclosetag:function(e){var a,t,l;u?c?c=!1:(u=!1,i.genres=null===(a=i.genres)||void 0===a?void 0:a.slice(0,-2)):v?"br"===e?i.summary+="\n":"div"===e&&(v=!1):h?p?"span"===e&&(p=!1,d&&i.author?d=!1:m&&i.artist?m=!1:f&&""!==i.status&&(f=!1)):"div"===e&&(h=!1,i.author=null===(t=i.author)||void 0===t?void 0:t.trim(),i.artist=null===(l=i.artist)||void 0===l?void 0:l.trim()):b&&(g?1===y||2===y||3===y||4===y?y=0:"li"===e&&(g=!1,N.chapterNumber||(N.chapterNumber=0),w||k.push(N),N={}):"ul"===e&&(b=!1))}}),C.write(s),C.end(),k.length&&((null===(S=this.options)||void 0===S?void 0:S.reverseChapters)&&k.reverse(),i.chapters=k),[2,i]}}))}))},i.prototype.parseChapter=function(l){return e(this,void 0,void 0,(function(){var e,s,r,n,o;return a(this,(function(a){switch(a.label){case 0:return[4,this.safeFecth(this.site+l,!1)];case 1:if(e=a.sent(),null===(r=this.options)||void 0===r?void 0:r.customJs)try{(s=(0,t.load)(e))(".genesistls-watermark").remove(),s(".epcontent p").each((function(e,a){"&nbsp;"===s(a).html()&&s(a).remove()})),e=s.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(o=null===(n=e.match(/<div.*class="epcontent ([\s\S]*?)<div.*class="bottomnav"/g))||void 0===n?void 0:n[0].match(/<p.*>([\s\S]*?)<\/p>/g))||void 0===o?void 0:o.join("\n"))||""]}}))}))},i.prototype.searchNovels=function(t,l){return e(this,void 0,void 0,(function(){var e,s;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"page/"+l+"/?s="+t,[4,this.safeFecth(e,!0)];case 1:return s=a.sent(),[2,this.parseNovels(s)]}}))}))},i}())({id:"genesistls",sourceSite:"https://genesistls.com/",sourceName:"GenesisTls (Deprecated)",options:{lang:"English",reverseChapters:!1,customJs:"$('.genesistls-watermark').remove();$('.epcontent p').each((i, el) => { if ($(el).html() === '&nbsp;') $(el).remove(); });"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Academy",value:"academy"},{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Another World",value:"another-world"},{label:"Comdey",value:"comdey"},{label:"Comedy",value:"comedy"},{label:"Dark Fantasy",value:"dark-fantasy"},{label:"Drama",value:"drama"},{label:"Fantasy",value:"fantasy"},{label:"Fantasy Fusion",value:"fantasy-fusion"},{label:"Harem",value:"harem"},{label:"Historical",value:"historical"},{label:"Horror",value:"horror"},{label:"Hunter",value:"hunter"},{label:"Light Novel",value:"light-novel"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Misunderstanding",value:"misunderstanding"},{label:"Modern",value:"modern"},{label:"Modern Fantasy",value:"modern-fantasy"},{label:"Munchkin",value:"munchkin"},{label:"Murim",value:"murim"},{label:"mystery",value:"mystery"},{label:"No Harem",value:"no-harem"},{label:"NO NTR",value:"no-ntr"},{label:"obsession",value:"obsession"},{label:"Possession",value:"possession"},{label:"Psychological",value:"psychological"},{label:"Regression",value:"regression"},{label:"Regret",value:"regret"},{label:"reincarnation",value:"reincarnation"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Seinen",value:"seinen"},{label:"Slice of life",value:"slice-of-life"},{label:"Supernatural",value:"supernatural"},{label:"Tragedy",value:"tragedy"},{label:"Transmigrated to Game",value:"transmigrated-to-game"},{label:"Transmigration",value:"transmigration"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"korean novel",value:"korean-novel"},{label:"Web Novel",value:"web-novel"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Order by",value:"",options:[{label:"Default",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"}]}}});exports.default=i;