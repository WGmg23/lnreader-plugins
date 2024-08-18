var e=this&&this.__awaiter||function(e,a,l,o){return new(l||(l=Promise))((function(r,i){function t(e){try{u(o.next(e))}catch(e){i(e)}}function n(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var a;e.done?r(e.value):(a=e.value,a instanceof l?a:new l((function(e){e(a)}))).then(t,n)}u((o=o.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var l,o,r,i,t={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function n(n){return function(u){return function(n){if(l)throw new TypeError("Generator is already executing.");for(;i&&(i=0,n[0]&&(t=0)),t;)try{if(l=1,o&&(r=2&n[0]?o.return:n[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,n[1])).done)return r;switch(o=0,r&&(n=[2&n[0],r.value]),n[0]){case 0:case 1:r=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,o=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(!(r=t.trys,(r=r.length>0&&r[r.length-1])||6!==n[0]&&2!==n[0])){t=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){t.label=n[1];break}if(6===n[0]&&t.label<r[1]){t.label=r[1],r=n;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(n);break}r[2]&&t.ops.pop(),t.trys.pop();continue}n=a.call(e,t)}catch(e){n=[6,e],o=0}finally{l=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var l=require("cheerio"),o=require("htmlparser2"),r=require("@libs/fetch"),i=require("@libs/novelStatus"),t=require("@libs/defaultCover");function n(e,a){var l=e.match(/(\d+)$/);l&&l[0]&&(a.chapterNumber=parseInt(l[0]))}var u=new(function(){function u(e){var a,l;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var o=(null===(a=e.options)||void 0===a?void 0:a.versionIncrements)||0;this.version="1.1.".concat(4+o),this.options=null!==(l=e.options)&&void 0!==l?l:{},this.filters=e.filters}return u.prototype.getHostname=function(e){var a=(e=e.split("/")[2]).split(".");return a.pop(),a.join(".")},u.prototype.safeFecth=function(l,o){return e(this,void 0,void 0,(function(){var e,i,t,n,u;return a(this,(function(a){switch(a.label){case 0:return[4,(0,r.fetchApi)(l)];case 1:if(!(e=a.sent()).ok&&1!=o)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return[4,e.text()];case 2:if(i=a.sent(),t=null===(u=null===(n=i.match(/<title>(.*?)<\/title>/))||void 0===n?void 0:n[1])||void 0===u?void 0:u.trim(),this.getHostname(l)!=this.getHostname(e.url)||t&&("Bot Verification"==t||"You are being redirected..."==t||"Un instant..."==t||"Just a moment..."==t||"Redirecting..."==t))throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},u.prototype.parseNovels=function(e){var a=this;e=(0,l.load)(e).html();var o=[];return(e.match(/<article([\s\S]*?)<\/article>/g)||[]).forEach((function(e){var l=e.match(/<a href="(.*?)".*title="(.*?)"/)||[],r=l[1],i=l[2];if(i&&r){var n=e.match(/<img.*src="(.*?)"(?:\sdata-src="(.*?)")?.*\/?>/)||[];o.push({name:i,cover:n[2]||n[1]||t.defaultCover,path:r.replace(a.site,"")})}})),o},u.prototype.popularNovels=function(l,o){return e(this,arguments,void 0,(function(e,l){var o,r,i,t,n,u,s,v,c,b=l.filters,d=l.showLatestNovels;return a(this,(function(a){switch(a.label){case 0:for(i in o=null!==(c=null===(v=this.options)||void 0===v?void 0:v.seriesPath)&&void 0!==c?c:"series/",r=this.site+o+"?page="+e,b||(b=this.filters||{}),d&&(r+="&order=latest"),b)if("object"==typeof b[i].value)for(t=0,n=b[i].value;t<n.length;t++)u=n[t],r+="&".concat(i,"=").concat(u);else b[i].value&&(r+="&".concat(i,"=").concat(b[i].value));return[4,this.safeFecth(r,!1)];case 1:return s=a.sent(),[2,this.parseNovels(s)]}}))}))},u.prototype.parseNovel=function(l){return e(this,void 0,void 0,(function(){var e,r,u,s,v,c,b,d,m,p,h,f,g,y,w,A,C,k,E;return a(this,(function(a){switch(a.label){case 0:return e=this.site,[4,this.safeFecth(e+l,!1)];case 1:return r=a.sent(),u={path:l,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},s=!1,v=!1,c=!1,b=!1,d=!1,m=!1,p=!1,h=!1,f=!1,g=!1,y=0,w=!1,A=[],C={},k=new o.Parser({onopentag:function(a,l){var o;!u.cover&&(null===(o=l.class)||void 0===o?void 0:o.includes("ts-post-image"))?(u.name=l.title,u.cover=l["data-src"]||l.src||t.defaultCover):"genxed"===l.class||"sertogenre"===l.class?s=!0:s&&"a"===a?v=!0:"div"!==a||"entry-content"!==l.class&&"description"!==l.itemprop?"spe"===l.class||"serl"===l.class?b=!0:b&&"span"===a?d=!0:"div"===a&&"sertostat"===l.class?(b=!0,d=!0,h=!0):l.class&&l.class.includes("eplister")?f=!0:f&&"li"===a?g=!0:g&&("a"===a&&void 0===C.path?C.path=l.href.replace(e,"").trim():"epl-num"===l.class?y=1:"epl-title"===l.class?y=2:"epl-date"===l.class?y=3:"epl-price"===l.class&&(y=4)):c=!0},ontext:function(e){var a,l;if(s)v&&(u.genres+=e+", ");else if(c)u.summary+=e.trim();else if(b){if(d){var o=e.toLowerCase().replace(":","").trim();if(m)u.author+=e||"Unknown";else if(p)u.artist+=e||"Unknown";else if(h)switch(o){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":u.status=i.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":u.status=i.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":u.status=i.NovelStatus.OnHiatus;break;default:u.status=i.NovelStatus.Unknown}switch(o){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":m=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":h=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":p=!0}}}else if(f&&g)if(1===y)n(e,C);else if(2===y)C.name=(null===(l=null===(a=e.match(RegExp("^".concat(u.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===a?void 0:a[1])||void 0===l?void 0:l.trim())||e.trim(),C.chapterNumber||n(e,C);else if(3===y)C.releaseTime=e;else if(4===y){switch(o=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":w=!1;break;default:w=!0}}},onclosetag:function(e){var a,l,o;s?v?v=!1:(s=!1,u.genres=null===(a=u.genres)||void 0===a?void 0:a.slice(0,-2)):c?"br"===e?u.summary+="\n":"div"===e&&(c=!1):b?d?"span"===e&&(d=!1,m&&u.author?m=!1:p&&u.artist?p=!1:h&&""!==u.status&&(h=!1)):"div"===e&&(b=!1,u.author=null===(l=u.author)||void 0===l?void 0:l.trim(),u.artist=null===(o=u.artist)||void 0===o?void 0:o.trim()):f&&(g?1===y||2===y||3===y||4===y?y=0:"li"===e&&(g=!1,C.chapterNumber||(C.chapterNumber=0),w||A.push(C),C={}):"ul"===e&&(f=!1))}}),k.write(r),k.end(),A.length&&((null===(E=this.options)||void 0===E?void 0:E.reverseChapters)&&A.reverse(),u.chapters=A),[2,u]}}))}))},u.prototype.parseChapter=function(o){return e(this,void 0,void 0,(function(){var e,r,i,t,n;return a(this,(function(a){switch(a.label){case 0:return[4,this.safeFecth(this.site+o,!1)];case 1:if(e=a.sent(),null===(i=this.options)||void 0===i?void 0:i.customJs)try{r=(0,l.load)(e),e=r.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(n=null===(t=e.match(/<div.*class="epcontent ([\s\S]*?)<div.*class="bottomnav"/g))||void 0===t?void 0:t[0].match(/<p.*>([\s\S]*?)<\/p>/g))||void 0===n?void 0:n.join("\n"))||""]}}))}))},u.prototype.searchNovels=function(l,o){return e(this,void 0,void 0,(function(){var e,r;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"page/"+o+"/?s="+l,[4,this.safeFecth(e,!0)];case 1:return r=a.sent(),[2,this.parseNovels(r)]}}))}))},u}())({id:"allnovelread",sourceSite:"https://allnovelread.com/",sourceName:"AllNovelRead",options:{lang:"Spanish",reverseChapters:!0},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"16+",value:"16"},{label:"Abogado/Abogada",value:"abogado-abogada"},{label:"Action",value:"action"},{label:"Advogdo",value:"advogdo"},{label:"affair of the heart",value:"affair-of-the-heart"},{label:"alfa",value:"alfa"},{label:"Alpha",value:"alpha"},{label:"Amable",value:"amable"},{label:"Amar",value:"amar"},{label:"Amor",value:"amor"},{label:"Amor caliente",value:"amor-caliente"},{label:"amor depois do casamento",value:"amor-depois-do-casamento"},{label:"Amor después del matrimonio",value:"amor-despues-del-matrimonio"},{label:"Amor destinado",value:"amor-destinado"},{label:"Amor doloroso",value:"amor-doloroso"},{label:"Amor dulce",value:"amor-dulce"},{label:"Amor e ódio",value:"amor-e-odio"},{label:"Amor e ódio Gravidez",value:"amor-e-odio-gravidez"},{label:"amor entre ex",value:"amor-entre-ex"},{label:"Amor forzado",value:"amor-forzado"},{label:"Amor Inocente",value:"amor-inocente"},{label:"amor predestinado",value:"amor-predestinado"},{label:"Amor y odio",value:"amor-y-odio"},{label:"arrepentirse del divorcio",value:"arrepentirse-del-divorcio"},{label:"Arrepentirse Después de Herir a Su Mujer",value:"arrepentirse-despues-de-herir-a-su-mujer"},{label:"Arrogante",value:"arrogante"},{label:"Asesinato",value:"asesinato"},{label:"Babby",value:"babby"},{label:"BABY",value:"baby"},{label:"Beauty",value:"beauty"},{label:"Bebê fofo",value:"bebe-fofo"},{label:"Bebé inteligente",value:"bebe-inteligente"},{label:"belleza",value:"belleza"},{label:"Belleza inusual",value:"belleza-inusual"},{label:"Bilionário",value:"bilionario"},{label:"Billionair",value:"billionair"},{label:"billionaire",value:"billionaire"},{label:"Billonario/Billonaria",value:"billonario-billonaria"},{label:"brilliant",value:"brilliant"},{label:"bxg",value:"bxg"},{label:"Bxg-novela",value:"bxg-novela"},{label:"Campus",value:"campus"},{label:"Casamiento",value:"casamiento"},{label:"CEO",value:"ceo"},{label:"city",value:"city"},{label:"Colegiala",value:"colegiala"},{label:"Comedia",value:"comedia"},{label:"Comedia-novela",value:"comedia-novela"},{label:"Comedy",value:"comedy"},{label:"contemporáneo",value:"contemporaneo"},{label:"Contract marriage",value:"contract-marriage"},{label:"cónyuge",value:"conyuge"},{label:"Corazón roto",value:"corazon-roto"},{label:"courtship",value:"courtship"},{label:"Crecimiento del personaje",value:"crecimiento-del-personaje"},{label:"Crimen organizado",value:"crimen-organizado"},{label:"Critical",value:"critical"},{label:"cruel",value:"cruel"},{label:"De pobre a rico",value:"de-pobre-a-rico"},{label:"Divertido",value:"divertido"},{label:"Divorce",value:"divorce"},{label:"Divorcio",value:"divorcio"},{label:"Doce",value:"doce"},{label:"Doctor",value:"doctor"},{label:"Dominador",value:"dominador"},{label:"Dominante",value:"dominante"},{label:"Dominante-novela",value:"dominante-novela"},{label:"drama",value:"drama"},{label:"dulce",value:"dulce"},{label:"Dulce Embarazada",value:"dulce-embarazada"},{label:"elegante",value:"elegante"},{label:"Embarazada",value:"embarazada"},{label:"En la actualidad",value:"en-la-actualidad"},{label:"Enemigos a los amantes",value:"enemigos-a-los-amantes"},{label:"existente",value:"existente"},{label:"Family",value:"family"},{label:"Fantasy",value:"fantasy"},{label:"Fated",value:"fated"},{label:"Fraco para forte/Pob",value:"fraco-para-forte-pob"},{label:"fuerte",value:"fuerte"},{label:"Goodgirl",value:"goodgirl"},{label:"Gravidez",value:"gravidez"},{label:"HE",value:"he"},{label:"heir/heiress",value:"heir-heiress"},{label:"hermoso",value:"hermoso"},{label:"Héroe pateador",value:"heroe-pateador"},{label:"Heroina",value:"heroina"},{label:"heroína Kickass",value:"heroina-kickass"},{label:"heterose*ual",value:"heteroseual"},{label:"historia de amor",value:"historia-de-amor"},{label:"Hot Romance",value:"hot-romance"},{label:"Humor",value:"humor"},{label:"Identidad secreta",value:"identidad-secreta"},{label:"Independente",value:"independente"},{label:"Independiente",value:"independiente"},{label:"Inocente",value:"inocente"},{label:"jefe",value:"jefe"},{label:"Jefe / CEO",value:"jefe-ceo"},{label:"kicking",value:"kicking"},{label:"king",value:"king"},{label:"legend",value:"legend"},{label:"Literature",value:"literature"},{label:"loser",value:"loser"},{label:"Love",value:"love"},{label:"Love & Culture",value:"love-culture"},{label:"love after marriage",value:"love-after-marriage"},{label:"love story",value:"love-story"},{label:"LOVEAFTERMARRIAGE",value:"loveaftermarriage"},{label:"lucky dog",value:"lucky-dog"},{label:"Lugar para você Allnovelread",value:"lugar-para-voce-allnovelread"},{label:"luna",value:"luna"},{label:"Madre soltera",value:"madre-soltera"},{label:"Mafia",value:"mafia"},{label:"magical world",value:"magical-world"},{label:"Malentendido",value:"malentendido"},{label:"Maquinación",value:"maquinacion"},{label:"Marriage",value:"marriage"},{label:"Matrimonio",value:"matrimonio"},{label:"Matrimonio por Contrato",value:"matrimonio-por-contrato"},{label:"Matrimonio relámpago",value:"matrimonio-relampago"},{label:"Medico",value:"medico"},{label:"Médico/Médica",value:"medico-medica"},{label:"millonaria",value:"millonaria"},{label:"modificación",value:"modificacion"},{label:"most millions",value:"most-millions"},{label:"Mucama",value:"mucama"},{label:"Mujer súper poderosa",value:"mujer-super-poderosa"},{label:"Multi-Millionairo",value:"multi-millionairo"},{label:"Multimillionairo",value:"multimillionairo"},{label:"Multimillonaria",value:"multimillonaria"},{label:"multimillonario",value:"multimillonario"},{label:"Multimillonario-novela",value:"multimillonario-novela"},{label:"MULTIPLEIDENTITIES",value:"multipleidentities"},{label:"Múltiples identidades",value:"multiples-identidades"},{label:"musculoso",value:"musculoso"},{label:"Nacimiento múltiple",value:"nacimiento-multiple"},{label:"Novia embarazada a la fuga",value:"novia-embarazada-a-la-fuga"},{label:"Obsesión",value:"obsesion"},{label:"Ocultar",value:"ocultar"},{label:"Optimista",value:"optimista"},{label:"others",value:"others"},{label:"Pasión de una noche",value:"pasion-de-una-noche"},{label:"Perao/Segunda chance",value:"perao-segunda-chance"},{label:"Perdedor",value:"perdedor"},{label:"Playboy",value:"playboy"},{label:"poderoso",value:"poderoso"},{label:"polygamy",value:"polygamy"},{label:"Posesivo",value:"posesivo"},{label:"possessive",value:"possessive"},{label:"Possessivo",value:"possessivo"},{label:"Powerful",value:"powerful"},{label:"presente",value:"presente"},{label:"Presidente",value:"presidente"},{label:"princess",value:"princess"},{label:"Protective",value:"protective"},{label:"Protectormadre soltera",value:"protectormadre-soltera"},{label:"Reconquistar a mi pareja",value:"reconquistar-a-mi-pareja"},{label:"rejected",value:"rejected"},{label:"relación",value:"relacion"},{label:"relationship",value:"relationship"},{label:"Renacido",value:"renacido"},{label:"Rey/Reina",value:"rey-reina"},{label:"Rich",value:"rich"},{label:"Rico",value:"rico"},{label:"Ricos",value:"ricos"},{label:"Romance",value:"romance"},{label:"romance caliente",value:"romance-caliente"},{label:"Romance/Romântico",value:"romance-romantico"},{label:"Romántic",value:"romantic"},{label:"Romantica",value:"romantica"},{label:"Romanticas",value:"romanticas"},{label:"Romantico",value:"romantico"},{label:"Secretos",value:"secretos"},{label:"secrets",value:"secrets"},{label:"seductive",value:"seductive"},{label:"Segunda Chance",value:"segunda-chance"},{label:"Segunda oportunidad",value:"segunda-oportunidad"},{label:"STRONGFEMALELEAD",value:"strongfemalelead"},{label:"Subrogación",value:"subrogacion"},{label:"Suspense",value:"suspense"},{label:"Sweet",value:"sweet"},{label:"SWEETLOVE",value:"sweetlove"},{label:"Teenager",value:"teenager"},{label:"Tierno",value:"tierno"},{label:"Tragedia",value:"tragedia"},{label:"Traición",value:"traicion"},{label:"TraiciónReconquistar a mi pareja",value:"traicionreconquistar-a-mi-pareja"},{label:"Triángulo amoroso",value:"triangulo-amoroso"},{label:"Trillizos",value:"trillizos"},{label:"Trio",value:"trio"},{label:"Una noche de pasion",value:"una-noche-de-pasion"},{label:"Universidad",value:"universidad"},{label:"Valente",value:"valente"},{label:"Valiente",value:"valiente"},{label:"Venanza",value:"venanza"},{label:"Werewolf",value:"werewolf"},{label:"Ya",value:"ya"},{label:"Youth",value:"youth"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"16+",value:"16"},{label:"alfa",value:"alfa"},{label:"Allnovelread Sin vuelta atrás",value:"allnovelread-sin-vuelta-atras"},{label:"Alpha",value:"alpha"},{label:"Amor dulce",value:"amor-dulce"},{label:"Amor y odio",value:"amor-y-odio"},{label:"Arrogante-novela",value:"arrogante-novela"},{label:"Billionaire",value:"billionaire"},{label:"Billonario",value:"billonario"},{label:"bxg",value:"bxg"},{label:"CEO",value:"ceo"},{label:"Contemporâneo",value:"contemporaneo"},{label:"Contract marriage",value:"contract-marriage"},{label:"crecimiento-del-personaje-novela",value:"crecimiento-del-personaje-novela"},{label:"Divorce",value:"divorce"},{label:"drama",value:"drama"},{label:"dulce",value:"dulce"},{label:"El incesante acoso de mi ex marido",value:"el-incesante-acoso-de-mi-ex-marido"},{label:"Enganar al mejor amigo de mi novio",value:"enganar-al-mejor-amigo-de-mi-novio"},{label:"Fantasy",value:"fantasy"},{label:"HE",value:"he"},{label:"heterosexual",value:"heterosexual"},{label:"Historia-triste-novela",value:"historia-triste-novela"},{label:"Hombre lobo",value:"hombre-lobo"},{label:"Hot Romance",value:"hot-romance"},{label:"Independiente",value:"independiente"},{label:"Inocente",value:"inocente"},{label:"king",value:"king"},{label:"Love",value:"love"},{label:"love after marriage",value:"love-after-marriage"},{label:"Luna",value:"luna"},{label:"Magical world",value:"magical-world"},{label:"millonaria",value:"millonaria"},{label:"Multi-Millionaire",value:"multi-millionaire"},{label:"Multimillionairo",value:"multimillionairo"},{label:"Multimillonario",value:"multimillonario"},{label:"Nunca Longe Allnovelread",value:"nunca-longe-allnovelread"},{label:"Posesivo",value:"posesivo"},{label:"Querida ex esposa",value:"querida-ex-esposa"},{label:"Romance",value:"romance"},{label:"Romane",value:"romane"},{label:"Romántica",value:"romantica"},{label:"Romanticas",value:"romanticas"},{label:"Romantico",value:"romantico"},{label:"Sweet",value:"sweet"},{label:"SWEETLOVE",value:"sweetlove"},{label:"Te Quero de Volta Allnovelread",value:"te-quero-de-volta-allnovelread"},{label:"Traicion en altar",value:"traicion-en-altar"},{label:"Uma Ferida Que Nunca Se Cura Allnovelread",value:"uma-ferida-que-nunca-se-cura-allnovelread"},{label:"Urban",value:"urban"},{label:"Urban/Realistic",value:"urban-realistic"},{label:"vuelva a mí",value:"vuelva-a-mi"},{label:"Werewolf",value:"werewolf"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Order by",value:"",options:[{label:"Default",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"}]}}});exports.default=u;