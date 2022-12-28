<template>
  <div>
    <p>state name: {{ name }}</p>
    <input type="text" v-model="text" />
    <input type="button" @click="changeState" value="state 변경" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      text: "",
    };
  },
  computed: {
    name() {
      // store만 reactive, 그러므로 state 내 Property 사용 시에는 computed를 이용해야 한다.
      // vue3는 선언적으로 reactive로 만들수 있어서 이런 문제는 없을듯.
      return this.$store.state.name;
    },
  },
  methods: {
    changeState() {
      this.$store.commit("change", this.text);
    },
  },
});
</script>

<style scoped></style>
