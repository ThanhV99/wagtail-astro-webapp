import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, b as renderComponent, F as Fragment } from './astro.314a455b.mjs';
import { $ as $$Base } from './pages/404.astro.c37ffab6.mjs';
import { s as server_url } from './pages/_slug_.astro.aa4b2a0f.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                           */
const $$Astro$6 = createAstro();
const $$MainPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MainPost;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-8 col-md-8 col-sm-8">
  <div class="slick_slider">
    ${posts.map((post, i) => renderTemplate`<div class="single_iteam">
          <a${addAttribute(post.meta.slug, "href")}>
            <img${addAttribute(`${server_url.server}${post.feed_image.meta.download_url}`, "src")} alt="">
          </a>
          <div class="slider_article">
            <h2>
              <a class="slider_tittle"${addAttribute(post.meta.slug, "href")}>
                ${post.title}
              </a>
            </h2>
            <p>
              ${post.description}
            </p>
          </div>
        </div>`)}
  </div>
</div>`;
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/layouts/home/MainPost.astro", void 0);

const fetchCategoriesList = async () => {
  const response = await fetch(`${server_url.server}${server_url.listCategories}`);
  const data = await response.json();
  return data;
};

const $$Astro$5 = createAstro();
const $$NavArea = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NavArea;
  let categories;
  try {
    categories = await fetchCategoriesList();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return renderTemplate`${maybeRenderHead()}<section id="navArea">
  <nav class="navbar navbar-inverse" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav main_nav">
        <li class="active">
          <a href=""><span class="fa fa-home desktop-home"></span><span class="mobile-show">Home</span></a>
        </li>
        ${categories && categories.items.map((item, index) => renderTemplate`<li>
                <a${addAttribute(item.slug, "href")}>${item.name}</a>
              </li>`)}

        <!-- <li class="dropdown">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-expanded="false">Mobile</a
          >
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Android</a></li>
            <li><a href="#">Samsung</a></li>
            <li><a href="#">Nokia</a></li>
            <li><a href="#">Walton Mobile</a></li>
            <li><a href="#">Sympony</a></li>
          </ul>
        </li>
        <li><a href="#">Laptops</a></li>
        <li><a href="#">Tablets</a></li>
        <li><a href="pages/contact.html">Contact Us</a></li>
        <li><a href="pages/404.html">404 Page</a></li> -->
      </ul>
    </div>
  </nav>
