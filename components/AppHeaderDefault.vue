<template>
  <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"/><span class="icon-bar"/><span class="icon-bar"/></button><NuxtLink class="navbar-brand" to="/">Davi</NuxtLink>
          </div>
          <div id="custom-collapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><NuxtLink to="/" >Home</NuxtLink>
              </li>
              <li><NuxtLink to="/contact" >Contact</NuxtLink>
              </li>
              <li><NuxtLink to="/access" >Login</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>