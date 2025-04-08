/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { PanelBody, TextareaControl } from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { executeOnClick } = attributes;
	const props = useBlockProps();
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "hamburger-menu-icon")}>
					<TextareaControl
						__nextHasNoMarginBottom
						label={__(
							"Javascript",
							"hamburger-menu-icon",
						)}
						help={__(
							"Enter javascript to be executed when users click on the button",
							"hamburger-menu-icon",
						)}
						value={executeOnClick || ""}
						onChange={(value) => setAttributes({ executeOnClick: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<button {...props}>
				<span />
				<span />
				<span />
			</button>
		</>
	);
}
