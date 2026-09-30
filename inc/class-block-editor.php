<?php
/**
 * Hawthorn block editor customisations.
 *
 * @package Hawthorn
 */

final class Hawthorn_Block_Editor {

	/**
	 * Block supports that Hawthorn overrides from the parent theme.
	 */
	private const SUPPORT_OVERRIDES = array(
		'enigma/feature-card' => array(
			'align'           => false,
			'customClassName' => false,
			'color'           => array(
				'text'       => false,
				'background' => false,
				'gradients'  => false,
				'link'       => false,
			),
			'spacing'         => array(
				'margin'   => false,
				'padding'  => false,
				'blockGap' => false,
			),
		),
	);

	/**
	 * Register editor filters.
	 */
	public function __construct() {
		add_filter(
			'register_block_type_args',
			array( $this, 'filter_block_supports' ),
			10,
			2
		);

		add_action(
			'enqueue_block_editor_assets',
			array( $this, 'enqueue_block_support_overrides' ),
			20
		);

		add_filter(
			'block_bindings_supported_attributes_enigma/feature-card',
			function ( $attributes ) {
				return array_values(
					array_unique(
						array_merge(
							$attributes,
							array(
								'iconId',
								'iconUrl',
								'iconAlt',
								'title',
								'content',
							)
						)
					)
				);
			}
		);
	}

	/**
	 * Apply Hawthorn's block support overrides.
	 *
	 * @param array  $args       Block registration arguments.
	 * @param string $block_type Block type name.
	 * @return array
	 */
	public function filter_block_supports( $args, $block_type ) {
		if ( ! isset( self::SUPPORT_OVERRIDES[ $block_type ] ) ) {
			return $args;
		}

		$args['supports'] = array_replace_recursive(
			$args['supports'] ?? array(),
			self::SUPPORT_OVERRIDES[ $block_type ]
		);

		return $args;
	}

	/**
	 * Apply the same overrides before the parent theme registers its blocks in
	 * JavaScript. The parent bundle defines its supports on both the server and
	 * client, so both registrations need to be filtered.
	 */
	public function enqueue_block_support_overrides() {
		$overrides = wp_json_encode( self::SUPPORT_OVERRIDES );

		$script = <<<JS
( function( wp ) {
	var overrides = {$overrides};

	wp.hooks.addFilter(
		'blocks.registerBlockType',
		'hawthorn/restrict-block-supports',
		function( settings, name ) {
			if ( ! overrides[ name ] ) {
				return settings;
			}

			return Object.assign( {}, settings, {
				supports: Object.assign(
					{},
					settings.supports || {},
					overrides[ name ]
				)
			} );
		}
	);
}( window.wp ) );
JS;

		wp_add_inline_script( 'enigma-blocks-editor', $script, 'before' );
	}
}
