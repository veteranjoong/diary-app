<script>
	export let value = '';
	export let minRows = 1;
	export let maxRows;
	export let placeholder = '';
	
	$: minHeight = `${1 + minRows * 1.6}em`;
	$: maxHeight = maxRows ? `${1 + maxRows * 1.6}em` : `auto`;
</script>

<div class="text-container">
	<pre
		aria-hidden="true"
		style="min-height: {minHeight}; max-height: {maxHeight}"
	>{value + '\n'}</pre>

	<textarea bind:value placeholder={placeholder}></textarea>	
</div>

<style>
	.text-container {
		position: relative;
	}
	
	pre, textarea {
		font-family: inherit;
		padding: 0.5em;
		box-sizing: border-box;
		border: 1px solid #eee;
		line-height: 1.6;
		overflow: hidden;
    font-size: inherit;
		font-weight: 300;
	}
	
	textarea {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		resize: none;
    background: transparent;
    outline: none;
	}
</style>