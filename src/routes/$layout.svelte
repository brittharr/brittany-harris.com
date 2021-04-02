<script>
	import '../css/main.scss';
	import Header from './_header.svelte';
	import Footer from './_footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
