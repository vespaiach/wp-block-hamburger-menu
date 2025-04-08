<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<button <?php echo get_block_wrapper_attributes(); ?> style="--block-hamburger-menu-height-ratio: 10px;">
	<span></span>
	<span></span>
	<span></span>
</button>

<?php if (isset($attributes['executeOnClick']) && $attributes['executeOnClick']) { ?>
<script>
	document.addEventListener('DOMContentLoaded', function () {
		document.querySelector('button.wp-block-create-block-hamburger-menu-icon').addEventListener('click', function() {
			<?php echo $attributes['executeOnClick'] ?>;
		})
	});
</script>
<?php } ?>