<?php
/**
 * Hawthorn child theme functions.
 *
 * @package Hawthorn
 */

// function hawthorn_enqueue_google_fonts() {
// 	wp_enqueue_style(
// 		'hawthorn-google-fonts',
// 		'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
// 		array(),
// 		null
// 	);
// }

// add_action( 'wp_enqueue_scripts', 'hawthorn_enqueue_google_fonts', 5 );
// add_action( 'enqueue_block_editor_assets', 'hawthorn_enqueue_google_fonts', 5 );

add_action( 'after_setup_theme', function () {
	add_editor_style( 'style.css' );
}, 20 );

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style(
		'enigma-style',
		get_template_directory_uri() . '/style.css',
		array(),
		wp_get_theme( 'enigma' )->get( 'Version' )
	);

	wp_enqueue_style(
		'hawthorn-style',
		get_stylesheet_uri(),
		array( 'enigma-style' ),
		wp_get_theme()->get( 'Version' )
	);
}, 20 );

add_filter( 'render_block_data', function ( $parsed_block ) {
	if ( 'core/accordion' === ( $parsed_block['blockName'] ?? '' ) ) {
		$parsed_block['attrs']['autoclose'] = true;
	}

	return $parsed_block;
} );

add_filter( 'render_block_core/accordion', function ( $content ) {
	if ( '' === $content ) {
		return $content;
	}

	$processor = new WP_HTML_Tag_Processor( $content );

	if ( $processor->next_tag( array( 'class_name' => 'wp-block-accordion' ) ) ) {
		$processor->set_attribute(
			'data-wp-context',
			'{ "autoclose": true, "accordionItems": [] }'
		);
		$content = $processor->get_updated_html();
	}

	return $content;
} );

add_action( 'init', function () {
    register_block_style(
        'core/button',
        array(
            'name'  => 'hawthorn-arrow',
            'label' => __( 'Hawthorn Arrow', 'hawthorn' ),
        )
    );
} );

/**
 * Register blocks built by the Hawthorn child theme.
 *
 * `npm run build` creates both the compiled block assets and the metadata
 * manifest used here. The fallback keeps registration working on WordPress
 * versions that predate block metadata collections.
 */
function hawthorn_register_blocks() {
	$build_dir  = get_stylesheet_directory() . '/build';
	$blocks_dir = $build_dir . '/blocks';
	$manifest   = $build_dir . '/blocks-manifest.php';

	if ( file_exists( $manifest ) && function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( $blocks_dir, $manifest );
		return;
	}

	$block_json_files = glob( $blocks_dir . '/*/block.json' );

	foreach ( $block_json_files ?: array() as $block_json ) {
		register_block_type( $block_json );
	}
}
add_action( 'init', 'hawthorn_register_blocks' );
