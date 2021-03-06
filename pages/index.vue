<template>
  <div class="app">
    <!--==========================
    Top Bar
  ============================-->
    <section id="topbar">
      <div class="container clearfix">
        <div class="contact-info float-left">
          <i class="fa fa-envelope-o"></i>
          <a href="mailto:sales@jarkol.com">SALES@JARKOL.COM</a>
        </div>
        <div class="social-links float-left d-none d-sm-block d-xs-block">
          <a href="#" class="linkedin" style="visibility: hidden"
            ><i class="fa fa-linkedin"></i
          ></a>
          <a
            href="https://www.facebook.com/Jarkol-Technologies-116224989010437/"
            class="facebook"
            ><i class="fa fa-facebook"></i
          ></a>
        </div>
        <div class="social-links float-right d-none d-lg-block d-md-block">
          <a
            class="btn btn-default lang_selector trn"
            href="#"
            role="button"
            onclick="changeLang('en', event)"
            ><img src="../assets/img/USA.svg" height="20" alt=""
          /></a>
          <a
            class="btn btn-default lang_selector trn"
            href="#"
            role="button"
            onclick="changeLang('es', event)"
            ><img src="../assets/img/mexico.png" height="20" alt=""
          /></a>
        </div>
      </div>
    </section>
    <!--==========================
    Header
  ============================-->
    <header id="header">
      <div class="container">
        <div id="logo" class="pull-left">
          <h1>
            <a href="#body" class="scrollto">
              <img
                width="200px"
                src="../assets/img/logo-ori.png"
                alt=""
                title=""
              />
              <!--<img width="40px" src="../assets/img/im03-transparent.png"
              alt="" title="" />-->
            </a>
          </h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="#body"><img src="../assets/img/logo.png" alt="" title="" /></a>-->
        </div>

        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-active"><a href="#body" class="trn">Home</a></li>
            <li><a href="#about" class="trn">About Us</a></li>
            <li>
              <a href="#portfolio" class="trn" id="prod">Products & Services</a>
            </li>
            <li><a href="#contact" class="trn">Contact</a></li>
            <li class="menu-has-children d-md-none d-lg-none">
              <a class="trn">Language</a>
              <ul>
                <li>
                  <a
                    class="lang_selector trn"
                    href="#"
                    onclick="changeLang('en', event)"
                    role="button"
                  >
                    <img src="../assets/img/USA.svg" height="20" alt="" /><a
                      class="trn"
                      id="salt"
                      onclick="changeLang('en', event)"
                      >English</a
                    ></a
                  >
                </li>
                <li>
                  <a
                    class="lang_selector trn"
                    href="#"
                    onclick="changeLang('es', event)"
                    role="button"
                    ><img src="../assets/img/mexico.png" height="20" alt="" /><a
                      class="trn"
                      id="salt"
                      onclick="changeLang('es', event)"
                      >Spanish</a
                    ></a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- #nav-menu-container -->
      </div>
    </header>
    <!-- #header -->

    <!--==========================
    Intro Section
  ============================-->
    <section id="intro">
      <div class="intro-content">
        <h2 class="trn"><strong>JARKOL TECHNOLOGIES</strong></h2>

        <div>
          <a href="#about" class="btn-get-started scrollto"
            ><small
              ><strong id="tec"
                >TECHNOLOGY & ENGINEERING SERVICES</strong
              ></small
            ></a
          >
        </div>
      </div>

      <div id="intro-carousel" class="owl-carousel">
        <div
          v-for="(item, i) in carousel"
          :key="i"
          class="item"
          :style="`background-image: url(${item})`"
        ></div>
      </div>
    </section>
    <!-- #intro -->

    <main id="main">
      <!--==========================
      About Section
    ============================-->
      <section id="about" class="wow fadeInUp">
        <div class="container">
          <div class="section-header">
            <h2 class="trn" id="prod1">Products & Services</h2>
          </div>
          <div class="row">
            <div class="col-sm-12 col-lg-6 content">
              <h4 class="trn">Experts in horizontal well logging.</h4>
              <ul>
                <li>
                  <i class="ion-android-checkmark-circle"></i>
                  <span class="trn">Geothermal</span>
                  <ul>
                    <li class="small text-uppercase font-italic Italica">
                      <strong class="trn">Comprehensive Approach</strong>
                    </li>
                    <li class="trn">PTS Memory and Real time.</li>
                  </ul>
                </li>
                <li>
                  <i class="ion-android-checkmark-circle"></i>
                  <span class="trn">Downhole Monitoring Systems</span>
                  <ul>
                    <li class="small text-uppercase font-italic Italica">
                      <strong class="trn">Precision beyond the surface</strong>
                    </li>
                    <li class="trn">Pressure and Temperature sensors.</li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <i class="ion-android-checkmark-circle"></i>
                  <span class="trn"
                    >Directional Drilling and Logging Tools</span
                  >
                  <ul>
                    <li class="small text-uppercase font-italic Italica">
                      ><strong class="trn">The Path to Success</strong>
                    </li>
                    <li class="trn">
                      Directional drilling services and MWD/LWD tools.
                    </li>
                  </ul>
                </li>
                <li>
                  <i class="ion-android-checkmark-circle"></i>
                  <span class="trn">Technical Consultancy</span>
                  <ul>
                    <li class="small text-uppercase font-italic Italica">
                      <strong class="trn">Expert Guidance</strong>
                    </li>
                    <li class="trn">
                      Over 15 years of technical experience in both onshore and
                      offshore operations in the Oil and Gas Industry.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-lg-6 about-img">
              <img
                class="center-block"
                src="../assets/img/intro-carousel/14.jpg"
                style="max-width: 100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <!-- #about -->
      <!--==========================
    Carousel Section
  ============================-->
      <section class="wow fadeInUp carousel">
        <div class="container">
          <div class="owl-carousel clients-carousel">
            <img src="../assets/img/portfolio/2.jpg" alt="" />
            <img src="../assets/img/portfolio/3.jpg" alt="" />
            <img src="../assets/img/portfolio/4.jpg" alt="" />
            <img src="../assets/img/portfolio/5.jpg" alt="" />
            <img src="../assets/img/portfolio/9.jpg" alt="" />
            <img src="../assets/img/portfolio/10.jpg" alt="" />
            <img src="../assets/img/portfolio/11.jpg" alt="" />
            <img src="../assets/img/portfolio/12.jpg" alt="" />
            <img src="../assets/img/portfolio/20.jpg" alt="" />
            <img src="../assets/img/portfolio/21.jpg" alt="" />
            <img src="../assets/img/portfolio/30.jpg" alt="" />
            <img src="../assets/img/portfolio/31.jpg" alt="" />
            <img src="../assets/img/portfolio/32.jpg" alt="" />
            <img src="../assets/img/portfolio/34.jpg" alt="" />
            <img src="../assets/img/portfolio/38.jpg" alt="" />
          </div>
        </div>
      </section>
      <!-- #carousel -->

      <!--==========================
    Call To Action Section
  ============================-->
      <section class="wow fadeInUp call-to-action">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-left">
              <h2 class="cta-title trn">About Us</h2>
              <p class="cta-text trn">
                From tackling personal decisions to reaching important
                milestones, our job is to guide you on the path of success. As
                professional Engineering Consultants, we guarantee great
                results.
              </p>
              <p class="cta-text trn">
                We are a service company for the Energy and Extraction Industry,
                with direct experience in Oil and Gas, Mining and Geothermal,
                particularly in drilling operations, geophysical logging with
                both wireline and while drilling tools and production parameters
                monitoring, focused on the introduction of new, better and more
                accesible technologies in the Latin American market.
              </p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <a
                class="cta-btn align-middle trn"
                target="_blank"
                href="docs/JARKOL_2019_SP.pdf"
                >Discover</a
              >
            </div>
          </div>
        </div>
      </section>
      <!-- #call-to-action -->

      <!--==========================
      Services Section
    ============================-->
      <section id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="box wow fadeInRight">
                <div class="icon"><i class="fa fa-cogs"></i></div>
                <h4 class="title"><a href="" class="trn">Our Mission</a></h4>
                <p class="description trn">
                  Provide, import and develop technology for the oil, geothermal
                  and mining industry in the Mexican market in order to promote
                  and boost competitiveness.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="box wow fadeInLeft">
                <div class="icon"><i class="fa fa-eye"></i></div>
                <h4 class="title"><a href="" class="trn">Our Vision</a></h4>
                <p class="description trn" id="vision">
                  To become one of the leading Mexican companies in the
                  development of technology, integral solutions and strategic
                  tools for the energy industry in México and Latin América.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--==========================
      Clients Section
    ============================-->
      <section id="clients" class="wow fadeInUp">
        <div class="container">
          <div class="section-header">
            <h2 class="trn">Clients</h2>
            <h3></h3>
            <p class="trn">
              We work with several companies from around the world in the Energy
              industry on complex matters, focused on Geothermal and Oil and Gas
              projects. After a few sessions with us, our clients have been able
              to get back on track and experience the long lasting impacts of
              our services.
            </p>
          </div>

          <div class="owl-carousel clients-carousel">
            <img src="../assets/img/clients/logo_CFE_2.png" alt="" />
            <img src="../assets/img/clients/pemex-logo.webp" alt="" />
            <img src="../assets/img/clients/1.png" alt="" />
            <img src="../assets/img/clients/2.png" alt="" />
            <img src="../assets/img/clients/3.png" alt="" />
            <img src="../assets/img/clients/4.png" alt="" />
            <img src="../assets/img/clients/5.png" alt="" />
            <img src="../assets/img/clients/6.png" alt="" />
            <img src="../assets/img/clients/7.png" alt="" />
            <img src="../assets/img/clients/8.png" alt="" />
          </div>
        </div>
      </section>
      <!-- #clients -->

      <!--==========================
      Call To Action Section
    ============================-->
      <section
        class="wow fadeInUp call-to-action"
        style="
          background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0%,
              rgba(0, 0, 0, 0.6) 100%
            ),
            url('./images/jarkol/fondo.jpg') center / cover fixed;
        "
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-left">
              <h2 class="cta-title trn">The Cutting Edge</h2>
              <p class="cta-text trn">
                We offer a variety of services to all of our clients, customized
                to fit their specific needs. Are you a large corporation looking
                for a step-by-step plan of action? Or, are you are a small
                startup just beginning your business? No matter what your needs
                are, Jarkol Technologies is here to provide you guidance every
                step of the way. Take a look below to see what we can do for
                you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- #call-to-action -->

      <!--==========================
      Our Portfolio Section
    ============================-->
      <section id="portfolio" class="wow fadeInUp">
        <div class="container-fluid">
          <div class="row no-gutters">
            <div class="col-lg-4 col-md-4">
              <div class="portfolio-item wow fadeInUp">
                <a
                  href="_nuxt/assets/img/portfolio/18.jpg"
                  class="portfolio-popup"
                >
                  <img src="../assets/img/portfolio/18.jpg" alt="" />
                  <div class="portfolio-overlay">
                    <div class="portfolio-info">
                      <h2 class="wow fadeInUp trn">Geothermal</h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4">
              <div class="portfolio-item wow fadeInUp">
                <a
                  href="_nuxt/assets/img/portfolio/19.jpg"
                  class="portfolio-popup"
                >
                  <img src="../assets/img/portfolio/19.jpg" alt="" />
                  <div class="portfolio-overlay">
                    <div class="portfolio-info">
                      <h2 class="wow fadeInUp trn">
                        Downhole Monitoring Systems
                      </h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4">
              <div class="portfolio-item wow fadeInUp">
                <a
                  href="_nuxt/assets/img/portfolio/26.jpg"
                  class="portfolio-popup"
                >
                  <img src="../assets/img/portfolio/26.jpg" alt="" />
                  <div class="portfolio-overlay">
                    <div class="portfolio-info">
                      <h2 class="wow fadeInUp trn">
                        Directional Drilling and Logging Tools
                      </h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4">
              <div class="portfolio-item wow fadeInUp">
                <a
                  href="_nuxt/assets/img/portfolio/39.jpg"
                  class="portfolio-popup"
                >
                  <img src="../assets/img/portfolio/39.jpg" alt="" />
                  <div class="portfolio-overlay">
                    <div class="portfolio-info">
                      <h2 class="wow fadeInUp trn">Technical Consulting</h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4">
              <div class="portfolio-item wow fadeInUp">
                <a
                  href="_nuxt/assets/img/portfolio/36.jpg"
                  class="portfolio-popup"
                >
                  <img src="../assets/img/portfolio/36.jpg" alt="" />
                  <div class="portfolio-overlay">
                    <div class="portfolio-info">
                      <h2 class="wow fadeInUp trn">Drilling Engineering</h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="portfolio-item wow fadeInUp">
                <a
                  href="_nuxt/assets/img/portfolio/1.jpg"
                  target="_blank"
                  class="portfolio-popup"
                >
                  <img src="../assets/img/portfolio/1.jpg" />
                  <div class="portfolio-overlay">
                    <div class="portfolio-info">
                      <a href="docs/productos&servicios.pdf" target="_blank">
                        <h2 class="wow fadeInUp trn">Discover Products</h2>
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="wow fadeInUp call-to-action">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 text-center text-lg-left">
              <h2 class="cta-title trn">Community Outreach</h2>
              <p class="cta-text trn">
                We are an association that care about the technological
                development of the country, that's why we become one of the
                sponsors of the
                <strong>AAAI Student Chapter México</strong> contributing to
                more students have knowledge about artificial intelligence and
                other related fields that are becoming more popular.
              </p>
            </div>
            <div class="col-lg-4 text-center text-lg-right pb-5">
              <a href="https://www.aaaimx.org/"
                ><img
                  src="https://www.aaaimx.org/img/sprites/aaaimx-transparent.png"
                  width="200"
                  alt=""
              /></a>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-4 text-center text-lg-left d-none d-lg-block d-md-block pb-3 fund"
            >
              <a target="_blank" href="https://apoyoalajuventud.org/"
                ><img src="../assets/img/fundacion.jpeg" width="250" alt=""
              /></a>
            </div>
            <div class="col-lg-8 text-center text-lg-right">
              <p class="cta-text trn">
                We care for the wellbeing of the community that will be in
                charge of leading to a better future in this country, so we have
                joined forces with the
                <strong>Fundación de Apoyo a la Juventud</strong> that supports
                young people who are in situation of serious vulnerability and
                discrimination accompanying them in the planning of their life
                project.
              </p>
            </div>
            <div
              class="col-sm-12 col-xs-10 text-center text-lg-left d-md-none d-lg-none fund"
            >
              <a target="_blank" href="https://apoyoalajuventud.org/"
                ><img src="../assets/img/fundacion.jpeg" width="250" alt=""
              /></a>
            </div>
            <div
              class="col-sm-6 text-center text-lg-left d-md-none d-lg-none fund"
            ></div>
          </div>
        </div>
      </section>
      <!-- #call-to-action -->

      <!--==========================
      Contact Section
    ============================-->
      <section id="contact" class="wow fadeInUp">
        <div class="container mb-4">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3361918302385!2d-92.97005528511544!3d17.963089187736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU3JzQ3LjEiTiA5MsKwNTgnMDQuMyJX!5e0!3m2!1ses!2smx!4v1561662480362!5m2!1ses!2smx"
                width="100%"
                height="410"
                frameborder="0"
                style="border: 0"
                allowfullscreen
              ></iframe>
              <br />
              <br />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
              <div class="container">
                <div class="section-header">
                  <h2 class="trn">Contact Us</h2>
                  <p class="trn">
                    Do you have a particular challenge you are currently dealing
                    with? Contact us today and explore what we can do for you.
                  </p>
                </div>
              </div>
              <div class="form">
                <div id="sendmessage" class="trn">
                  Your message has been sent. Thank you!
                </div>
                <div id="errormessage"></div>
                <form method="post" nctype="text/plain" role="form">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        v-model="form.name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        v-model="form.email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      v-model="form.subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="message"
                      v-model="form.message"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                    <div class="validation"></div>
                  </div>
                  <div class="msg">
                    <button
                      @click.prevent="sendEmail()"
                      type="button"
                      style="-webkit-appearance: caret; border-radius: 3px"
                      class="text-center pdf-btn trn"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container">
          <div class="row contact-info">
            <div class="col-md-4">
              <div class="contact-address">
                <i class="fa fa-map-marker"></i>
                <h3 class="trn">Address</h3>
                <address class="trn">Villahermosa, Tabasco, México</address>
              </div>
            </div>
            <a class="facebook"></a>
            <div class="col-md-4">
              <div class="contact-phone">
                <i class="fa fa-facebook"></i>
                <h3 class="trn">Follow Us</h3>
                <p>
                  <a
                    href="https://www.facebook.com/Jarkol-Technologies-116224989010437/"
                    >Jarkol Technologies SA de CV</a
                  >
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-email">
                <i class="fa fa-envelope-o"></i>
                <h3 class="trn">Contact Us</h3>
                <p><a href="mailto:sales@jarkol.com"> sales@jarkol.com </a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- #contact -->
    </main>

    <!--==========================
    Footer
  ============================-->
    <footer id="footer">
      <div class="container">
        <div class="copyright">
          &copy; 2021 BY <strong>JARKOL TECHNOLOGIES S.A. DE C.V.</strong><br />
          <span class="trn">Powered by</span>
          <a href="http://aaaimx.com/" target="_blank">@aaaimx</a>
        </div>
      </div>
    </footer>
    <!-- #footer -->

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  </div>
</template>

<script>
import SmtpJS from '@/plugins/email'
export default {
  data() {
    return {
      form: {
        subject: '',
        name: '',
        email: '',
        message: '',
      },
      carousel: [
        require('@/assets/img/intro-carousel/43.jpg'),
        require('@/assets/img/intro-carousel/8.jpg'),
        require('@/assets/img/intro-carousel/5.jpg'),
        require('@/assets/img/intro-carousel/7.jpg'),
        require('@/assets/img/intro-carousel/3.jpg'),
      ],
    }
  },
  methods: {
    sendEmail() {
      SmtpJS.Email.send({
        SecureToken: '9bae29bc-1cbc-41c5-a289-6156d9190086',
        To:
          process.env.NODE_ENV === 'development'
            ? 'rnovelo.cruz98@gmail.com'
            : 'carlos.ceron@jarkol.com',
        From: 'contact@aaaimx.org',
        Subject: this.form.subject,
        Body: `Nombre: ${this.form.name}<br>Email: ${this.form.email}<br>${this.form.message}`,
      }).then(() => alert('Mensaje enviado a '))
    },
  },
}
</script>
