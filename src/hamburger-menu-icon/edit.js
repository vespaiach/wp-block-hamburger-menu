import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	TextareaControl,
	CustomSelectControl,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

const options = [
	{
		key: 16,
		name: "Small (16px x 16px)",
	},
	{
		key: 24,
		name: "Normal (24px x 24px)",
	},
	{
		key: 32,
		name: "Large (32px x 32px)",
	},
	{
		key: 40,
		name: "Larger (40px x 40px)",
	},
	{
		key: 64,
		name: "Huge (64px x 64px)",
	},
];

const lineHeights = {
	16: 1,
	24: 1,
	32: 2,
	40: 2,
	64: 3,
};

export default function Edit({ attributes, setAttributes }) {
	const { executeOnClick, size } = attributes;
	const props = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "hamburger-menu-icon")}>
					<TextareaControl
						__nextHasNoMarginBottom
						label={__("Javascript", "hamburger-menu-icon")}
						help={__(
							"Enter javascript to be executed when users click on the button",
							"hamburger-menu-icon",
						)}
						value={executeOnClick || ""}
						onChange={(value) => setAttributes({ executeOnClick: value })}
					/>
					<CustomSelectControl
						label="Size (w x h)"
						options={options}
						value={options.find((option) => option.key === size)}
						onChange={(selection) => {
							setAttributes({ size: selection.selectedItem.key });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<button
				{...props}
				style={{
					height: size,
					width: size,
					"--block-hamburger-menu-height-ratio": `${size / 4}px`,
					"--block-hamburger-menu-line-height": `${
						lineHeights[size] === 1 ? 1 : lineHeights[size] / 2
					}px`,
				}}
			>
				<span />
				<span />
				<span />
			</button>
		</>
	);
}
