<template>
<section>
  <!-- Page Content -->
    <header>
        <c-slides></c-slides>
    </header>

  <div class="container">

    <h1 class="my-4">Welcome to Modern Business</h1>

    <!-- Marketing Icons Section -->
    <div class="row">
      <div class="col-lg-4 mb-4" v-for="n in 3">
        <c-feature-card />
      </div>
      
    </div>
    <!-- /.row -->

    <!-- Portfolio Section -->
    <h2>Portfolio Heading</h2>

    <div class="row">
      <div class="col-lg-4 col-sm-6 portfolio-item" v-for="n in 6">
        <c-portfolio-card />
      </div>
    </div>
    <!-- /.row -->

    <!-- Features Section -->
    <c-feature-block />
    <!-- /.row -->

    <hr>

    <!-- Call to Action Section -->
    <c-call-to-action />

  </div>
  <!-- /.container -->
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>