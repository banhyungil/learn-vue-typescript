<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { fetchNews } from '@/api';

export default {
  components: {
    ListItem,
  },

  methods: {
    async fetchNewsItems() {
      const rsp = await fetchNews();
      console.log('response', rsp);
    },
  },

  created() {
    this.fetchNewsItems();
  },
};
</script>

<style></style>
