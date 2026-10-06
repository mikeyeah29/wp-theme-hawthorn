import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const variant = attributes.variant || 'standard';
	const { heading } = attributes;
	const blockProps = useBlockProps.save( {
		className: `hawthorn-hero hawthorn-hero--${ variant }`,
	} );

	return (
		<section { ...blockProps }>
			<div className="hawthorn-hero__inner">
				<RichText.Content
					tagName="h1"
					className="wp-block-heading has-hero-font-size hawthorn-hero__heading"
					value={ heading }
				/>
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
