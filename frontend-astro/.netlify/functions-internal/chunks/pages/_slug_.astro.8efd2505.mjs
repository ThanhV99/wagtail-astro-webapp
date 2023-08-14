import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as renderComponent, f as addAttribute, F as Fragment } from '../astro.314a455b.mjs';
/* empty css                            */import { $ as $$Base } from './404.astro.c37ffab6.mjs';

const server = "http://127.0.0.1:8000";
const listPosts = "/api/v2/pages/";
const listCategories = "/api/v2/category/";
const totalBlogs = "/api/v2/total-blog-posts";
const server_url = {
	server: server,
	listPosts: listPosts,
	listCategories: listCategories,
	totalBlogs: totalBlogs
};

const $$Astro$1 = createAstro();
const $$SinglePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SinglePage;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="navArea" class="astro-JCUGIREQ">
  <nav class="navbar navbar-inverse astro-JCUGIREQ" role="navigation">
    <div class="navbar-header astro-JCUGIREQ">
      <button type="button" class="navbar-toggle collapsed astro-JCUGIREQ" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only astro-JCUGIREQ">Toggle navigation</span>
        <span class="icon-bar astro-JCUGIREQ"></span>
        <span class="icon-bar astro-JCUGIREQ"></span>
        <span class="icon-bar astro-JCUGIREQ"></span>
      </button>
    </div>
    <div id="navbar" class="navbar-collapse collapse astro-JCUGIREQ">
      <ul class="nav navbar-nav main_nav astro-JCUGIREQ">
        <li class="active astro-JCUGIREQ">
          <a href="../index.html" class="astro-JCUGIREQ"><span class="fa fa-home desktop-home astro-JCUGIREQ"></span><span class="mobile-show astro-JCUGIREQ">Home</span></a>
        </li>
        <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Technology</a></li>
        <li class="dropdown astro-JCUGIREQ">
          <a href="#" class="dropdown-toggle astro-JCUGIREQ" data-toggle="dropdown" role="button" aria-expanded="false">Mobile</a>
          <ul class="dropdown-menu astro-JCUGIREQ" role="menu">
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Android</a></li>
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Samsung</a></li>
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Nokia</a></li>
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Walton Mobile</a></li>
            <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Sympony</a></li>
          </ul>
        </li>
        <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Laptops</a></li>
        <li class="astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ">Tablets</a></li>
        <li class="astro-JCUGIREQ"><a href="contact.html" class="astro-JCUGIREQ">Contact Us</a></li>
        <li class="astro-JCUGIREQ"><a href="404.html" class="astro-JCUGIREQ">404 Page</a></li>
      </ul>
    </div>
  </nav>
</section>
<section id="newsSection" class="astro-JCUGIREQ">
  <div class="row astro-JCUGIREQ">
    <div class="col-lg-12 col-md-12 astro-JCUGIREQ">
      <div class="latest_newsarea astro-JCUGIREQ">
        <span class="astro-JCUGIREQ">Latest News</span>
        <ul id="ticker01" class="news_sticker astro-JCUGIREQ">
          <li class="astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><img src="../images/news_thumbnail3.jpg" alt="" class="astro-JCUGIREQ">My First News
              Item</a>
          </li>
          <li class="astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><img src="../images/news_thumbnail3.jpg" alt="" class="astro-JCUGIREQ">My Second News
              Item</a>
          </li>
          <li class="astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><img src="../images/news_thumbnail3.jpg" alt="" class="astro-JCUGIREQ">My Third News
              Item</a>
          </li>
          <li class="astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><img src="../images/news_thumbnail3.jpg" alt="" class="astro-JCUGIREQ">My Four News
              Item</a>
          </li>
          <li class="astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><img src="../images/news_thumbnail3.jpg" alt="" class="astro-JCUGIREQ">My Five News
              Item</a>
          </li>
          <li class="astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><img src="../images/news_thumbnail3.jpg" alt="" class="astro-JCUGIREQ">My Six News
              Item</a>
          </li>
          <li class="astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><img src="../images/news_thumbnail3.jpg" alt="" class="astro-JCUGIREQ">My Seven News
              Item</a>
          </li>
          <li class="astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><img src="../images/news_thumbnail3.jpg" alt="" class="astro-JCUGIREQ">My Eight News
              Item</a>
          </li>
          <li class="astro-JCUGIREQ">
            <a href="#" class="astro-JCUGIREQ"><img src="../images/news_thumbnail2.jpg" alt="" class="astro-JCUGIREQ">My Nine News
              Item</a>
          </li>
        </ul>
        <div class="social_area astro-JCUGIREQ">
          <ul class="social_nav astro-JCUGIREQ">
            <li class="facebook astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"></a></li>
            <li class="twitter astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"></a></li>
            <li class="flickr astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"></a></li>
            <li class="pinterest astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"></a></li>
            <li class="googleplus astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"></a></li>
            <li class="vimeo astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"></a></li>
            <li class="youtube astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"></a></li>
            <li class="mail astro-JCUGIREQ"><a href="#" class="astro-JCUGIREQ"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="contentSection" class="astro-JCUGIREQ">
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
            <span class="astro-JCUGIREQ"><i class="fa fa-calendar astro-JCUGIREQ"></i>6:49 AM</span>
            <a href="#" class="astro-JCUGIREQ"><i class="fa fa-tags astro-JCUGIREQ"></i>${post.categories.map((e) => e.name)}</a>
          </div>
          <div class="single_page_content astro-JCUGIREQ">
            <p class="description astro-JCUGIREQ">${post.description}</p>
            ${post.body.map((e) => {
    if (e.type === "content") {
      return renderTemplate`<div class="astro-JCUGIREQ">${unescapeHTML(e.value)}</div>`;
    } else if (e.type === "image") {
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-JCUGIREQ" }, { "default": ($$result2) => renderTemplate`
                      <div class="fig-picture astro-JCUGIREQ">
                        <img${addAttribute(`${server_url.server}${e.value.image_url}`, "src")} style="width:100%;margin:0" class="astro-JCUGIREQ">
                      </div>
                      <figcaption itemprop="description" class="astro-JCUGIREQ">${unescapeHTML(e.value.caption)}</figcaption>
                      <br class="astro-JCUGIREQ">
                    ` })}`;
    }
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
        <div class="single_sidebar astro-JCUGIREQ">
          <h2 class="astro-JCUGIREQ"><span class="astro-JCUGIREQ">Popular Post</span></h2>
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
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/layouts/SinglePage.astro", void 0);

const fetchSinglePost = async (slug) => {
  const response = await fetch(`${server_url.server}${server_url.listPosts}?type=blog.BlogPage&slug=${slug}&fields=description,date_post,body,categories(id,name),author`);
  const data = await response.json();
  return data;
};

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const singlePost = await fetchSinglePost(slug);
  if (singlePost.items.length == 0) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": singlePost.items[0].title }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "SinglePage", $$SinglePage, { "post": singlePost.items[0] })}
` })}`;
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/pages/[slug].astro", void 0);

const $$file = "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_ as _, server_url as s };
