import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, F as Fragment } from './astro.dd323fdc.mjs';
import { a as getBlogsByCategory, g as getDataHomePage, $ as $$Base } from './pages/404.astro.4529cbc9.mjs';
import { s as server_url, $ as $$PopularPost } from './pages/_slug_.astro.0cbee8a1.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                           */
const $$Astro$4 = createAstro();
const $$MainPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MainPost;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-8 col-md-8 col-sm-8">
  <div class="slick_slider">
    <!-- {
      posts.map((post:any, i:number) => (
          <div class="single_iteam">
          <a href={post.slug}>
            <img src={\`\${server_url.server}\${post.feedImage}\`} alt="" />
          </a>
          <div class="slider_article">
            <h2>
              <a class="slider_tittle" href={post.slug}>
                {post.title}
              </a>
            </h2>
            <p>
              {post.description}
            </p>
          </div>
        </div>
      ))
    } -->
    <div class="single_iteam">
      <a${addAttribute(posts[0].slug, "href")}>
        <img${addAttribute(`${server_url.server}${posts[0].feedImage}`, "src")} alt="">
      </a>
      <div class="slider_article">
        <h2>
          <a class="slider_tittle"${addAttribute(posts[0].slug, "href")}>
            ${posts[0].title}
          </a>
        </h2>
        <p>
          ${posts[0].description}
        </p>
      </div>
    </div>
  </div>
</div>`;
}, "C:/D/python_project/frontend-astro/src/layouts/home/MainPost.astro", void 0);

const $$Astro$3 = createAstro();
const $$LastestPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LastestPost;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-4 col-md-4 col-sm-4">
  <div class="latest_post">
    <h2><span>Latest post</span></h2>
    <div class="latest_post_container">
      <div id="prev-button"><i class="fa fa-chevron-up"></i></div>
      <ul class="latest_postnav">
        ${posts.map((post, i) => renderTemplate`<li>
              <div class="media">
                <a href="pages/single_page.html" class="media-left">
                  <img${addAttribute(`${server_url.server}${post.feedImage}`, "src")} alt="">
                </a>
                <div class="media-body">
                  <a${addAttribute(post.slug, "href")} class="catg_title">
                    ${post.title}
                  </a>
                </div>
              </div>
            </li>`)}
        <!-- <li>
          <div class="media">
            <a href="pages/single_page.html" class="media-left">
              <img alt="" src="images/post_img1.jpg" />
            </a>
            <div class="media-body">
              <a href="pages/single_page.html" class="catg_title">
                Aliquam malesuada diam eget turpis varius 1</a
              >
            </div>
          </div>
        </li>
        <li>
          <div class="media">
            <a href="pages/single_page.html" class="media-left">
              <img alt="" src="images/post_img1.jpg" />
            </a>
            <div class="media-body">
              <a href="pages/single_page.html" class="catg_title">
                Aliquam malesuada diam eget turpis varius 2</a
              >
            </div>
          </div>
        </li>
        <li>
          <div class="media">
            <a href="pages/single_page.html" class="media-left">
              <img alt="" src="images/post_img1.jpg" />
            </a>
            <div class="media-body">
              <a href="pages/single_page.html" class="catg_title">
                Aliquam malesuada diam eget turpis varius 3</a
              >
            </div>
          </div>
        </li>
        <li>
          <div class="media">
            <a href="pages/single_page.html" class="media-left">
              <img alt="" src="images/post_img1.jpg" />
            </a>
            <div class="media-body">
              <a href="pages/single_page.html" class="catg_title">
                Aliquam malesuada diam eget turpis varius 4</a
              >
            </div>
          </div>
        </li>
        <li>
          <div class="media">
            <a href="pages/single_page.html" class="media-left">
              <img alt="" src="images/post_img1.jpg" />
            </a>
            <div class="media-body">
              <a href="pages/single_page.html" class="catg_title">
                Aliquam malesuada diam eget turpis varius 2</a
              >
            </div>
          </div>
        </li> -->
      </ul>
      <div id="next-button"><i class="fa fa-chevron-down"></i></div>
    </div>
  </div>
</div>`;
}, "C:/D/python_project/frontend-astro/src/layouts/home/LastestPost.astro", void 0);

const $$Astro$2 = createAstro();
const $$ContentLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContentLeft;
  const postsThoiSu = await getBlogsByCategory("thoi-su", 5).then(
    (response) => response.blogsByCategory
  );
  const postsGiaoDuc = await getBlogsByCategory("giao-duc", 5).then(
    (e) => e.blogsByCategory
  );
  await getBlogsByCategory("kinh-doanh", 5).then(
    (e) => e.blogsByCategory
  );
  const postsKhoaHoc = await getBlogsByCategory("khoa-hoc", 5).then(
    (e) => e.blogsByCategory
  );
  const postsTheThao = await getBlogsByCategory("the-thao", 5).then(
    (e) => e.blogsByCategory
  );
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-8 col-md-8 col-sm-8">
  <div class="left_content">
    <div class="single_post_content">
      <h2><span>Thời sự</span></h2>
      ${postsThoiSu && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
            <div class="single_post_content_left">
              <ul class="business_catgnav wow fadeInDown">
                <li>
                  <figure class="bsbig_fig">
                    <a${addAttribute(postsThoiSu[0].slug, "href")} class="featured_img">
                      <img${addAttribute(`${server_url.server}${postsThoiSu[0].feedImage}`, "src")}${addAttribute(postsThoiSu[0].title, "alt")}>
                      <span class="overlay"></span>
                    </a>
                    <figcaption>
                      <a${addAttribute(postsThoiSu[0].slug, "href")}>${postsThoiSu[0].title}</a>
                    </figcaption>
                    <p>${postsThoiSu[0].description}</p>
                  </figure>
                </li>
              </ul>
            </div>
            <div class="single_post_content_right">
              <ul class="spost_nav">
                ${postsThoiSu.slice(1).map((item, index) => renderTemplate`<li>
                    <div class="media wow fadeInDown">
                      <a${addAttribute(item.slug, "href")} class="media-left">
                        <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feedImage}`, "src")}>
                      </a>
                      <div class="media-body">
                        <a${addAttribute(item.slug, "href")} class="catg_title">
                          ${item.title}
                        </a>
                      </div>
                    </div>
                  </li>`)}
              </ul>
            </div>
          ` })}`}
    </div>
    <div class="edu_sport_area">
      <div class="edu">
        <div class="single_post_content">
          <h2><span>Giáo dục</span></h2>
          ${postsGiaoDuc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
                <ul class="business_catgnav wow fadeInDown">
                  <li>
                    <figure class="bsbig_fig">
                      <a${addAttribute(postsGiaoDuc[0].slug, "href")} class="featured_img">
                        <img${addAttribute(postsGiaoDuc[0].title, "alt")}${addAttribute(`${server_url.server}${postsGiaoDuc[0].feedImage}`, "src")}>
                        <span class="overlay"></span>
                      </a>
                      <figcaption>
                        <a${addAttribute(postsGiaoDuc[0].slug, "href")}>
                          ${postsGiaoDuc[0].title}
                        </a>
                      </figcaption>
                      <p>${postsGiaoDuc[0].description}</p>
                    </figure>
                  </li>
                </ul>
                <ul class="spost_nav">
                  ${postsGiaoDuc.slice(1).map((item, index) => renderTemplate`<li>
                      <div class="media wow fadeInDown">
                        <a${addAttribute(item.slug, "href")} class="media-left">
                          <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feedImage}`, "src")}>
                        </a>
                        <div class="media-body">
                          <a${addAttribute(item.slug, "href")} class="catg_title">
                            ${item.title}
                          </a>
                        </div>
                      </div>
                    </li>`)}
                </ul>
              ` })}`}
        </div>
      </div>
      <div class="sport">
        <div class="single_post_content">
          <h2><span>Khoa Học</span></h2>
          ${postsKhoaHoc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
                <ul class="business_catgnav">
                  <li>
                    <figure class="bsbig_fig wow fadeInDown">
                      <a${addAttribute(postsKhoaHoc[0].slug, "href")} class="featured_img">
                        <img${addAttribute(postsKhoaHoc[0].title, "alt")}${addAttribute(`${server_url.server}${postsKhoaHoc[0].feedImage}`, "src")}>
                        <span class="overlay"></span>
                      </a>
                      <figcaption>
                        <a${addAttribute(postsKhoaHoc[0].slug, "href")}>
                          ${postsKhoaHoc[0].title}
                        </a>
                      </figcaption>
                      <p>${postsKhoaHoc[0].description}</p>
                    </figure>
                  </li>
                </ul>
                <ul class="spost_nav">
                  ${postsKhoaHoc.slice(1).map((item, index) => renderTemplate`<li>
                      <div class="media wow fadeInDown">
                        <a${addAttribute(item.slug, "href")} class="media-left">
                          <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feedImage}`, "src")}>
                        </a>
                        <div class="media-body">
                          <a${addAttribute(item.slug, "href")} class="catg_title">
                            ${item.title}
                          </a>
                        </div>
                      </div>
                    </li>`)}
                </ul>
              ` })}`}
        </div>
      </div>
    </div>
    <div class="edu_sport_area">
      <div class="edu">
        <div class="single_post_content">
          <h2><span>Giáo dục</span></h2>
          ${postsGiaoDuc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
                <ul class="business_catgnav wow fadeInDown">
                  <li>
                    <figure class="bsbig_fig">
                      <a${addAttribute(postsGiaoDuc[0].slug, "href")} class="featured_img">
                        <img${addAttribute(postsGiaoDuc[0].title, "alt")}${addAttribute(`${server_url.server}${postsGiaoDuc[0].feedImage}`, "src")}>
                        <span class="overlay"></span>
                      </a>
                      <figcaption>
                        <a${addAttribute(postsGiaoDuc[0].slug, "href")}>
                          ${postsGiaoDuc[0].title}
                        </a>
                      </figcaption>
                      <p>${postsGiaoDuc[0].description}</p>
                    </figure>
                  </li>
                </ul>
                <ul class="spost_nav">
                  ${postsGiaoDuc.slice(1).map((item, index) => renderTemplate`<li>
                      <div class="media wow fadeInDown">
                        <a${addAttribute(item.slug, "href")} class="media-left">
                          <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feedImage}`, "src")}>
                        </a>
                        <div class="media-body">
                          <a${addAttribute(item.slug, "href")} class="catg_title">
                            ${item.title}
                          </a>
                        </div>
                      </div>
                    </li>`)}
                </ul>
              ` })}`}
        </div>
      </div>
      <div class="sport">
        <div class="single_post_content">
          <h2><span>Thể Thao</span></h2>
          ${postsTheThao && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
                <ul class="business_catgnav">
                  <li>
                    <figure class="bsbig_fig wow fadeInDown">
                      <a${addAttribute(postsTheThao[0].slug, "href")} class="featured_img">
                        <img${addAttribute(postsTheThao[0].title, "alt")}${addAttribute(`${server_url.server}${postsTheThao[0].feedImage}`, "src")}>
                        <span class="overlay"></span>
                      </a>
                      <figcaption>
                        <a${addAttribute(postsTheThao[0].slug, "href")}>
                          ${postsTheThao[0].title}
                        </a>
                      </figcaption>
                      <p>${postsTheThao[0].description}</p>
                    </figure>
                  </li>
                </ul>
                <ul class="spost_nav">
                  ${postsTheThao.slice(1).map((item, index) => renderTemplate`<li>
                      <div class="media wow fadeInDown">
                        <a${addAttribute(item.slug, "href")} class="media-left">
                          <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feedImage}`, "src")}>
                        </a>
                        <div class="media-body">
                          <a${addAttribute(item.slug, "href")} class="catg_title">
                            ${item.title}
                          </a>
                        </div>
                      </div>
                    </li>`)}
                </ul>
              ` })}`}
        </div>
      </div>
    </div>
    <!-- <div class="single_post_content">
      <h2><span>Photography</span></h2>
      <ul class="photograph_nav wow fadeInDown">
        <li>
          <div class="photo_grid">
            <figure class="effect-layla">
              <a
                class="fancybox-buttons"
                data-fancybox-group="button"
                href="images/photograph_img2.jpg"
                title="Photography Ttile 1"
              >
                <img src="images/photograph_img2.jpg" alt="" /></a
              >
            </figure>
          </div>
        </li>
        <li>
          <div class="photo_grid">
            <figure class="effect-layla">
              <a
                class="fancybox-buttons"
                data-fancybox-group="button"
                href="images/photograph_img3.jpg"
                title="Photography Ttile 2"
              >
                <img src="images/photograph_img3.jpg" alt="" />
              </a>
            </figure>
          </div>
        </li>
        <li>
          <div class="photo_grid">
            <figure class="effect-layla">
              <a
                class="fancybox-buttons"
                data-fancybox-group="button"
                href="images/photograph_img4.jpg"
                title="Photography Ttile 3"
              >
                <img src="images/photograph_img4.jpg" alt="" />
              </a>
            </figure>
          </div>
        </li>
        <li>
          <div class="photo_grid">
            <figure class="effect-layla">
              <a
                class="fancybox-buttons"
                data-fancybox-group="button"
                href="images/photograph_img4.jpg"
                title="Photography Ttile 4"
              >
                <img src="images/photograph_img4.jpg" alt="" />
              </a>
            </figure>
          </div>
        </li>
        <li>
          <div class="photo_grid">
            <figure class="effect-layla">
              <a
                class="fancybox-buttons"
                data-fancybox-group="button"
                href="images/photograph_img2.jpg"
                title="Photography Ttile 5"
              >
                <img src="images/photograph_img2.jpg" alt="" />
              </a>
            </figure>
          </div>
        </li>
        <li>
          <div class="photo_grid">
            <figure class="effect-layla">
              <a
                class="fancybox-buttons"
                data-fancybox-group="button"
                href="images/photograph_img3.jpg"
                title="Photography Ttile 6"
              >
                <img src="images/photograph_img3.jpg" alt="" />
              </a>
            </figure>
          </div>
        </li>
      </ul>
    </div> -->
    <!-- <div class="single_post_content">
      <h2><span>Games</span></h2>
      <div class="single_post_content_left">
        <ul class="business_catgnav">
          <li>
            <figure class="bsbig_fig wow fadeInDown">
              <a class="featured_img" href="pages/single_page.html">
                <img src="images/featured_img1.jpg" alt="" />
                <span class="overlay"></span>
              </a>
              <figcaption>
                <a href="pages/single_page.html"
                  >Proin rhoncus consequat nisl eu ornare mauris</a
                >
              </figcaption>
              <p>
                Nunc tincidunt, elit non cursus euismod, lacus augue ornare
                metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a
                phare...
              </p>
            </figure>
          </li>
        </ul>
      </div>
      <div class="single_post_content_right">
        <ul class="spost_nav">
          <li>
            <div class="media wow fadeInDown">
              <a href="pages/single_page.html" class="media-left">
                <img alt="" src="images/post_img1.jpg" />
              </a>
              <div class="media-body">
                <a href="pages/single_page.html" class="catg_title">
                  Aliquam malesuada diam eget turpis varius 1</a
                >
              </div>
            </div>
          </li>
          <li>
            <div class="media wow fadeInDown">
              <a href="pages/single_page.html" class="media-left">
                <img alt="" src="images/post_img2.jpg" />
              </a>
              <div class="media-body">
                <a href="pages/single_page.html" class="catg_title">
                  Aliquam malesuada diam eget turpis varius 2</a
                >
              </div>
            </div>
          </li>
          <li>
            <div class="media wow fadeInDown">
              <a href="pages/single_page.html" class="media-left">
                <img alt="" src="images/post_img1.jpg" />
              </a>
              <div class="media-body">
                <a href="pages/single_page.html" class="catg_title">
                  Aliquam malesuada diam eget turpis varius 3</a
                >
              </div>
            </div>
          </li>
          <li>
            <div class="media wow fadeInDown">
              <a href="pages/single_page.html" class="media-left">
                <img alt="" src="images/post_img2.jpg" />
              </a>
              <div class="media-body">
                <a href="pages/single_page.html" class="catg_title">
                  Aliquam malesuada diam eget turpis varius 4</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</div>`;
}, "C:/D/python_project/frontend-astro/src/layouts/home/ContentLeft.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContentRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentRight;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-4 col-md-4 col-sm-4">
  <aside class="right_content">
    ${renderComponent($$result, "PopularPost", $$PopularPost, {})}
    <div class="single_sidebar">
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#category" aria-controls="home" role="tab" data-toggle="tab">Category</a>
        </li>
        <li role="presentation">
          <a href="#video" aria-controls="profile" role="tab" data-toggle="tab">Video</a>
        </li>
        <li role="presentation">
          <a href="#comments" aria-controls="messages" role="tab" data-toggle="tab">Comments</a>
        </li>
      </ul>
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="category">
          <ul>
            <li class="cat-item"><a href="#">Sports</a></li>
            <li class="cat-item"><a href="#">Fashion</a></li>
            <li class="cat-item"><a href="#">Business</a></li>
            <li class="cat-item"><a href="#">Technology</a></li>
            <li class="cat-item"><a href="#">Games</a></li>
            <li class="cat-item"><a href="#">Life &amp; Style</a></li>
            <li class="cat-item"><a href="#">Photography</a></li>
          </ul>
        </div>
        <div role="tabpanel" class="tab-pane" id="video">
          <div class="vide_area">
            <iframe width="100%" height="250" src="" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="comments">
          <ul class="spost_nav">
            <li>
              <div class="media wow fadeInDown">
                <a href="pages/single_page.html" class="media-left">
                  <img alt="" src="images/post_img1.jpg">
                </a>
                <div class="media-body">
                  <a href="pages/single_page.html" class="catg_title">
                    Aliquam malesuada diam eget turpis varius 1</a>
                </div>
              </div>
            </li>
            <li>
              <div class="media wow fadeInDown">
                <a href="pages/single_page.html" class="media-left">
                  <img alt="" src="images/post_img2.jpg">
                </a>
                <div class="media-body">
                  <a href="pages/single_page.html" class="catg_title">
                    Aliquam malesuada diam eget turpis varius 2</a>
                </div>
              </div>
            </li>
            <li>
              <div class="media wow fadeInDown">
                <a href="pages/single_page.html" class="media-left">
                  <img alt="" src="images/post_img1.jpg">
                </a>
                <div class="media-body">
                  <a href="pages/single_page.html" class="catg_title">
                    Aliquam malesuada diam eget turpis varius 3</a>
                </div>
              </div>
            </li>
            <li>
              <div class="media wow fadeInDown">
                <a href="pages/single_page.html" class="media-left">
                  <img alt="" src="images/post_img2.jpg">
                </a>
                <div class="media-body">
                  <a href="pages/single_page.html" class="catg_title">
                    Aliquam malesuada diam eget turpis varius 4</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="single_sidebar wow fadeInDown">
      <h2><span>Sponsor</span></h2>
      <a class="sideAdd" href="#"><img src="images/add_img.jpg" alt=""></a>
    </div>
    <div class="single_sidebar wow fadeInDown">
      <h2><span>Category Archive</span></h2>
      <select class="catgArchive">
        <option>Select Category</option>
        <option>Life styles</option>
        <option>Sports</option>
        <option>Technology</option>
        <option>Treads</option>
      </select>
    </div>
    <div class="single_sidebar wow fadeInDown">
      <h2><span>Links</span></h2>
      <ul>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Rss Feed</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Life &amp; Style</a></li>
      </ul>
    </div>
  </aside>
</div>`;
}, "C:/D/python_project/frontend-astro/src/layouts/home/ContentRight.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const dataHomePage = await getDataHomePage();
  if (!dataHomePage)
    return Astro2.redirect("/404");
  const posts = dataHomePage.allBlog.slice(0, 5);
  const lastestPost = dataHomePage.allBlog.slice(0, 5);
  Astro2.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=5400");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tin t\u1EE9c m\u1EDBi nh\u1EA5t" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main>
    <!-- <NavArea />
    <LaststNews /> -->
    <section id="sliderSection">
      <div class="row">
        ${renderComponent($$result2, "MainPost", $$MainPost, { "posts": posts })}
        ${renderComponent($$result2, "LastestPost", $$LastestPost, { "posts": lastestPost })}
      </div>
    </section>
    <section id="contentSection">
      <div class="row">
        ${renderComponent($$result2, "ContentLeft", $$ContentLeft, {})}
        ${renderComponent($$result2, "ContentRight", $$ContentRight, { "posts": lastestPost })}
      </div>
    </section>
  </main>
` })}`;
}, "C:/D/python_project/frontend-astro/src/pages/index.astro", void 0);

const $$file = "C:/D/python_project/frontend-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
