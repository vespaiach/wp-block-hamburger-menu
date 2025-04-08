<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$ratio = $attributes['size'] / 4;
$half_line_height = match ($attributes['size']) {
	6 => 1,
	24 => 1,
	32 => 1.5,
	40 => 2,
	default => 3,
};
$style = "height: {$attributes['size']}px; width: {$attributes['size']}px; --block-hamburger-menu-height-ratio: {$ratio}px; --block-hamburger-menu-line-height: {$half_line_height}px";
?>
<button <?php echo get_block_wrapper_attributes(); ?> style="<?php echo $style; ?>" <?php if (isset($attributes['anchor']) && $attributes['anchor']) { echo 'id="' . esc_attr($attributes['anchor']) . '"'; } ?>>
	<span></span>
	<span></span>
	<span></span>
</button>
<?php if (isset($attributes['anchor']) && $attributes['anchor']) { ?>
<script>
	document.addEventListener('DOMContentLoaded', function () {
		document.getElementById('<?php echo esc_attr($attributes['anchor']); ?>').addEventListener('click', function () {
			this.classList.toggle("open");
			<?php if (isset($attributes['executeOnClick']) && $attributes['executeOnClick']) { ?>
				try {
					<?php echo $attributes['executeOnClick'] ?>;
				} catch (e) {
					console.error('Error executing onClick function:', e);
				}
			<?php } ?>
		})
	});
</script>
<?php } ?>