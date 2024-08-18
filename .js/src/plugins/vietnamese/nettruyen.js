var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=e.call(t,a)}catch(t){u=[6,t],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),r=require("@libs/novelStatus"),i=require("cheerio"),o=function(){function o(){this.id="nettruyen",this.name="Nettruyen",this.icon="src/vi/nettruyen/icon.png",this.site="https://nettruyen.com.vn",this.version="1.0.0"}return o.prototype.parseNovels=function(t){var e=this,n=[];return t("#listchuong > ul > li > a.thumb").each((function(r,i){var o=i.attribs.href;if(o){var a=i.attribs.title,u=e.site+"/"+t(i).find("img").first().attr("src");n.push({path:"/"+o,name:a,cover:u})}})),n},o.prototype.popularNovels=function(r){return t(this,void 0,void 0,(function(){var t,o;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"/xem-nhieu/trang-").concat(r,".html"),[4,(0,n.fetchApi)(t).then((function(t){return t.text()}))];case 1:return o=e.sent(),[2,this.parseNovels((0,i.load)(o))]}}))}))},o.prototype.parseChapters=function(t){var e=[];return t("ul.list-unstyled > li > a").each((function(t,n){var r,i=n.attribs.href;if(i){var o=n.attribs.title;e.push({path:"/"+i,name:o,chapterNumber:Number(null===(r=o.match(/Chương (\d+)/))||void 0===r?void 0:r[1])})}})),e},o.prototype.parseNovel=function(o){return t(this,void 0,void 0,(function(){var t,a,u,s;return e(this,(function(e){switch(e.label){case 0:return t=this.site+o,[4,(0,n.fetchApi)(t).then((function(t){return t.text()}))];case 1:return a=e.sent(),u=(0,i.load)(a),(s={path:o,name:u(".gioithieutruyen.profile-info > h1").text().trim(),chapters:[],totalPages:Number(u(".phantrang > span:nth-child(2)").text())||1}).cover=this.site+"/"+u(".img-thumb > img").attr("src"),u(".thongtintruyen.note.note-info").each((function(t,e){switch(u(e).find("strong").text().trim()){case"Tác giả":s.author=u(e).text().replace(/Tác giả\s+\n?:/,"");break;case"Trạng thái":var n=u(e).text();n.includes("Đang ra")?s.status=r.NovelStatus.Ongoing:n.includes("Hoàn thành")?s.status=r.NovelStatus.Completed:s.status=r.NovelStatus.Unknown;break;case"Thể loại":s.genres=u("a > span").toArray().map((function(t){return u(t).text()})).join(",")}})),s.summary=u(".gioithieutruyen > .gioithieutruyen").text().trim(),s.chapters=this.parseChapters(u),[2,s]}}))}))},o.prototype.parsePage=function(r,o){return t(this,void 0,void 0,(function(){var t,a,u,s;return e(this,(function(e){switch(e.label){case 0:if(!(t=null===(s=r.match(/-(\d+)\//))||void 0===s?void 0:s[1]))throw new Error("Cant parse page");return a="".concat(this.site,"/ajax.chuong.php?id=").concat(t,"&page=").concat(o,"&url=").concat(r.replace(/\//g,""),"&loai=truyendich"),[4,(0,n.fetchApi)(a).then((function(t){return t.text()}))];case 1:return u=e.sent(),[2,{chapters:this.parseChapters((0,i.load)(u))}]}}))}))},o.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,o;return e(this,(function(e){switch(e.label){case 0:return t=this.site+r,[4,(0,n.fetchApi)(t).then((function(t){return t.text()}))];case 1:return o=e.sent(),[2,(0,i.load)(o)("#noidungchap").html()||""]}}))}))},o.prototype.searchNovels=function(){return t(this,void 0,void 0,(function(){return e(this,(function(t){throw new Error("Method not implemented.")}))}))},o}();exports.default=new o;