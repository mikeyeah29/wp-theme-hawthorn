import {
	InnerBlocks,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'core/breadcrumbs', 'core/buttons', 'core/paragraph' ];

export default function Edit( { attributes, setAttributes } ) {
	const variant = attributes.variant || 'standard';
	const { heading } = attributes;
	const blockProps = useBlockProps( {
		className: `hawthorn-hero hawthorn-hero--${ variant }`,
	} );
	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		{
			className: 'hawthorn-hero__inner',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: InnerBlocks.ButtonBlockAppender,
			templateLock: false,
		}
	);

	return (
		<section { ...blockProps }>
			<div { ...innerBlocksProps }>
				<RichText
					tagName="h1"
					className="wp-block-heading has-hero-font-size hawthorn-hero__heading"
					value={ heading }
					onChange={ ( value ) =>
						setAttributes( { heading: value } )
					}
					placeholder={ __( 'Add a hero heading…', 'hawthorn' ) }
				/>
				{ children }
			</div>
		</section>
	);
}