</section>`;
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/layouts/NavArea.astro", void 0);

const $$Astro$4 = createAstro();
const $$LastestNews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LastestNews;
  return renderTemplate`${maybeRenderHead()}<section id="newsSection">
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <div class="latest_newsarea">
        <span>Latest News</span>
        <ul id="ticker01" class="news_sticker">
          <li>
            <a href="#"><img src="images/news_thumbnail3.jpg" alt="">My First News Item</a>
          </li>
          <li>
            <a href="#"><img src="images/news_thumbnail3.jpg" alt="">My Second News
              Item</a>
          </li>
          <li>
            <a href="#"><img src="images/news_thumbnail3.jpg" alt="">My Third News Item</a>
          </li>
          <li>
            <a href="#"><img src="images/news_thumbnail3.jpg" alt="">My Four News Item</a>
          </li>
          <li>
            <a href="#"><img src="images/news_thumbnail3.jpg" alt="">My Five News Item</a>
          </li>
          <li>
            <a href="#"><img src="images/news_thumbnail3.jpg" alt="">My Six News Item</a>
          </li>
          <li>
            <a href="#"><img src="images/news_thumbnail3.jpg" alt="">My Seven News Item</a>
          </li>
          <li>
            <a href="#"><img src="images/news_thumbnail3.jpg" alt="">My Eight News Item</a>
          </li>
          <li>
            <a href="#"><img src="images/news_thumbnail2.jpg" alt="">My Nine News Item</a>
          </li>
        </ul>
        <div class="social_area">
          <ul class="social_nav">
            <li class="facebook"><a href="https://www.facebook.com/"></a></li>
            <li class="twitter"><a href="#"></a></li>
            <li class="flickr"><a href="#"></a></li>
            <li class="pinterest"><a href="#"></a></li>
            <li class="googleplus"><a href="#"></a></li>
            <li class="vimeo"><a href="#"></a></li>
            <li class="youtube"><a href="#"></a></li>
            <li class="mail"><a href="#"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>`;
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/layouts/home/LastestNews.astro", void 0);

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
                  <img${addAttribute(`${server_url.server}${post.feed_image.meta.download_url}`, "src")} alt="">
                </a>
                <div class="media-body">
                  <a href="pages/single_page.html" class="catg_title">
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
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/layouts/home/LastestPost.astro", void 0);

const fetchPostsList = async (type, fields, order) => {
  const response = await fetch(`${server_url.server}${server_url.listPosts}?type=${type}&fields=${fields}&order=${order}`);
  const data = await response.json();
  return data;
};
const fetchFilterCategories = async (type, fields, order, limit, categoriesid) => {
  const response = await fetch(`${server_url.server}${server_url.listPosts}?type=${type}&fields=${fields}&order=${order}&limit=${limit}&categories=${categoriesid}`);
  console.log(`${server_url.server}${server_url.listPosts}?type=${type}&fields=${fields}&order=${order}&limit=${limit}&categories=${categoriesid}`);
  const data = await response.json();
  return data;
};

const $$Astro$2 = createAstro();
const $$ContentLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContentLeft;
  let postsThoiSu;
  let postsGiaoDuc;
  let postsKinhDoang;
  let postsKhoaHoc;
  let postsTheThao;
  try {
    postsThoiSu = await fetchFilterCategories(
      "blog.BlogPage",
      "description,date_post,feed_image,categories(name),author",
      "-first_published_at",
      5,
      3
    );
    postsGiaoDuc = await fetchFilterCategories(
      "blog.BlogPage",
      "description,date_post,feed_image,categories(name),author",
      "-first_published_at",
      5,
      1
    );
    postsKinhDoang = await fetchFilterCategories(
      "blog.BlogPage",
      "description,date_post,feed_image,categories(name),author",
      "-first_published_at",
      5,
      4
    );
    postsKhoaHoc = await fetchFilterCategories(
      "blog.BlogPage",
      "description,date_post,feed_image,categories(name),author",
      "-first_published_at",
      5,
      2
    );
    postsTheThao = await fetchFilterCategories(
      "blog.BlogPage",
      "description,date_post,feed_image,categories(name),author",
      "-first_published_at",
      5,
      7
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-8 col-md-8 col-sm-8">
  <div class="left_content">
    <div class="single_post_content">
      <h2><span>Thời sự</span></h2>
      ${postsThoiSu && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
            <div class="single_post_content_left">
              <ul class="business_catgnav wow fadeInDown">
                <li>
                  <figure class="bsbig_fig">
                    <a${addAttribute(postsThoiSu.items[0].meta.slug, "href")} class="featured_img">
                      <img${addAttribute(`${server_url.server}${postsThoiSu.items[0].feed_image.meta.download_url}`, "src")}${addAttribute(postsThoiSu.items[0].title, "alt")}>
                      <span class="overlay"></span>
                    </a>
                    <figcaption>
                      <a${addAttribute(postsThoiSu.items[0].meta.slug, "href")}>
                        ${postsThoiSu.items[0].title}
                      </a>
                    </figcaption>
                    <p>${postsThoiSu.items[0].description}</p>
                  </figure>
                </li>
              </ul>
            </div>
            <div class="single_post_content_right">
              <ul class="spost_nav">
                ${postsThoiSu.items.slice(1).map((item, index) => renderTemplate`<li>
                    <div class="media wow fadeInDown">
                      <a${addAttribute(item.meta.slug, "href")} class="media-left">
                        <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feed_image.meta.download_url}`, "src")}>
                      </a>
                      <div class="media-body">
                        <a${addAttribute(item.meta.slug, "href")} class="catg_title">
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
                      <a${addAttribute(postsGiaoDuc.items[0].meta.slug, "href")} class="featured_img">
                        <img${addAttribute(postsGiaoDuc.items[0].title, "alt")}${addAttribute(`${server_url.server}${postsGiaoDuc.items[0].feed_image.meta.download_url}`, "src")}>
                        <span class="overlay"></span>
                      </a>
                      <figcaption>
                        <a${addAttribute(postsGiaoDuc.items[0].meta.slug, "href")}>
                          ${postsGiaoDuc.items[0].title}
                        </a>
                      </figcaption>
                      <p>${postsGiaoDuc.items[0].description}</p>
                    </figure>
                  </li>
                </ul>
                <ul class="spost_nav">
                  ${postsGiaoDuc.items.slice(1).map((item, index) => renderTemplate`<li>
                        <div class="media wow fadeInDown">
                          <a${addAttribute(item.meta.slug, "href")} class="media-left">
                            <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feed_image.meta.download_url}`, "src")}>
                          </a>
                          <div class="media-body">
                            <a${addAttribute(item.meta.slug, "href")} class="catg_title">
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
                      <a${addAttribute(postsKhoaHoc.items[0].meta.slug, "href")} class="featured_img">
                        <img${addAttribute(postsKhoaHoc.items[0].title, "alt")}${addAttribute(`${server_url.server}${postsKhoaHoc.items[0].feed_image.meta.download_url}`, "src")}>
                        <span class="overlay"></span>
                      </a>
                      <figcaption>
                        <a${addAttribute(postsKhoaHoc.items[0].meta.slug, "href")}>
                          ${postsKhoaHoc.items[0].title}
                        </a>
                      </figcaption>
                      <p>${postsKhoaHoc.items[0].description}</p>
                    </figure>
                  </li>
                </ul>
                <ul class="spost_nav">
                  ${postsKhoaHoc.items.slice(1).map((item, index) => renderTemplate`<li>
                        <div class="media wow fadeInDown">
                          <a${addAttribute(item.meta.slug, "href")} class="media-left">
                            <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feed_image.meta.download_url}`, "src")}>
                          </a>
                          <div class="media-body">
                            <a${addAttribute(item.meta.slug, "href")} class="catg_title">
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
                      <a${addAttribute(postsGiaoDuc.items[0].meta.slug, "href")} class="featured_img">
                        <img${addAttribute(postsGiaoDuc.items[0].title, "alt")}${addAttribute(`${server_url.server}${postsGiaoDuc.items[0].feed_image.meta.download_url}`, "src")}>
                        <span class="overlay"></span>
                      </a>
                      <figcaption>
                        <a${addAttribute(postsGiaoDuc.items[0].meta.slug, "href")}>
                          ${postsGiaoDuc.items[0].title}
                        </a>
                      </figcaption>
                      <p>${postsGiaoDuc.items[0].description}</p>
                    </figure>
                  </li>
                </ul>
                <ul class="spost_nav">
                  ${postsGiaoDuc.items.slice(1).map((item, index) => renderTemplate`<li>
                        <div class="media wow fadeInDown">
                          <a${addAttribute(item.meta.slug, "href")} class="media-left">
                            <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feed_image.meta.download_url}`, "src")}>
                          </a>
                          <div class="media-body">
                            <a${addAttribute(item.meta.slug, "href")} class="catg_title">
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
                      <a${addAttribute(postsTheThao.items[0].meta.slug, "href")} class="featured_img">
                        <img${addAttribute(postsTheThao.items[0].title, "alt")}${addAttribute(`${server_url.server}${postsTheThao.items[0].feed_image.meta.download_url}`, "src")}>
                        <span class="overlay"></span>
                      </a>
                      <figcaption>
                        <a${addAttribute(postsTheThao.items[0].meta.slug, "href")}>
                          ${postsTheThao.items[0].title}
                        </a>
                      </figcaption>
                      <p>${postsTheThao.items[0].description}</p>
                    </figure>
                  </li>
                </ul>
                <ul class="spost_nav">
                  ${postsTheThao.items.slice(1).map((item, index) => renderTemplate`<li>
                        <div class="media wow fadeInDown">
                          <a${addAttribute(item.meta.slug, "href")} class="media-left">
                            <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feed_image.meta.download_url}`, "src")}>
                          </a>
                          <div class="media-body">
                            <a${addAttribute(item.meta.slug, "href")} class="catg_title">
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
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/layouts/home/ContentLeft.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContentRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentRight;
  let response;
  let popularPost;
  try {
    response = await fetchPostsList(
      "blog.BlogPage",
      "description,date_post,feed_image,categories(name),author",
      "-first_published_at"
    );
    popularPost = response.items.slice(0, 5);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-4 col-md-4 col-sm-4">
  <aside class="right_content">
    <div class="single_sidebar">
      <h2><span>Popular Post</span></h2>
      ${popularPost && renderTemplate`<ul class="spost_nav">
            ${popularPost.map((item, index) => renderTemplate`<li>
                <div class="media wow fadeInDown">
                  <a${addAttribute(item.meta.slug, "href")} class="media-left">
                    <img${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feed_image.meta.download_url}`, "src")}>
                  </a>
                  <div class="media-body">
                    <a${addAttribute(item.meta.slug, "href")} class="catg_title">
                      ${item.title}
                    </a>
                  </div>
                </div>
              </li>`)}
          </ul>`}
    </div>
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
            <iframe width="100%" height="250" src="http://www.youtube.com/embed/h5QWbURNEpA?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>
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
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/layouts/home/ContentRight.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  var data;
  try {
    data = await fetchPostsList(
      "blog.BlogPage",
      "description,date_post,feed_image,categories(name),author",
      "-first_published_at"
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  if (!data)
    return Astro2.redirect("/404");
  const posts = data.items.slice(0, 5);
  const lastestPost = data.items.slice(0, 5);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tin t\u1EE9c m\u1EDBi nh\u1EA5t" }, { "default": ($$result2) => renderTemplate`
  

  ${maybeRenderHead()}<main>
    ${renderComponent($$result2, "NavArea", $$NavArea, {})}
    ${renderComponent($$result2, "LaststNews", $$LastestNews, {})}
    <section id="sliderSection">
      <div class="row">
        ${renderComponent($$result2, "MainPost", $$MainPost, { "posts": posts })}
        ${renderComponent($$result2, "LastestPost", $$LastestPost, { "posts": lastestPost })}
      </div>
    </section>
    <section id="contentSection">
      <div class="row">
        ${renderComponent($$result2, "ContentLeft", $$ContentLeft, {})}
        ${renderComponent($$result2, "ContentRight", $$ContentRight, {})}
      </div>
    </section>
  </main>
` })}`;
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/pages/index.astro", void 0);

const $$file = "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
