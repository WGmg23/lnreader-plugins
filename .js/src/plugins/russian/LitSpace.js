var e=this&&this.__awaiter||function(e,l,a,t){return new(a||(a=Promise))((function(i,n){function r(e){try{u(t.next(e))}catch(e){n(e)}}function o(e){try{u(t.throw(e))}catch(e){n(e)}}function u(e){var l;e.done?i(e.value):(l=e.value,l instanceof a?l:new a((function(e){e(l)}))).then(r,o)}u((t=t.apply(e,l||[])).next())}))},l=this&&this.__generator||function(e,l){var a,t,i,n,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(o){return function(u){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;n&&(n=0,o[0]&&(r=0)),r;)try{if(a=1,t&&(i=2&o[0]?t.return:o[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,o[1])).done)return i;switch(t=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,t=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=l.call(e,r)}catch(e){o=[6,e],t=0}finally{a=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@libs/filterInputs"),i=require("@libs/fetch"),n=require("cheerio"),r=a(require("dayjs")),o=function(){function a(){this.id="freedlit.space",this.name="LitSpace",this.site="https://freedlit.space",this.version="1.0.0",this.icon="src/ru/freedlit/icon.png",this.parseDate=function(e){void 0===e&&(e="");var l={"января":1,"февраля":2,"марта":3,"апреля":4,"мая":5,"июня":6,"июля":7,"августа":8,"сентября":9,"октября":10,"ноября":11,"декабря":12},a=e.split(" "),t=a[0],i=a[1],n=a[2];return t&&l[i]&&n?(0,r.default)(n+"-"+l[i]+"-"+t).format("LL"):e||null},this.filters={sort:{label:"Сортировка:",value:"popular",options:[{label:"По популярности",value:"popular"},{label:"По количеству комментариев",value:"comments"},{label:"По количеству лайков",value:"likes"},{label:"По новизне",value:"recent"},{label:"По просмотрам",value:"views"}],type:t.FilterTypes.Picker},genre:{label:"Жанры:",value:{include:[],exclude:[]},options:[{label:"Любой жанр",value:"all"},{label:"Альтернативная история",value:"alternative-history"},{label:"Антиутопия",value:"dystopia"},{label:"Бизнес-литература",value:"business-literature"},{label:"Боевая фантастика",value:"combat-fiction"},{label:"Боевик",value:"action"},{label:"Боевое фэнтези",value:"combat-fantasy"},{label:"Бояръ-Аниме",value:"boyar-anime"},{label:"Героическая фантастика",value:"heroic-fiction"},{label:"Героическое фэнтези",value:"heroic-fantasy"},{label:"Городское фэнтези",value:"urban-fantasy"},{label:"Гримдарк",value:"grimdark"},{label:"Детектив",value:"mystery"},{label:"Детская литература",value:"kids-literature"},{label:"Документальная проза",value:"biography"},{label:"Историческая проза",value:"historical-fiction"},{label:"Исторический детектив",value:"historical-mystery"},{label:"Исторический любовный роман",value:"historical-romantic-novel"},{label:"Историческое фэнтези",value:"historical-fantasy"},{label:"Киберпанк",value:"cyberpunk"},{label:"Космическая фантастика",value:"cosmic-fiction"},{label:"ЛитРПГ",value:"litrpg"},{label:"Лоу / Низкое фэнтези",value:"low-fantasy"},{label:"Любовное фэнтези",value:"romantic-fantasy"},{label:"Любовный роман",value:"romantic-novel"},{label:"Мистика",value:"mystic"},{label:"Мистический детектив",value:"mystic-detective"},{label:"Научная фантастика",value:"science-fiction"},{label:"Подростковая проза",value:"young-adult"},{label:"Политический роман",value:"political-romance"},{label:"Попаданцы",value:"accidental-travel"},{label:"Попаданцы в магические миры",value:"magic-worlds-travel"},{label:"Попаданцы во времени",value:"time-travel"},{label:"Порнотика",value:"pornotica"},{label:"Постапокалипсис",value:"post-apocalypse"},{label:"Поэзия",value:"poetry"},{label:"Приключения",value:"adventure"},{label:"Публицистика",value:"journalism"},{label:"Пьеса",value:"play"},{label:"Развитие личности",value:"how-to-book"},{label:"Разное",value:"other"},{label:"Реализм",value:"Realism"},{label:"РеалРПГ",value:"realrpg"},{label:"Репликация",value:"replication"},{label:"Романтическая эротика",value:"romantic-erotic-fiction"},{label:"Сказка",value:"fairy-tale"},{label:"Слэш",value:"slash"},{label:"Современная проза",value:"modern-prose"},{label:"Современный любовный роман",value:"modern-romantic-novel"},{label:"Социальная фантастика",value:"social-fiction"},{label:"Стимпанк",value:"steampunk"},{label:"Сценарий",value:"scenario"},{label:"Сюаньхуань",value:"xuanhuan"},{label:"Сянься",value:"xianxia"},{label:"Тёмное фэнтези",value:"dark-fantasy"},{label:"Триллер",value:"thriller"},{label:"Уся",value:"wuxia"},{label:"Фантастика",value:"fiction"},{label:"Фантастический детектив",value:"mystery-fiction"},{label:"Фанфик",value:"fan-fiction"},{label:"Фемслэш",value:"femslash"},{label:"Фэнтези",value:"fantasy"},{label:"Хоррор",value:"horror"},{label:"Шпионский детектив",value:"spy-crime"},{label:"Эпическое фэнтези",value:"epic-fantasy"},{label:"Эротика",value:"erotic-fiction"},{label:"Эротическая фантастика",value:"erotic-fiction"},{label:"Эротический фанфик",value:"erotic-fan-fiction"},{label:"Эротическое фэнтези",value:"erotic-fantasy"},{label:"Этническое фэнтези",value:"ethnic-fantasy"},{label:"Юмор",value:"humor"},{label:"Юмористическая фантастика",value:"humor-fiction"},{label:"Юмористическое фэнтези",value:"humor-fantasy"},{label:"RPS",value:"rps"}],type:t.FilterTypes.ExcludableCheckboxGroup},status:{label:"Статус:",value:"all",options:[{label:"Любой статус",value:"all"},{label:"В процессе",value:"in-process"},{label:"Завершено",value:"finished"}],type:t.FilterTypes.Picker},access:{label:"Доступ:",value:"all",options:[{label:"Любой доступ",value:"all"},{label:"Бесплатные",value:"free"},{label:"Платные",value:"paid"}],type:t.FilterTypes.Picker},adult:{label:"Возрастные ограничения:",value:"hide",options:[{label:"Скрыть 18+",value:"hide"},{label:"Показать +18",value:"show"}],type:t.FilterTypes.Picker}}}return a.prototype.popularNovels=function(a,t){return e(this,arguments,void 0,(function(e,a){var t,r,o,u,v,s,c,b,d,h,f,p,y,m,x=this,g=a.showLatestNovels,k=a.filters;return l(this,(function(l){switch(l.label){case 0:return t=this.site+"/get-books/all/list/"+e+"?sort=",t+=g?"recent":(null===(v=null==k?void 0:k.sort)||void 0===v?void 0:v.value)||"popular",t+="&status="+((null===(s=null==k?void 0:k.status)||void 0===s?void 0:s.value)||"all"),t+="&access="+((null===(c=null==k?void 0:k.access)||void 0===c?void 0:c.value)||"all"),t+="&adult="+((null===(b=null==k?void 0:k.adult)||void 0===b?void 0:b.value)||"hide"),(null===(f=null===(h=null===(d=null==k?void 0:k.genre)||void 0===d?void 0:d.value)||void 0===h?void 0:h.include)||void 0===f?void 0:f.length)&&(t+=k.genre.value.include.map((function(e){return"&genres_included[]="+e})).join("")),(null===(m=null===(y=null===(p=null==k?void 0:k.genre)||void 0===p?void 0:p.value)||void 0===y?void 0:y.exclude)||void 0===m?void 0:m.length)&&(t+=k.genre.value.exclude.map((function(e){return"&genres_excluded[]="+e})).join("")),[4,(0,i.fetchApi)(t).then((function(e){return e.text()}))];case 1:return r=l.sent(),o=(0,n.load)(r),u=[],o("#bookListBlock > div > div").each((function(e,l){var a,t,i,n=null===(a=o(l).find("div > h4 > a").text())||void 0===a?void 0:a.trim(),r=null===(t=o(l).find("div > a > img").attr("src"))||void 0===t?void 0:t.trim(),v=null===(i=o(l).find("div > h4 > a").attr("href"))||void 0===i?void 0:i.trim();n&&v&&u.push({name:n,cover:r,path:v.replace(x.site,"")})})),[2,u]}}))}))},a.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,t,r,o,u,v,s=this;return l(this,(function(l){switch(l.label){case 0:return[4,(0,i.fetchApi)(this.site+a).then((function(e){return e.text()}))];case 1:return e=l.sent(),t=(0,n.load)(e),r={path:a,name:t(".book-info h4").text(),cover:null===(u=t(".book-cover > div > img").attr("src"))||void 0===u?void 0:u.trim(),summary:null===(v=t("#nav-home").text())||void 0===v?void 0:v.trim(),author:t(".book-info h5 > a").text(),genres:t(".genre-list > a").map((function(e,l){return t(l).text()})).get().join(",")},o=[],t("a.chapter-line").each((function(e,l){var a=t(l).find("h6").text(),i=t(l).attr("href");if(a&&i){var n=t(l).find('span[class="date"]').text();o.push({name:a,path:i.replace(s.site,""),releaseTime:s.parseDate(n),chapterNumber:e+1})}})),r.chapters=o,[2,r]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,t;return l(this,(function(l){switch(l.label){case 0:return[4,(0,i.fetchApi)(this.site+a).then((function(e){return e.text()}))];case 1:return e=l.sent(),(t=(0,n.load)(e))("div.mobile-block").remove(),t("div.standart-block").remove(),[2,t('div[class="chapter"]').html()||""]}}))}))},a.prototype.searchNovels=function(a){return e(this,void 0,void 0,(function(){var e,t,r,o,u=this;return l(this,(function(l){switch(l.label){case 0:return e=this.site+"/search?query="+a+"&type=all",[4,(0,i.fetchApi)(e).then((function(e){return e.text()}))];case 1:return t=l.sent(),r=(0,n.load)(t),o=[],r("#bookGridBlock > div").each((function(e,l){var a,t,i,n=null===(a=r(l).find("h4 > a").text())||void 0===a?void 0:a.trim(),v=null===(t=r(l).find("a > img").attr("src"))||void 0===t?void 0:t.trim(),s=null===(i=r(l).find("h4 > a").attr("href"))||void 0===i?void 0:i.trim();n&&s&&o.push({name:n,cover:v,path:s.replace(u.site,"")})})),[2,o]}}))}))},a}();exports.default=new o;