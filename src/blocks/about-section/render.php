<?php
/**
 * Render the About Section block.
 *
 * @package Hawthorn
 */

$heading   = $attributes['heading'] ?? '';
$image_id  = $attributes['imageId'] ?? 0;
$image_url = $attributes['imageUrl'] ?? '';
$image_alt = $attributes['imageAlt'] ?? '';
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'wp-block-group alignfull is-layout-constrained wp-block-group-is-layout-constrained' ) ); ?>>
	<div class="wp-block-group alignfull br has-neutral-background-color has-background is-layout-constrained wp-block-group-is-layout-constrained hawthorn-about-section">
		<div class="wp-block-columns alignwide is-layout-flex wp-block-columns-is-layout-flex">
			<div class="wp-block-column hawthorn-about-section__image" style="flex-basis:33.333%">
				<?php if ( $image_id ) : ?>
					<figure class="wp-block-image size-full">
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
					<figure class="wp-block-image size-full">
						<img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( $image_alt ); ?>" style="aspect-ratio:1;object-fit:cover">
					</figure>
				<?php endif; ?>
			</div>
			<div class="wp-block-column hawthorn-about-section__content" style="flex-basis:66.666%">
				<?php if ( $heading ) : ?>
					<h2 class="wp-block-heading has-xl-font-size hawthorn-about-section__heading"><?php echo wp_kses_post( $heading ); ?></h2>
				<?php endif; ?>
				<?php echo $content; ?>
			</div>
		</div>
	</div>
</div>
