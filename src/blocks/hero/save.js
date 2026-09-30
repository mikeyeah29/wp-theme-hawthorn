import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const variant = attributes.variant || 'standard';
	const blockProps = useBlockProps.save( {
		className: `hawthorn-hero hawthorn-hero--${ variant }`,
	} );

	return (
		<section { ...blockProps }>
			<div className="hawthorn-hero__inner">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
