import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, e as renderComponent } from '../astro.dd323fdc.mjs';
import { g as getDataHomePage, a as getBlogsByCategory, b as getSinglePost, $ as $$Base } from './404.astro.4529cbc9.mjs';
/* empty css                            */
const server = "http://13.236.167.60";
const listPosts = "/api/v2/pages/";
const listCategories = "/api/v2/category/";
const totalBlogs = "/api/v2/total-blog-posts";
const server_url = {
	server: server,
	listPosts: listPosts,
	listCategories: listCategories,
	totalBlogs: totalBlogs
};

const $$Astro$3 = createAstro();
const $$PopularPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PopularPost;
  const dataHomePage = await getDataHomePage();
  const popularPost = dataHomePage.allBlog.slice(0, 5);
  return renderTemplate`${maybeRenderHead()}<div class="single_sidebar">
  <h2><span>Popular Post</span></h2>
  <ul class="spost_nav">
    ${popularPost.map((item, index) => renderTemplate`<li>
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
</div>`;
}, "C:/D/python_project/frontend-astro/src/components/PopularPost.astro", void 0);

const $$Astro$2 = createAstro();
const $$SinglePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SinglePage;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="contentSection" class="astro-JCUGIREQ">
  <div class="row astro-JCUGIREQ">
    <div class="col-lg-8 col-md-8 col-sm-8 astro-JCUGIREQ">
      <div class="left_content astro-JCUGIREQ">
        <div class="single_page astro-JCUGIREQ">
          <ol class="breadcrumb astro-JCUGIREQ">
            <li class="astro-JCUGIREQ"><a href="../index.html" class="astro-JCUGIREQ">Home</a></li>
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Technology</a></li>
            <li class="active astro-JCUGIREQ">Mobile</li>
          </ol>
          <h1 class="astro-JCUGIREQ">${post.title}</h1>
          <div class="post_commentbox astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><i class="fa fa-user astro-JCUGIREQ"></i>${post.author}</a>
            <span class="astro-JCUGIREQ"><i class="fa fa-calendar astro-JCUGIREQ"></i>${post.updateTime}</span>
            <a href="#" class="astro-JCUGIREQ"><i class="fa fa-tags astro-JCUGIREQ"></i>${post.category.map((e) => e.name)}</a>
          </div>
          <div class="single_page_content astro-JCUGIREQ">
            <p class="description astro-JCUGIREQ">${post.description}</p>
            ${post.body.map((e) => {
    if (e.content) {
      return renderTemplate`<div class="astro-JCUGIREQ">${unescapeHTML(e.content)}</div>`;
    } else if (e.image) {
      return renderTemplate`<div class="fig-picture astro-JCUGIREQ">
                      <img${addAttribute(`${server_url.server}${e.image}`, "src")} style="width:100%;margin:0" class="astro-JCUGIREQ">
                      <figcaption itemprop="description" class="astro-JCUGIREQ">${unescapeHTML(e.caption)}</figcaption>
                      <br class="astro-JCUGIREQ">
                    </div>`;
    }
    return null;
  })}
          </div>
          <div class="social_link astro-JCUGIREQ">
            <ul class="sociallink_nav astro-JCUGIREQ">
              <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"><i class="fa fa-facebook astro-JCUGIREQ"></i></a></li>
              <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"><i class="fa fa-twitter astro-JCUGIREQ"></i></a></li>
              <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"><i class="fa fa-google-plus astro-JCUGIREQ"></i></a></li>
              <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"><i class="fa fa-linkedin astro-JCUGIREQ"></i></a></li>
              <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"><i class="fa fa-pinterest astro-JCUGIREQ"></i></a></li>
            </ul>
          </div>
          <div class="related_post astro-JCUGIREQ">
            <h2 class="astro-JCUGIREQ">Related Post <i class="fa fa-thumbs-o-up astro-JCUGIREQ"></i></h2>
            <ul class="spost_nav wow fadeInDown animated astro-JCUGIREQ">
              <li class="astro-JCUGIREQ">
                <div class="media astro-JCUGIREQ">
                  <a class="media-left astro-JCUGIREQ" href="single_page.html">
                    <img src="../images/post_img1.jpg" alt="" class="astro-JCUGIREQ">
                  </a>
                  <div class="media-body astro-JCUGIREQ">
                    <a class="catg_title astro-JCUGIREQ" href="single_page.html">
                      Aliquam malesuada diam eget turpis varius</a>
                  </div>
                </div>
              </li>
              <li class="astro-JCUGIREQ">
                <div class="media astro-JCUGIREQ">
                  <a class="media-left astro-JCUGIREQ" href="single_page.html">
                    <img src="../images/post_img2.jpg" alt="" class="astro-JCUGIREQ">
                  </a>
                  <div class="media-body astro-JCUGIREQ">
                    <a class="catg_title astro-JCUGIREQ" href="single_page.html">
                      Aliquam malesuada diam eget turpis varius</a>
                  </div>
                </div>
              </li>
              <li class="astro-JCUGIREQ">
                <div class="media astro-JCUGIREQ">
                  <a class="media-left astro-JCUGIREQ" href="single_page.html">
                    <img src="../images/post_img1.jpg" alt="" class="astro-JCUGIREQ">
                  </a>
                  <div class="media-body astro-JCUGIREQ">
                    <a class="catg_title astro-JCUGIREQ" href="single_page.html">
                      Aliquam malesuada diam eget turpis varius</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav class="nav-slit astro-JCUGIREQ">
      <a class="prev astro-JCUGIREQ" href="#">
        <span class="icon-wrap astro-JCUGIREQ"><i class="fa fa-angle-left astro-JCUGIREQ"></i></span>
        <div class="astro-JCUGIREQ">
          <h3 class="astro-JCUGIREQ">City Lights</h3>
          <img src="../images/post_img1.jpg" alt="" class="astro-JCUGIREQ">
        </div>
      </a>
      <a class="next astro-JCUGIREQ" href="#">
        <span class="icon-wrap astro-JCUGIREQ"><i class="fa fa-angle-right astro-JCUGIREQ"></i></span>
        <div class="astro-JCUGIREQ">
          <h3 class="astro-JCUGIREQ">Street Hills</h3>
          <img src="../images/post_img1.jpg" alt="" class="astro-JCUGIREQ">
        </div>
      </a>
    </nav>
    <div class="col-lg-4 col-md-4 col-sm-4 astro-JCUGIREQ">
      <aside class="right_content astro-JCUGIREQ">
        ${renderComponent($$result, "PopularPost", $$PopularPost, { "class": "astro-JCUGIREQ" })}
        <div class="single_sidebar astro-JCUGIREQ">
          <ul class="nav nav-tabs astro-JCUGIREQ" role="tablist">
            <li role="presentation" class="active astro-JCUGIREQ">
              <a href="#category" aria-controls="home" role="tab" data-toggle="tab" class="astro-JCUGIREQ">Category</a>
            </li>
            <li role="presentation" class="astro-JCUGIREQ">
              <a href="#video" aria-controls="profile" role="tab" data-toggle="tab" class="astro-JCUGIREQ">Video</a>
            </li>
            <li role="presentation" class="astro-JCUGIREQ">
              <a href="#comments" aria-controls="messages" role="tab" data-toggle="tab" class="astro-JCUGIREQ">Comments</a>
            </li>
          </ul>
          <div class="tab-content astro-JCUGIREQ">
            <div role="tabpanel" class="tab-pane active astro-JCUGIREQ" id="category">
              <ul class="astro-JCUGIREQ">
                <li class="cat-item astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Sports</a></li>
                <li class="cat-item astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Fashion</a></li>
                <li class="cat-item astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Business</a></li>
                <li class="cat-item astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Technology</a></li>
                <li class="cat-item astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Games</a></li>
                <li class="cat-item astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Life &amp; Style</a></li>
                <li class="cat-item astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Photography</a></li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane astro-JCUGIREQ" id="video">
              <div class="vide_area astro-JCUGIREQ">
                <iframe width="100%" height="250" src="http://www.youtube.com/embed/h5QWbURNEpA?feature=player_detailpage" frameborder="0" allowfullscreen class="astro-JCUGIREQ"></iframe>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane astro-JCUGIREQ" id="comments">
              <ul class="spost_nav astro-JCUGIREQ">
                <li class="astro-JCUGIREQ">
                  <div class="media wow fadeInDown astro-JCUGIREQ">
                    <a href="single_page.html" class="media-left astro-JCUGIREQ">
                      <img alt="" src="../images/post_img1.jpg" class="astro-JCUGIREQ">
                    </a>
                    <div class="media-body astro-JCUGIREQ">
                      <a href="single_page.html" class="catg_title astro-JCUGIREQ">
                        Aliquam malesuada diam eget turpis varius 1</a>
                    </div>
                  </div>
                </li>
                <li class="astro-JCUGIREQ">
                  <div class="media wow fadeInDown astro-JCUGIREQ">
                    <a href="single_page.html" class="media-left astro-JCUGIREQ">
                      <img alt="" src="../images/post_img2.jpg" class="astro-JCUGIREQ">
                    </a>
                    <div class="media-body astro-JCUGIREQ">
                      <a href="single_page.html" class="catg_title astro-JCUGIREQ">
                        Aliquam malesuada diam eget turpis varius 2</a>
                    </div>
                  </div>
                </li>
                <li class="astro-JCUGIREQ">
                  <div class="media wow fadeInDown astro-JCUGIREQ">
                    <a href="single_page.html" class="media-left astro-JCUGIREQ">
                      <img alt="" src="../images/post_img1.jpg" class="astro-JCUGIREQ">
                    </a>
                    <div class="media-body astro-JCUGIREQ">
                      <a href="single_page.html" class="catg_title astro-JCUGIREQ">
                        Aliquam malesuada diam eget turpis varius 3</a>
                    </div>
                  </div>
                </li>
                <li class="astro-JCUGIREQ">
                  <div class="media wow fadeInDown astro-JCUGIREQ">
                    <a href="single_page.html" class="media-left astro-JCUGIREQ">
                      <img alt="" src="../images/post_img2.jpg" class="astro-JCUGIREQ">
                    </a>
                    <div class="media-body astro-JCUGIREQ">
                      <a href="single_page.html" class="catg_title astro-JCUGIREQ">
                        Aliquam malesuada diam eget turpis varius 4</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="single_sidebar wow fadeInDown astro-JCUGIREQ">
          <h2 class="astro-JCUGIREQ"><span class="astro-JCUGIREQ">Sponsor</span></h2>
          <a class="sideAdd astro-JCUGIREQ" href="#"><img src="../images/add_img.jpg" alt="" class="astro-JCUGIREQ"></a>
        </div>
        <div class="single_sidebar wow fadeInDown astro-JCUGIREQ">
          <h2 class="astro-JCUGIREQ"><span class="astro-JCUGIREQ">Category Archive</span></h2>
          <select class="catgArchive astro-JCUGIREQ">
            <option class="astro-JCUGIREQ">Select Category</option>
            <option class="astro-JCUGIREQ">Life styles</option>
            <option class="astro-JCUGIREQ">Sports</option>
            <option class="astro-JCUGIREQ">Technology</option>
            <option class="astro-JCUGIREQ">Treads</option>
          </select>
        </div>
        <div class="single_sidebar wow fadeInDown astro-JCUGIREQ">
          <h2 class="astro-JCUGIREQ"><span class="astro-JCUGIREQ">Links</span></h2>
          <ul class="astro-JCUGIREQ">
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Blog</a></li>
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Rss Feed</a></li>
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Login</a></li>
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Life &amp; Style</a></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>`;
}, "C:/D/python_project/frontend-astro/src/layouts/SinglePage.astro", void 0);

