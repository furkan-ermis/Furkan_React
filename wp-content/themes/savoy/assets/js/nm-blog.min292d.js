/* NM: Blog script */
(function(b){b.extend(b.nmTheme,{blog_init:function(){var a=this;a.$blogList=b("#nm-blog-list");b("#nm-blog-categories-toggle-link").on("click",function(e){e.preventDefault();var d=b(this);b("#nm-blog-categories-list").slideToggle(200,function(){var f=b(this);d.toggleClass("active");d.hasClass("active")||f.css("display","")})});a.$window.on("load",function(){a.$pageIncludes.hasClass("blog-masonry")&&b("#nm-blog-list").masonry({itemSelector:".post",gutter:0,hiddenStyle:{},visibleStyle:{}})});a.$blogList&&
a.blogInfLoadBind()},blogInfLoadBind:function(){var a=this;a.$blogPaginationWrap=b("#nm-blog-pagination");a.$blogInfLoadWrap=b("#nm-blog-infinite-load");if(a.$blogInfLoadWrap.length)if(a.$blogInfLoadLink=a.$blogInfLoadWrap.children("a"),a.infloadScroll=a.$blogPaginationWrap.hasClass("scroll-mode")?!0:!1,a.infloadScroll){a.infscrollLock=!1;var e,d=Math.round(a.$document.height()-a.$blogPaginationWrap.offset().top),f=parseInt(nm_wp_vars.infloadBufferBlog),c=null;a.$window.off("resize.nmBlogInfLoad").on("resize.nmBlogInfLoad",
function(){c&&clearTimeout(c);c=setTimeout(function(){var g=b("#nm-blog-infinite-load");g.length&&(d=Math.round(a.$document.height()-g.offset().top))},100)});a.$window.off("smartscroll.blogInfScroll").on("smartscroll.blogInfScroll",function(){a.infscrollLock||(e=0+a.$document.height()-a.$window.scrollTop()-a.$window.height(),e-f<d&&a.blogInfLoadGetPage())})}else a.$blogInfLoadLink.on("click",function(g){g.preventDefault();a.blogInfLoadGetPage()})},blogInfLoadGetPage:function(){var a=this;if(a.blogAjax)return!1;
var e=a.$blogInfLoadLink.attr("href");e?(a.$blogPaginationWrap.addClass("loading nm-loader"),e=a.updateUrlParameter(e,"blog_load","1"),a.$document.trigger("nm_blog_infload_before",e),a.blogAjax=b.ajax({url:e,dataType:"html",cache:!1,headers:{"cache-control":"no-cache"},method:"GET",error:function(d,f,c){a.$blogPaginationWrap.removeClass("loading nm-loader");console.log("NM: AJAX error - blogInfLoadGetPage() - "+c)},success:function(d){var f=b("<div>"+d+"</div>"),c=f.find("#nm-blog-list").children();
c.addClass("fade-out");if(a.$pageIncludes.hasClass("blog-masonry")){d=c.find("img");var g=d.last();d.removeAttr("loading");g.on("load",function(){a.$blogList.masonry("appended",c);a.blogInfLoadPrepButton(f);a.$document.trigger("nm_blog_infload_after",c);setTimeout(function(){c.removeClass("fade-out");a.infloadScroll&&a.$window.trigger("scroll");a.blogAjax=!1},300)});a.$blogList.append(c)}else a.$blogList.append(c),a.blogInfLoadPrepButton(f),a.$document.trigger("nm_blog_infload_after",c),setTimeout(function(){c.removeClass("fade-out");
a.infloadScroll&&a.$window.trigger("scroll");a.blogAjax=!1},300)}})):a.infloadScroll&&(a.infscrollLock=!0)},blogInfLoadPrepButton:function(a){(a=a.find("#nm-blog-infinite-load").children("a").attr("href"))?(this.$blogInfLoadLink.attr("href",a),this.$blogPaginationWrap.removeClass("loading nm-loader")):(this.$blogPaginationWrap.addClass("all-pages-loaded"),this.infloadScroll&&(this.infscrollLock=!0))}});b.nmThemeExtensions.blog=b.nmTheme.blog_init})(jQuery);