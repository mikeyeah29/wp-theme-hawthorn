<?php
/**
 * Render the Contact Section block.
 *
 * @package Hawthorn
 */

$attributes = wp_parse_args(
	$attributes,
	array(
		'heading'      => 'Contact',
		'intro'        => 'Complete the form below or get in touch directly by email or phone, and I’ll get back to you as soon as I can.',
		'formId'       => '07c568a',
		'formTitle'    => 'Contact form 1',
		'directPrompt' => 'Prefer to get in touch directly?',
		'email'        => 'annemarie@hawthornpsychology.com',
	)
);

$heading       = is_string( $attributes['heading'] ) ? $attributes['heading'] : '';
$intro         = is_string( $attributes['intro'] ) ? $attributes['intro'] : '';
$form_id       = preg_replace( '/[^A-Za-z0-9_-]/', '', (string) $attributes['formId'] );
$form_title    = str_replace( array( '"', '[', ']' ), '', sanitize_text_field( (string) $attributes['formTitle'] ) );
$direct_prompt = is_string( $attributes['directPrompt'] ) ? $attributes['directPrompt'] : '';
$email         = sanitize_email( (string) $attributes['email'] );
$block_props   = get_block_wrapper_attributes( array( 'class' => 'hawthorn-contact-section' ) );
?>
<section <?php echo $block_props; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="hawthorn-contact-section__inner">
		<?php if ( $heading ) : ?>
			<h1 class="hawthorn-contact-section__heading has-hero-font-size"><?php echo wp_kses_post( $heading ); ?></h1>
		<?php endif; ?>

		<div class="hawthorn-contact-section__content">
			<?php if ( $intro ) : ?>
				<p class="hawthorn-contact-section__intro has-sm-font-size"><?php echo wp_kses_post( $intro ); ?></p>
			<?php endif; ?>

			<?php if ( $form_id && shortcode_exists( 'contact-form-7' ) ) : ?>
				<div class="hawthorn-contact-section__form">
					<?php
					echo do_shortcode(
						sprintf(
							'[contact-form-7 id="%s" title="%s"]',
							$form_id,
							$form_title
						)
					); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					?>
				</div>
			<?php endif; ?>

			<?php if ( $direct_prompt ) : ?>
				<p class="hawthorn-contact-section__direct has-sm-font-size"><strong><?php echo wp_kses_post( $direct_prompt ); ?></strong></p>
			<?php endif; ?>

			<?php if ( $email ) : ?>
				<p class="hawthorn-contact-section__email has-sm-font-size">
					<?php esc_html_e( 'Email:', 'hawthorn' ); ?>
					<strong><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></strong>
				</p>
			<?php endif; ?>
		</div>
	</div>
</section>
