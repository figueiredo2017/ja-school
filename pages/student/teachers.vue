<template>
<!-- Page Content -->
    <div class="container">

      <!-- Page Heading/Breadcrumbs -->
      <h1 class="mt-4 mb-3">Select the Teacher
        <small></small>
      </h1>


<div v-for="teacher in teachers">
      <c-horizontal-item :parameters="teacher"></c-horizontal-item>
      <hr>
      </div>

      

      <c-pagination></c-pagination>

    </div>
    <!-- /.container -->
</template>

<script>
export default {
  data: () => {
    return {
      teachers : [
        {
          title : "Reiko Nonogaki",
          alt : "Reiko Nonogaki",
          image : "https://www.towson.edu/cla/images/nonogaki-reiko-op-sq.jpg",
          description : "Every summer when Towson University Japanese language instructor Reiko Nonogaki travels to Japan to see family and friends, she also loads up on restaurant menus, train tickets, books, newspapers and the wildly popular “Manga” comics for her students back at TU.",
          link: "/teacher/reiko-nonogaki",
          action: "See Profile"
        },
        {
          title : "Hiromi Yonemoto",
          alt : "Hiromi Yonemoto",
          image : "https://www.brightwaterwaldorf.org/wp-content/uploads/2017/12/0153.jpg",
          description : "Born in Hiroshima, Japan, Hiromi Yonemoto has experience teaching her native language to English speakers, as well as teaching English to Japanese speaking.",
          link: "/teacher/Hiromi-Yonemoto",
          action: "See Profile"
        },
        {
          title : "Tomoko Graham",
          alt : "Tomoko Graham",
          image : "http://www.aatj.org/images/Graham.jpg",
          description : "Ms. Graham has been teaching all levels of Japanese language for over 30 years, both at universities and high schools. She loves her job, saying, “Day-to-Day classroom teaching is the heart of my profession”.",
          link: "/teacher/Tomoko-Graham",
          action: "See Profile"
          
        }
      ]
      
    }
  }
}
</script>