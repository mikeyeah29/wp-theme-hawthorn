import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( { attributes, clientId, setAttributes } ) {
	const { heading, intro, formId, formTitle, directPrompt, email } =
		attributes;
	const previewId = `hawthorn-contact-${ clientId }`;
	const blockProps = useBlockProps( {
		className: 'hawthorn-contact-section',
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Contact details', 'hawthorn' ) }
					initialOpen
				>
					<TextControl
						label={ __( 'Contact Form 7 ID', 'hawthorn' ) }
						help={ __(
							'Use the ID shown in the Contact Form 7 shortcode.',
							'hawthorn'
						) }
						value={ formId }
						onChange={ ( value ) =>
							setAttributes( { formId: value } )
						}
					/>
					<TextControl
						label={ __( 'Contact form title', 'hawthorn' ) }
						value={ formTitle }
						onChange={ ( value ) =>
							setAttributes( { formTitle: value } )
						}
					/>
					<TextControl
						label={ __( 'Direct email address', 'hawthorn' ) }
						type="email"
						value={ email }
						onChange={ ( value ) =>
							setAttributes( { email: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<section { ...blockProps }>
				<div className="hawthorn-contact-section__inner">
					<RichText
						tagName="h1"
						className="hawthorn-contact-section__heading has-hero-font-size"
						value={ heading }
						allowedFormats={ [] }
						onChange={ ( value ) =>
							setAttributes( { heading: value } )
						}
						placeholder={ __( 'Add a heading…', 'hawthorn' ) }
					/>

					<div className="hawthorn-contact-section__content">
						<RichText
							tagName="p"
							className="hawthorn-contact-section__intro has-sm-font-size"
							value={ intro }
							allowedFormats={ [
								'core/bold',
								'core/italic',
								'core/link',
							] }
							onChange={ ( value ) =>
								setAttributes( { intro: value } )
							}
							placeholder={ __(
								'Add introductory text…',
								'hawthorn'
							) }
						/>

						<div
							className="wpcf7 hawthorn-contact-section__form-preview"
							aria-hidden="true"
						>
							<form>
								<p>
									<label htmlFor={ `${ previewId }-name` }>
										{ __( 'Your name', 'hawthorn' ) }
										<br />
										<input
											id={ `${ previewId }-name` }
											type="text"
											disabled
										/>
									</label>
								</p>
								<p>
									<label htmlFor={ `${ previewId }-email` }>
										{ __( 'Your email', 'hawthorn' ) }
										<br />
										<input
											id={ `${ previewId }-email` }
											type="email"
											disabled
										/>
									</label>
								</p>
								<p>
									<label htmlFor={ `${ previewId }-subject` }>
										{ __( 'Subject', 'hawthorn' ) }
										<br />
										<input
											id={ `${ previewId }-subject` }
											type="text"
											disabled
										/>
									</label>
								</p>
								<p>
									<label htmlFor={ `${ previewId }-message` }>
										{ __(
											'Your message (optional)',
											'hawthorn'
										) }
										<br />
										<textarea
											id={ `${ previewId }-message` }
											rows="10"
											disabled
										/>
									</label>
								</p>
								<p>
									<input
										className="wpcf7-submit"
										type="submit"
										value={ __( 'Submit', 'hawthorn' ) }
										disabled
									/>
								</p>
							</form>
						</div>

						<RichText
							tagName="p"
							className="hawthorn-contact-section__direct has-sm-font-size"
							value={ directPrompt }
							allowedFormats={ [] }
							onChange={ ( value ) =>
								setAttributes( { directPrompt: value } )
							}
							placeholder={ __(
								'Add a direct contact prompt…',
								'hawthorn'
							) }
						/>

						<p className="hawthorn-contact-section__email has-sm-font-size">
							{ __( 'Email:', 'hawthorn' ) }{ ' ' }
							<strong>{ email }</strong>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