const $$Astro$1 = createAstro();
const $$PostsByCategory = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostsByCategory;
  const { listPosts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="contentSection" style="content-visibility: auto; contain-intrinsic-size: 1000px;">
    <div class="col-lg-8 col-md-8 col-sm-8">
        <div class="left_content">
            <div class="single_post_content">
                <div class="single_iteam">
                    <a${addAttribute(listPosts[0].slug, "href")}>
                        <img${addAttribute(`${server_url.server}${listPosts[0].feedImage}`, "src")} alt="">
                    </a>
                    <div class="slider_article">
                        <h2>
                            <a class="slider_tittle"${addAttribute(listPosts[0].slug, "href")}>
                                ${listPosts[0].title}
                            </a>
                        </h2>
                        <p>
                            ${listPosts[0].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4">
        <ul class="spost_nav">
            ${listPosts.slice(1, 5).map((item, index) => renderTemplate`<li>
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
    <div class="row">
        <ul class="spost_nav">
            ${listPosts.slice(1, 5).map((item, index) => renderTemplate`<li>
                        <div class="media wow fadeInDown">
                            <a${addAttribute(item.slug, "href")} class="media-left">
                                <img class="featured_img"${addAttribute(item.title, "alt")}${addAttribute(`${server_url.server}${item.feedImage}`, "src")}>
                            </a>
                            <div class="media-body">
                                <h4>
                                    <a${addAttribute(item.slug, "href")} class="catg_title">
                                        ${item.title}
                                    </a>
                                </h4>
                                <p>${item.description}</p>
                            </div>
                        </div>
                    </li>`)}
        </ul>
    </div>
</section>`;
}, "C:/D/python_project/frontend-astro/src/layouts/PostsByCategory.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const listPosts = await getBlogsByCategory(slug, -1).then((e) => e.blogsByCategory);
  const post = await getSinglePost(slug).then((e) => e.blog);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": post ? post.title : "Page Title" }, { "default": ($$result2) => renderTemplate`${post ? renderTemplate`${renderComponent($$result2, "SinglePage", $$SinglePage, { "post": post })}` : null}${listPosts.length > 0 ? renderTemplate`${renderComponent($$result2, "PostsByCategory", $$PostsByCategory, { "listPosts": listPosts })}` : null}` })}`;
}, "C:/D/python_project/frontend-astro/src/pages/[slug].astro", void 0);

const $$file = "C:/D/python_project/frontend-astro/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PopularPost as $, _slug_ as _, server_url as s };
