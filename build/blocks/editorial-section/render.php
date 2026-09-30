<?php
/**
 * Render the Editorial Section block.
 *
 * @package Hawthorn
 */

$background_image_url = $attributes['backgroundImageUrl'] ?? '';
$heading              = $attributes['heading'] ?? '';

if ( ! $background_image_url ) {
	$background_image_url = get_stylesheet_directory_uri() . '/img/editorial-section-background.png';
}

$background_style = $background_image_url
	? 'background-image:url(' . esc_url( $background_image_url ) . ');'
	: '';
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'wp-block-group alignfull is-layout-constrained wp-block-group-is-layout-constrained' ) ); ?>>
	<div class="wp-block-cover alignfull is-light has-parallax hawthorn-editorial-section">
		<div
			class="wp-block-cover__image-background size-full has-parallax"
			<?php if ( $background_style ) : ?>
				style="<?php echo esc_attr( $background_style ); ?>"
			<?php endif; ?>
		></div>
		<span class="wp-block-cover__background has-neutral-background-color has-background-dim-90 has-background-dim" aria-hidden="true"></span>
		<div class="wp-block-cover__inner-container">
			<div class="wp-block-columns alignwide are-vertically-aligned-top is-layout-flex wp-block-columns-is-layout-flex">
				<div class="wp-block-column is-vertically-aligned-top" style="flex-basis:33.333%">
					<?php if ( $heading ) : ?>
						<h2 class="wp-block-heading has-xl-font-size hawthorn-editorial-section__heading"><?php echo wp_kses_post( $heading ); ?></h2>
					<?php endif; ?>
				</div>
				<div class="wp-block-column is-vertically-aligned-top hawthorn-editorial-section__content" style="flex-basis:66.666%">
					<?php echo $content; ?>
				</div>
			</div>
		</div>
	</div>
</div>
