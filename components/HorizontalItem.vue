<template>
      <div class="row">
        <div class="col-md-3">
          <a :href="parameters.link">
            <img class="img-fluid rounded mb-3 mb-md-0" :src="parameters.image" :alt="parameters.alt">
          </a>
        </div>
        <div class="col-md-9">
          <h3 v-text="parameters.title"></h3>
          <p v-text="parameters.description"></p>
          <a class="btn btn-primary" :href="parameters.link">{{ parameters.action }}
            <span class="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
      </div>
</template>
<script>
export default {
  name: 'c-horizontal-item',
  props: {
    parameters : {
        image: {
          type: String,
          default: "http://placehold.it/300x300",
        },
        alt: {
          type: String,
          default: "",
        },
        link: {
          type: String,
          default: "#",
        },
        title: {
          type: String,
          default: "Element Name",
        },
        description: {
          type: String,
          default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!",
        },
        action: {
          type: String,
          default: "View Element"
        }
      }
    },
  created() {
    console.log(this.parameters)
  }
}
</script>