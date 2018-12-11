<template>
  <div>

    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">Online School</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/learn">Learn</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/teach">Teach</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/join">Join Now</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



    <nuxt/>

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <b-row>
          <b-col class="text-center"><a class="text-light" href="/pages/terms-of-use">Terms of Use</a></b-col>
          <b-col class="text-center"><a class="text-light" href="/pages/privacy-policy">Privacy Policy</a></b-col>
          <b-col class="text-center"><a class="text-light" href="/pages/faq">FAQ</a></b-col>
          <b-col class="text-center"><a class="text-light" href="/teacher/join">Apply to Teach</a></b-col>
          <b-col class="text-center"><a class="text-light" href="/pages/affiliate">Affiliate Partners</a></b-col>
          <b-col class="text-center"><a class="text-light" href="/pages/recommend">Get $70</a></b-col>
          <b-col class="text-center"><a class="text-light" href="/pages/company">Company</a></b-col>
        </b-row>
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      </div>
      <!-- /.container -->
    </footer>


  <script src="/vendor/jquery/jquery.min.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  </div>

</template>