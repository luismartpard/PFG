<template>
	<div class="layout-profile">
		<div>
			<img src="assets/logo.png" alt="" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				expanded: false
			}
		},
		methods: {
			onClick(event){
				this.expanded = !this.expanded;
				event.preventDefault();
			}
		}
	}
</script>

<style scoped>

</style>