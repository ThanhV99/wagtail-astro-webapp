import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderSlot, e as renderHead } from '../astro.314a455b.mjs';

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="footer">
  <div class="footer_top">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="footer_widget wow fadeInLeftBig">
          <h2>Flickr Images</h2>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="footer_widget wow fadeInDown">
          <h2>Tag</h2>
          <ul class="tag_nav">
            <li><a href="#">Games</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Life &amp; Style</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Photo</a></li>
            <li><a href="#">Slider</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="footer_widget wow fadeInRightBig">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <address>
            Perfect News,1238 S . 123 St.Suite 25 Town City 3333,USA Phone:
            123-326-789 Fax: 123-546-567
          </address>
        </div>
      </div>
    </div>
  </div>
  <div class="footer_bottom">
    <p class="copyright">
      Copyright &copy; 2045 <a href="index.html">NewsFeed</a>
    </p>
    <p class="developer">Developed By Thanh Nguyen</p>
  </div>
</footer>`;
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="header_top">
        <div class="header_top_left">
          <ul class="top_nav">
            <li><a href="/">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="header_top_right">
          <p>Friday, December 05, 2045</p>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="header_bottom">
        <div class="logo_area">
          <a href="/" class="logo"><img src="images/logo.jpg" alt=""></a>
        </div>
        <div class="add_banner">
          <a href="/"><img src="images/addbanner_728x90_V1.jpg" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</header>`;
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html>\n  <head>\n    <title>", '</title>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css">\n    <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css">\n    <link rel="stylesheet" type="text/css" href="/assets/css/animate.css">\n    <link rel="stylesheet" type="text/css" href="/assets/css/font.css">\n    <link rel="stylesheet" type="text/css" href="/assets/css/li-scroller.css">\n    <link rel="stylesheet" type="text/css" href="/assets/css/slick.css">\n    <link rel="stylesheet" type="text/css" href="/assets/css/jquery.fancybox.css">\n    <link rel="stylesheet" type="text/css" href="/assets/css/theme.css">\n    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">\n\n    <!--[if lt IE 9]>\n<script src="assets/js/html5shiv.min.js"><\/script>\n<script src="assets/js/respond.min.js"><\/script>\n<![endif]-->\n  ', '</head>\n  <body>\n	<div id="preloader">\n		<div id="status">&nbsp;</div>\n	</div>\n	<a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>\n	<div class="container">\n		', "\n		", "\n		", "\n	</div>\n	\n    \n    \n    \n    \n    \n    \n  </body>\n</html>"])), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/layouts/Base.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "NewsFeed | Pages | 404" }, { "default": ($$result2) => renderTemplate`
  
    ${maybeRenderHead()}<section id="navArea">
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
              <a href="../index.html"><span class="fa fa-home desktop-home"></span><span class="mobile-show">Home</span></a>
            </li>
            <li><a href="#">Technology</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Mobile</a>
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
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="404.html">404 Page</a></li>
          </ul>
        </div>
      </nav>
    </section>
    <section id="newsSection">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="latest_newsarea">
            <span>Latest News</span>
            <ul id="ticker01" class="news_sticker">
              <li>
                <a href="#"><img src="../images/news_thumbnail3.jpg" alt="">My First
                  News Item</a>
              </li>
              <li>
                <a href="#"><img src="../images/news_thumbnail3.jpg" alt="">My Second
                  News Item</a>
              </li>
              <li>
                <a href="#"><img src="../images/news_thumbnail3.jpg" alt="">My Third
                  News Item</a>
              </li>
              <li>
                <a href="#"><img src="../images/news_thumbnail3.jpg" alt="">My Four
                  News Item</a>
              </li>
              <li>
                <a href="#"><img src="../images/news_thumbnail3.jpg" alt="">My Five
                  News Item</a>
              </li>
              <li>
                <a href="#"><img src="../images/news_thumbnail3.jpg" alt="">My Six News
                  Item</a>
              </li>
              <li>
                <a href="#"><img src="../images/news_thumbnail3.jpg" alt="">My Seven
                  News Item</a>
              </li>
              <li>
                <a href="#"><img src="../images/news_thumbnail3.jpg" alt="">My Eight
                  News Item</a>
              </li>
              <li>
                <a href="#"><img src="../images/news_thumbnail2.jpg" alt="">My Nine
                  News Item</a>
              </li>
            </ul>
            <div class="social_area">
              <ul class="social_nav">
                <li class="facebook"><a href="#"></a></li>
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
    </section>
    <section id="contentSection">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8">
          <div class="left_content">
            <div class="error_page">
              <h3>We Are Sorry</h3>
              <h1>404</h1>
              <p>
                Unfortunately, the page you were looking for could not be found.
                It may be temporarily unavailable, moved or no longer exists
              </p>
              <span></span>
              <a href="../index.html" class="wow fadeInLeftBig">Go to home page</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <aside class="right_content">
            <div class="single_sidebar">
              <h2><span>Popular Post</span></h2>
              <ul class="spost_nav">
                <li>
                  <div class="media wow fadeInDown">
                    <a href="single_page.html" class="media-left">
                      <img alt="" src="../images/post_img1.jpg">
                    </a>
                    <div class="media-body">
                      <a href="single_page.html" class="catg_title">
                        Aliquam malesuada diam eget turpis varius 1</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media wow fadeInDown">
                    <a href="single_page.html" class="media-left">
                      <img alt="" src="../images/post_img2.jpg">
                    </a>
                    <div class="media-body">
                      <a href="single_page.html" class="catg_title">
                        Aliquam malesuada diam eget turpis varius 2</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media wow fadeInDown">
                    <a href="single_page.html" class="media-left">
                      <img alt="" src="../images/post_img1.jpg">
                    </a>
                    <div class="media-body">
                      <a href="single_page.html" class="catg_title">
                        Aliquam malesuada diam eget turpis varius 3</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media wow fadeInDown">
                    <a href="single_page.html" class="media-left">
                      <img alt="" src="../images/post_img2.jpg">
                    </a>
                    <div class="media-body">
                      <a href="single_page.html" class="catg_title">
                        Aliquam malesuada diam eget turpis varius 4</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
 
` })}`;
}, "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/pages/404.astro", void 0);

const $$file = "C:/D/python_project/wagtail-astro-webapp/frontend-astro/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Base as $, _404 as _ };
