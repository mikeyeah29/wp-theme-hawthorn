<?php
/**
 * Render the Editorial Section Alt block.
 *
 * @package Hawthorn
 */

$background_image_id  = $attributes['backgroundImageId'] ?? 0;
$background_image_url = $attributes['backgroundImageUrl'] ?? '';
$heading              = $attributes['heading'] ?? '';

if ( $background_image_id ) {
	$attachment_url = wp_get_attachment_image_url( $background_image_id, 'full' );

	if ( $attachment_url ) {
		$background_image_url = $attachment_url;
	}
}

$background_style = $background_image_url
	? 'background-image:url(' . esc_url( $background_image_url ) . ');'
	: '';
$image_class      = $background_image_id ? ' wp-image-' . absint( $background_image_id ) : '';
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'wp-block-group alignfull is-layout-constrained wp-block-group-is-layout-constrained' ) ); ?>>
	<div class="wp-block-cover alignfull is-light has-parallax br hawthorn-editorial-section-alt">
		<div
			class="wp-block-cover__image-background size-full has-parallax<?php echo esc_attr( $image_class ); ?>"
			<?php if ( $background_style ) : ?>
				style="<?php echo esc_attr( $background_style ); ?>"
			<?php endif; ?>
		></div>
		<span class="wp-block-cover__background has-light-background-color has-background-dim-60 has-background-dim" aria-hidden="true"></span>
		<div class="wp-block-cover__inner-container is-layout-constrained wp-block-cover-is-layout-constrained">
			<div class="wp-block-columns alignwide are-vertically-aligned-top is-layout-flex wp-block-columns-is-layout-flex">
				<div class="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow" style="flex-basis:33.333%">
					<?php if ( $heading ) : ?>
						<h2 class="wp-block-heading has-xl-font-size hawthorn-editorial-section-alt__heading"><?php echo wp_kses_post( $heading ); ?></h2>
					<?php endif; ?>
				</div>
				<div class="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow hawthorn-editorial-section-alt__content" style="flex-basis:66.666%">
					<?php echo $content; ?>
				</div>
			</div>
		</div>
	</div>
</div>
