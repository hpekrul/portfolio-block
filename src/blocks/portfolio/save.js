/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText, URLInputButton} from '@wordpress/block-editor';
import {Button} from "@wordpress/components";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	const divStyles = {
		background: attributes.currentGradient,
	}

	return (
		<div { ...useBlockProps.save({style: divStyles})}>
			<div className="cardBorder">
				<div>
					<img className="photo" src={attributes.photo} alt="Placeholder Photo"/>
				</div>
				<RichText.Content style = {{fontSize: attributes.font}}
								className="title"
								  tagName="h3"
								  value={attributes.title}>

				</RichText.Content>
				<div className="center">
			<button className="myButton" style = {{ backgroundColor: attributes.myButton}}><a href={attributes.linkUrl}>More Details</a></button>
				</div>
			</div>
		</div>

	);
}
