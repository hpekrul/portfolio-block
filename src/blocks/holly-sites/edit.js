/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {BlockSettings} from "./BlockSettings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	return (
		<div { ...useBlockProps() }>
			<BlockSettings attributes={attributes} setAttributes={setAttributes}/>
			<div className="project">
				<img src="https://placehold.it/400" className="img-thumbnail" alt="..."/>

				<div className="inner" style = {{ backgroundColor: attributes.layOverColor}}>
					<div className="card-body">
						<h5 className="card-title" style={{color: attributes.headingColor}}>Card title</h5>
						<p className="card-text" style={{color: attributes.textColor}}>Some quick example text to build on the card title and make up the bulk
							of the card's content.</p>
						<a href="#" className="btn btn-primary border-0"
						   style={{backgroundColor: attributes.buttonColor}}>Go somewhere</a>
					</div>

				</div>
			</div>
		</div>
	);
}
