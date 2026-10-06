import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const attributes = {
	align: {
		type: 'string',
		default: 'full',
	},
	variant: {
		type: 'string',
		default: 'standard',
	},
};

function save( { attributes: blockAttributes } ) {
	const variant = blockAttributes.variant || 'standard';
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

function migrate( blockAttributes, innerBlocks ) {
	const headingIndex = innerBlocks.findIndex(
		( block ) => block.name === 'core/heading'
	);

	if ( headingIndex === -1 ) {
		return [ { ...blockAttributes, heading: '' }, innerBlocks ];
	}

	const heading = innerBlocks[ headingIndex ].attributes.content || '';
	const supportingBlocks = innerBlocks.filter(
		( block, index ) => index !== headingIndex
	);

	return [ { ...blockAttributes, heading }, supportingBlocks ];
}

export default [
	{
		attributes,
		migrate,
		save,
	},
];
