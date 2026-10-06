import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { heading } = attributes;
	const blockProps = useBlockProps.save( {
		className: 'hawthorn-benefits-list',
	} );

	return (
		<section { ...blockProps }>
			<div className="hawthorn-benefits-list__inner">
				<div className="hawthorn-benefits-list__card">
					<RichText.Content
						tagName="h2"
						className="wp-block-heading has-xl-font-size hawthorn-benefits-list__heading"
						value={ heading }
					/>
					<div className="hawthorn-benefits-list__items">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</section>
	);
}
