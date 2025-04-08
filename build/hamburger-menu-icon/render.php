<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$ratio = $attributes['size'] / 4;
$half_line_height = match ($attributes['size']) {
	6 => 1,
	24 => 1,
	32 => 2,
	40 => 2,
	default => 3,
};
$style = "height: {$attributes['size']}px; width: {$attributes['size']}px; --block-hamburger-menu-height-ratio: {$ratio}px; --block-hamburger-menu-line-height: {$half_line_height}px";
?>
<button <?php echo get_block_wrapper_attributes(); ?> style="<?php echo $style; ?>">
	<span></span>
	<span></span>
	<span></span>
</button>
<?php if (isset($attributes['executeOnClick']) && $attributes['executeOnClick']) { ?>
	<script>
		document.addEventListener('DOMContentLoaded', function () {
			document.querySelector('button.wp-block-create-block-hamburger-menu-icon').addEventListener('click', function () {
				<?php echo $attributes['executeOnClick'] ?>;
			})
		});
	</script>
<?php } ?>