<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup >
import { ref, onMounted } from 'vue'
import AppHeaderHome from '~/components/AppHeaderHome.vue';

const workItems = ref([
  { left: 0, top: 0 },
  { left: 637, top: 0 },
  { left: 1275, top: 0 },
  { left: 0, top: 388 },
  { left: 637, top: 388 },
  { left: 1275, top: 388 }
])

const gridHeight = ref(0)

onMounted(() => {
  calculateLayout()
  window.addEventListener('resize', calculateLayout)
})

function calculateLayout() {
  const itemWidth = 637
  const itemHeight = 388
  workItems.value = workItems.value.map((item, index) => ({
    left: (index % 3) * itemWidth,
    top: Math.floor(index / 3) * itemHeight
  }))
  gridHeight.value = Math.ceil(workItems.value.length / 3) * itemHeight
}

</script>

<template>
    <main>
      <!-- <PageLoader /> -->
      <AppHeaderHome />
      <section id="home" class="home-section home-full-height bg-dark bg-gradient  fixed-height-section" :style="{backgroundImage:'url(/images/section-10.jpg)'}" >
        <div class="titan-caption">
          <div class="caption-content">
            <div class="font-alt mb-30 titan-title-size-1">Hello &amp; welcome</div>
            <div class="font-alt mb-40 titan-title-size-4">I am Trunggg</div>
            <a class="section-scroll btn btn-border-w btn-round" href="#">Learn More</a>
            
          </div>
        </div>
      </section>
      <div class="main">
        <section id="services" class="module">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Our Services</h2>
                <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
            <div class="row multi-columns-row">
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="features-item">
                  <div class="features-icon"><span class="icon-lightbulb"/></div>
                  <h3 class="features-title font-alt">Ideas and concepts</h3>
                  <p>Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="features-item">
                  <div class="features-icon"><span class="icon-bike"/></div>
                  <h3 class="features-title font-alt">Optimised for speed</h3>
                  <p>Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="features-item">
                  <div class="features-icon"><span class="icon-tools"/></div>
                  <h3 class="features-title font-alt">Designs &amp; interfaces</h3>
                  <p>Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="features-item">
                  <div class="features-icon"><span class="icon-gears"/></div>
                  <h3 class="features-title font-alt">Highly customizable</h3>
                  <p>Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="features-item">
                  <div class="features-icon"><span class="icon-tools-2"/></div>
                  <h3 class="features-title font-alt">Coding &amp; development</h3>
                  <p>Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="features-item">
                  <div class="features-icon"><span class="icon-genius"/></div>
                  <h3 class="features-title font-alt">Features &amp; plugins</h3>
                  <p>Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="features-item">
                  <div class="features-icon"><span class="icon-mobile"/></div>
                  <h3 class="features-title font-alt">Responsive design</h3>
                  <p>Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="features-item">
                  <div class="features-icon"><span class="icon-lifesaver"/></div>
                  <h3 class="features-title font-alt">Dedicated support</h3>
                  <p>Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="module bg-dark-60" :style="{backgroundImage: 'url(/images/section-6.jpg)'}">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="video-box">
                  <div class="video-box-icon"><a class="video-pop-up" href="https://www.youtube.com/watch?v=TTxZj3DZiIM"><span class="icon-video"/></a></div>
                  <div class="video-title font-alt">Presentation</div>
                  <div class="video-subtitle font-alt">Watch the video about our new products</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="works" class="module pb-0">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Our Works</h2>
                <div class="module-subtitle font-serif"/>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <ul id="filters" class="filter font-alt">
                  <li><a class="current wow fadeInUp" href="#" data-filter="*">All</a></li>
                  <li><a class="wow fadeInUp" href="#" data-filter=".illustration" data-wow-delay="0.2s">Illustration</a></li>
                  <li><a class="wow fadeInUp" href="#" data-filter=".marketing" data-wow-delay="0.4s">Marketing</a></li>
                  <li><a class="wow fadeInUp" href="#" data-filter=".photography" data-wow-delay="0.6s">Photography</a></li>
                  <li><a class="wow fadeInUp" href="#" data-filter=".webdesign" data-wow-delay="0.6s">Web Design</a></li>
                </ul>
              </div>
            </div>
          </div>
            <ul id="works-grid" class="works-grid works-grid-gut works-grid-3 works-hover-w" :style="{ position: 'relative', height: `${gridHeight}px` }">
            
            <li class="work-item illustration webdesign"><a href="portfolio-single-1.html">
                <div class="work-image"><img src="/images/work-1.jpg" alt="Portfolio Item"></div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Corporate Identity</h3>
                  <div class="work-descr">Illustration</div>
                </div></a></li>
            <li class="work-item marketing photography"><a href="portfolio-single-1.html">
                <div class="work-image"><img src="/images/work-2.jpg" alt="Portfolio Item"></div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Bag MockUp</h3>
                  <div class="work-descr">Marketing</div>
                </div></a></li>
            <li class="work-item illustration photography"><a href="portfolio-single-1.html">
                <div class="work-image"><img src="/images/work-3.jpg" alt="Portfolio Item"></div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Disk Cover</h3>
                  <div class="work-descr">Illustration</div>
                </div></a></li>
            <li class="work-item marketing photography"><a href="portfolio-single-1.html">
                <div class="work-image"><img src="/images/work-4.jpg" alt="Portfolio Item"></div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Business Card</h3>
                  <div class="work-descr">Photography</div>
                </div></a></li>
            <li class="work-item illustration webdesign"><a href="portfolio-single-1.html">
                <div class="work-image"><img src="/images/work-5.jpg" alt="Portfolio Item"></div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Business Card</h3>
                  <div class="work-descr">Webdesign</div>
                </div></a></li>
            <li class="work-item marketing webdesign"><a href="portfolio-single-1.html">
                <div class="work-image"><img src="/images/work-6.jpg" alt="Portfolio Item"></div>
                <div class="work-caption font-alt">
                  <h3 class="work-title">Business Cards in paper clip</h3>
                  <div class="work-descr">Marketing</div>
                </div></a></li>
          </ul>
        </section>
        <section class="module-small bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-8 col-lg-6 col-lg-offset-2">
                <div class="callout-text font-alt">
                  <h3 class="callout-title">Want to see more works?</h3>
                  <p>We are always open to interesting projects.</p>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-2">
                <div class="callout-btn-box"><a class="btn btn-w btn-round" href="portfolio_boxed_gutter_col_3.html">Lets view portfolio</a></div>
              </div>
            </div>
          </div>
        </section>
        <section id="alt-features" class="module">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Our features</h2>
                <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="alt-features-item">
                  <div class="alt-features-icon"><span class="icon-strategy"/></div>
                  <h3 class="alt-features-title font-alt">Branding</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon"><span class="icon-tools-2"/></div>
                  <h3 class="alt-features-title font-alt">Development</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon"><span class="icon-target"/></div>
                  <h3 class="alt-features-title font-alt">Marketing</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon"><span class="icon-tools"/></div>
                  <h3 class="alt-features-title font-alt">Design</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
              </div>
              <div class="col-md-6 col-lg-6 hidden-xs hidden-sm">
                <div class="alt-services-image align-center"><img src="/images/promo.png" alt="Feature Image"></div>
              </div>
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="alt-features-item">
                  <div class="alt-features-icon"><span class="icon-camera"/></div>
                  <h3 class="alt-features-title font-alt">Photography</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon"><span class="icon-mobile"/></div>
                  <h3 class="alt-features-title font-alt">Mobile</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon"><span class="icon-linegraph"/></div>
                  <h3 class="alt-features-title font-alt">Music</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
                <div class="alt-features-item">
                  <div class="alt-features-icon"><span class="icon-basket"/></div>
                  <h3 class="alt-features-title font-alt">Shop</h3>A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr class="divider-w">
        <section id="team" class="module">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Meet Our Team</h2>
                <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
            <div class="row">
              <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onclick="wow fadeInUp">
                <div class="team-item">
                  <div class="team-image"><img src="/images/team-1.jpg" alt="Member Photo">
                    <div class="team-detail">
                      <h5 class="font-alt">Hi all</h5>
                      <p class="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a&amp;nbsp;iaculis diam.</p>
                      <div class="team-social"><a href="#"><i class="fa fa-facebook"/></a><a href="#"><i class="fa fa-twitter"/></a><a href="#"><i class="fa fa-dribbble"/></a><a href="#"><i class="fa fa-skype"/></a></div>
                    </div>
                  </div>
                  <div class="team-descr font-alt">
                    <div class="team-name">Jim Stone</div>
                    <div class="team-role">Art Director</div>
                  </div>
                </div>
              </div>
              <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onclick="wow fadeInUp">
                <div class="team-item">
                  <div class="team-image"><img src="/images/team-2.jpg" alt="Member Photo">
                    <div class="team-detail">
                      <h5 class="font-alt">Good day</h5>
                      <p class="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a&amp;nbsp;iaculis diam.</p>
                      <div class="team-social"><a href="#"><i class="fa fa-facebook"/></a><a href="#"><i class="fa fa-twitter"/></a><a href="#"><i class="fa fa-dribbble"/></a><a href="#"><i class="fa fa-skype"/></a></div>
                    </div>
                  </div>
                  <div class="team-descr font-alt">
                    <div class="team-name">Andy River</div>
                    <div class="team-role">Creative director</div>
                  </div>
                </div>
              </div>
              <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onclick="wow fadeInUp">
                <div class="team-item">
                  <div class="team-image"><img src="/images/team-3.jpg" alt="Member Photo">
                    <div class="team-detail">
                      <h5 class="font-alt">Hello</h5>
                      <p class="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a&amp;nbsp;iaculis diam.</p>
                      <div class="team-social"><a href="#"><i class="fa fa-facebook"/></a><a href="#"><i class="fa fa-twitter"/></a><a href="#"><i class="fa fa-dribbble"/></a><a href="#"><i class="fa fa-skype"/></a></div>
                    </div>
                  </div>
                  <div class="team-descr font-alt">
                    <div class="team-name">Adele Snow</div>
                    <div class="team-role">Account manager</div>
                  </div>
                </div>
              </div>
              <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onclick="wow fadeInUp">
                <div class="team-item">
                  <div class="team-image"><img src="/images/team-4.jpg" alt="Member Photo">
                    <div class="team-detail">
                      <h5 class="font-alt">Yes, it's me</h5>
                      <p class="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a&amp;nbsp;iaculis diam.</p>
                      <div class="team-social"><a href="#"><i class="fa fa-facebook"/></a><a href="#"><i class="fa fa-twitter"/></a><a href="#"><i class="fa fa-dribbble"/></a><a href="#"><i class="fa fa-skype"/></a></div>
                    </div>
                  </div>
                  <div class="team-descr font-alt">
                    <div class="team-name">Dylan Woods</div>
                    <div class="team-role">Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="module bg-dark-60" :style="{backgroundImage: 'url(/images/section-3.jpg)'}" >
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Scoreboard</h2>
                <div class="module-subtitle font-serif"/>
              </div>
            </div>
            <div class="row multi-columns-row">
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="count-item mb-sm-40">
                  <div class="count-icon"><span class="icon-wallet"/></div>
                  <h3 class="count-to font-alt" data-countto="6543"/>
                  <h5 class="count-title font-serif">Dollars raised for charity</h5>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="count-item mb-sm-40">
                  <div class="count-icon"><span class="icon-wine"/></div>
                  <h3 class="count-to font-alt" data-countto="8"/>
                  <h5 class="count-title font-serif">Cups of wine consumed</h5>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="count-item mb-sm-40">
                  <div class="count-icon"><span class="icon-camera"/></div>
                  <h3 class="count-to font-alt" data-countto="184"/>
                  <h5 class="count-title font-serif">Photographs taken</h5>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="count-item mb-sm-40">
                  <div class="count-icon"><span class="icon-map-pin"/></div>
                  <h3 class="count-to font-alt" data-countto="32"/>
                  <h5 class="count-title font-serif">Locations covered</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" class="module">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Our Prices</h2>
                <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
            <div class="row multi-columns-row">
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="price-table font-alt">
                  <h4>Light</h4>
                  <div class="borderline"/>
                  <p class="price"><span>$</span>9
                  </p>
                  <ul class="price-details">
                    <li>Free Support</li>
                    <li>15 Demos Included</li>
                    <li><span>Newsletter</span></li>
                    <li><span>Working Contact Form</span></li>
                    <li><span>Unlimited Domains</span></li>
                  </ul><a class="btn btn-d btn-round" href="#">Sign Up</a>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="price-table font-alt">
                  <h4>Basic</h4>
                  <div class="borderline"/>
                  <p class="price"><span>$</span>29
                  </p>
                  <ul class="price-details">
                    <li>Free Support</li>
                    <li>15 Demos Included</li>
                    <li>Newsletter</li>
                    <li><span>Working Contact Form</span></li>
                    <li><span>Unlimited Domains</span></li>
                  </ul><a class="btn btn-d btn-round" href="#">Sign Up</a>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="price-table font-alt">
                  <h4>Ultimate</h4>
                  <div class="borderline"/>
                  <p class="price"><span>$</span>64
                  </p>
                  <ul class="price-details">
                    <li>Free Support</li>
                    <li>15 Demos Included</li>
                    <li>Newsletter</li>
                    <li>Working Contact Form</li>
                    <li>Unlimited Domains</li>
                  </ul><a class="btn btn-d btn-round" href="#">Sign Up</a>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="price-table font-alt">
                  <h4>Ultimate</h4>
                  <div class="borderline"/>
                  <p class="price"><span>$</span>119
                  </p>
                  <ul class="price-details">
                    <li>Free Support</li>
                    <li>15 Demos Included</li>
                    <li>Newsletter</li>
                    <li>Working Contact Form</li>
                    <li>Unlimited Domains</li>
                  </ul><a class="btn btn-d btn-round" href="#">Sign Up</a>
                </div>
              </div>
            </div>
            <div class="row mt-40">
              <div class="col-sm-6 col-sm-offset-3 align-center">
                <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="module bg-dark-60 pt-0 pb-0 parallax-bg testimonial" :style="{backgroundImage: 'url(/images/testimonial_bg.jpg)'}" >
          <div class="testimonials-slider pt-140 pb-140">
            <ul class="slides">
              <li>
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="module-icon"><span class="icon-quote"/></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                      <blockquote class="testimonial-text font-alt">I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</blockquote>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 col-sm-offset-4">
                      <div class="testimonial-author">
                        <div class="testimonial-caption font-alt">
                          <div class="testimonial-title">Jack Woods</div>
                          <div class="testimonial-descr">SomeCompany INC, CEO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="module-icon"><span class="icon-quote"/></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                      <blockquote class="testimonial-text font-alt">I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</blockquote>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 col-sm-offset-4">
                      <div class="testimonial-author">
                        <div class="testimonial-caption font-alt">
                          <div class="testimonial-title">Jim Stone</div>
                          <div class="testimonial-descr">SomeCompany INC, CEO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="module-icon"><span class="icon-quote"/></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                      <blockquote class="testimonial-text font-alt">I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</blockquote>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 col-sm-offset-4">
                      <div class="testimonial-author">
                        <div class="testimonial-caption font-alt">
                          <div class="testimonial-title">Adele Snow</div>
                          <div class="testimonial-descr">SomeCompany INC, CEO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="news" class="module">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Latest blog posts</h2>
                <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
            <div class="row multi-columns-row post-columns">
              <div class="col-sm-6 col-md-4 col-lg-4">
                <div class="post mb-20">
                  <div class="post-thumbnail"><a href="#"><img src="/images/post-1.jpg" alt="Blog-post Thumbnail"></a></div>
                  <div class="post-header font-alt">
                    <h2 class="post-title"><a href="#">Our trip to the Alps</a></h2>
                    <div class="post-meta">By&nbsp;<a href="#">Mark Stone</a>&nbsp;| 23 November | 3 Comments
                    </div>
                  </div>
                  <div class="post-entry">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                  </div>
                  <div class="post-more"><a class="more-link" href="#">Read more</a></div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4">
                <div class="post mb-20">
                  <div class="post-thumbnail"><a href="#"><img src="/images/post-2.jpg" alt="Blog-post Thumbnail"></a></div>
                  <div class="post-header font-alt">
                    <h2 class="post-title"><a href="#">Shore after the tide</a></h2>
                    <div class="post-meta">By&nbsp;<a href="#">Andy River</a>&nbsp;| 11 November | 4 Comments
                    </div>
                  </div>
                  <div class="post-entry">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                  </div>
                  <div class="post-more"><a class="more-link" href="#">Read more</a></div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4">
                <div class="post mb-20">
                  <div class="post-thumbnail"><a href="#"><img src="/images/post-3.jpg" alt="Blog-post Thumbnail"></a></div>
                  <div class="post-header font-alt">
                    <h2 class="post-title"><a href="#">We in New Zealand</a></h2>
                    <div class="post-meta">By&nbsp;<a href="#">Dylan Woods</a>&nbsp;| 5 November | 15 Comments
                    </div>
                  </div>
                  <div class="post-entry">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                  </div>
                  <div class="post-more"><a class="more-link" href="#">Read more</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="module-small bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-6 col-lg-4 col-lg-offset-2">
                <div class="callout-text font-alt">
                  <h3 class="callout-title">Subscribe now</h3>
                  <p>We will not spam your email.</p>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="callout-btn-box">
                  <form id="subscription-form" role="form" method="post" action="php/subscribe.php">
                    <div class="input-group">
                      <input id="semail" class="form-control" type="email" name="semail" placeholder="Your Email" data-validation-required-message="Please enter your email address." required="required"><span class="input-group-btn">
                        <button id="subscription-form-submit" class="btn btn-g btn-round" type="submit">Submit</button></span>
                    </div>
                  </form>
                  <div id="subscription-response" class="text-center"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="contact" class="module">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Get in touch</h2>
                <div class="module-subtitle font-serif"/>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <form id="contactForm" role="form" method="post" action="php/contact.php">
                  <div class="form-group">
                    <label class="sr-only" for="name">Name</label>
                    <input id="name" class="form-control" type="text" name="name" placeholder="Your Name*" required="required" data-validation-required-message="Please enter your name.">
                    <p class="help-block text-danger"/>
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="email">Email</label>
                    <input id="email" class="form-control" type="email" name="email" placeholder="Your Email*" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"/>
                  </div>
                  <div class="form-group">
                    <textarea id="message" class="form-control" rows="7" name="message" placeholder="Your Message*" required="required" data-validation-required-message="Please enter your message."/>
                    <p class="help-block text-danger"/>
                  </div>
                  <div class="text-center">
                    <button id="cfsubmit" class="btn btn-block btn-round btn-d" type="submit">Submit</button>
                  </div>
                </form>
                <div id="contactFormResponse" class="ajax-response font-alt"/>
              </div>
            </div>
          </div>
        </section>
        <section id="map-section">
          <div id="map"/>
        </section>
        <div class="module-small bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">About Titan</h5>
                  <p>The languages only differ in their grammar, their pronunciation and their most common words.</p>
                  <p>Phone: +1 234 567 89 10</p>Fax: +1 234 567 89 10
                  <p>Email:<a href="#">somecompany@example.com</a></p>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">Recent Comments</h5>
                  <ul class="icon-list">
                    <li>Maria on <a href="#">Designer Desk Essentials</a></li>
                    <li>John on <a href="#">Realistic Business Card Mockup</a></li>
                    <li>Andy on <a href="#">Eco bag Mockup</a></li>
                    <li>Jack on <a href="#">Bottle Mockup</a></li>
                    <li>Mark on <a href="#">Our trip to the Alps</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">Blog Categories</h5>
                  <ul class="icon-list">
                    <li><a href="#">Photography - 7</a></li>
                    <li><a href="#">Web Design - 3</a></li>
                    <li><a href="#">Illustration - 12</a></li>
                    <li><a href="#">Marketing - 1</a></li>
                    <li><a href="#">Wordpress - 16</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">Popular Posts</h5>
                  <ul class="widget-posts">
                    <li class="clearfix">
                      <div class="widget-posts-image"><a href="#"><img src="/images/rp-1.jpg" alt="Post Thumbnail"></a></div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title"><a href="#">Designer Desk Essentials</a></div>
                        <div class="widget-posts-meta">23 january</div>
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="widget-posts-image"><a href="#"><img src="/images/rp-2.jpg" alt="Post Thumbnail"></a></div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title"><a href="#">Realistic Business Card Mockup</a></div>
                        <div class="widget-posts-meta">15 February</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="divider-d">
        <AppFooter />
      </div>
      <div class="scroll-up"><a href="#totop"><i class="fa fa-angle-double-up"/></a></div>
    </main>
</template>


<style>
.fixed-height-section {
  height: 100vh; 
  min-height: 465px; 
  background-size: cover;
  background-position: center;
}

.works-grid {
  display: block;
  padding: 0;
  margin: 0;
}

.work-item {
  width: 637px;
  margin: 0;
  padding: 0;
  float: left;
  overflow: hidden;
}
</style>: string | number: string | number: string | number