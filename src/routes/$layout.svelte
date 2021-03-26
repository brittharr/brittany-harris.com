<script>
	import '../css/main.scss';
	import Header from './_header.svelte';
	import Footer from './_footer.svelte';
</script>

<Header />

<div class="page-content">
	<div class="wrapper">
		<slot />
	</div>
</div>

<Footer />
