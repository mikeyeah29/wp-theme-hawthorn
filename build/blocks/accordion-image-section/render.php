<?php
/**
 * Render the Accordion Image Section block.
 *
 * @package Hawthorn
 */

$heading   = $attributes['heading'] ?? '';
$image_id  = $attributes['imageId'] ?? 0;
$image_url = $attributes['imageUrl'] ?? '';
$image_alt = $attributes['imageAlt'] ?? '';
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'wp-block-group alignwide is-layout-constrained wp-block-group-is-layout-constrained', 'style' => 'padding-top:0' ) ); ?>>
	<div class="wp-block-columns alignwide are-vertically-aligned-center is-layout-flex wp-block-columns-is-layout-flex">
		<div class="wp-block-column is-vertically-aligned-center hawthorn-accordion-image-section__content" style="flex-basis:50%">
			<?php if ( $heading ) : ?>
				<h2 class="wp-block-heading has-xl-font-size"><?php echo wp_kses_post( $heading ); ?></h2>
			<?php endif; ?>
			<?php echo $content; ?>
		</div>
		<div class="wp-block-column is-vertically-aligned-center hawthorn-accordion-image-section__image" style="flex-basis:50%">
			<?php if ( $image_id ) : ?>
				<figure class="wp-block-image size-full br">
					<?php
					echo wp_get_attachment_image(
						$image_id,
						'full',
						false,
						array(
							'alt'   => $image_alt,
							'style' => 'aspect-ratio:1;object-fit:cover',
						)
					);
					?>
				</figure>
			<?php elseif ( $image_url ) : ?>
				<figure class="wp-block-image size-full br">
					<img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( $image_alt ); ?>" style="aspect-ratio:1;object-fit:cover">
				</figure>
			<?php endif; ?>
		</div>
	</div>
</div>
