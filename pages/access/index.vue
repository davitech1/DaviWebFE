<script setup>
import RegisterForm from '~/components/Auth/RegisterForm.vue'
import LoginForm from '~/components/Auth/LoginForm.vue'
import AppHeaderDefault from '~/components/AppHeaderDefault.vue';
</script>

<template>
  <main>
    <!-- <PageLoader /> -->
    <AppHeaderDefault />
    <div class="main">
      <section class="module bg-dark-30" :style="{backgroundImage: 'url(/images/section-4.jpg)'}">
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                  <h1 class="module-title font-alt mb-0">Đăng nhập - Đăng ký</h1>
                </div>
              </div>
            </div>
          </section>
          <section class="module">
            <div class="container">
              <div class="row">
                <div class="col-sm-5 col-sm-offset-1 mb-sm-40">
                  <h4 class="font-alt">Login</h4>
                  <hr class="divider-w mb-10">
                  <LoginForm />
                </div>
                <div class="col-sm-5">
                  <h4 class="font-alt">Đăng ký</h4>
                  <hr class="divider-w mb-10">
                  <RegisterForm />
                </div>
              </div>
            </div>
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
                        <div class="widget-posts-image"><a href="#"><img src="assets/images/rp-1.jpg" alt="Post Thumbnail"></a></div>
                        <div class="widget-posts-body">
                          <div class="widget-posts-title"><a href="#">Designer Desk Essentials</a></div>
                          <div class="widget-posts-meta">23 january</div>
                        </div>
                      </li>
                      <li class="clearfix">
                        <div class="widget-posts-image"><a href="#"><img src="assets/images/rp-2.jpg" alt="Post Thumbnail"></a></div>
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

</style>