<script>
export default {
  data() {
    return {
      isTransparent: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.isTransparent = false
      } else {
        this.isTransparent = true
      }
    }
  }
}
</script>

<template>
    <nav :class="['navbar', 'navbar-custom', 'navbar-fixed-top', 'one-page', {'navbar-transparent': isTransparent}]" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"/><span class="icon-bar"/><span class="icon-bar"/></button><a class="navbar-brand" href="index.html">Davi</a>
          </div>
          <div id="custom-collapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><NuxtLink class="section-scroll" to="/">Home</NuxtLink></li>
              <li><NuxtLink class="section-scroll" to="/contact">Contact</NuxtLink></li>
              <li><NuxtLink class="section-scroll" to="/access">Login</NuxtLink></li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<style scoped>
.navbar {
  transition: background-color 0.3s ease;
}
.navbar-transparent {
  background-color: transparent;
}
/* Thêm các styles khác nếu cần */
</style>