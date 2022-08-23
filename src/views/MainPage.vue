<template>
	<div class="main list-container contents">
		<h1 class="page-header">Today I Learn. Main Page</h1>
		<ul>
			<li v-for="postItem in postItems" :key="postItem._id">
				{{ postItem.contents }}
			</li>
		</ul>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/index';
export default {
	data() {
		return {
			postItems: [],
		};
	},
	methods: {
		async fetchNotes() {
			const { data } = await fetchPosts();
			this.postItems = data.posts;
			console.log('posts:::', this.postItems);
		},
	},
	created() {
		this.fetchNotes();
	},
};
</script>

<style></style>
