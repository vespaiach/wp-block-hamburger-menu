import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	TextareaControl,
	TextControl,
	CustomSelectControl,
} from "@wordpress/components";
import {
	InspectorControls,
	InspectorAdvancedControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";

export const options = [
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

export const lineHeights = {
	16: 1,
	24: 1,
	32: 1.5,
	40: 2,
	64: 3,
};

export default function Edit({ attributes, setAttributes }) {
	const { executeOnClick, size, anchor } = attributes;
	const [open, setOpen] = useState(false);
	const props = useBlockProps();

	useEffect(() => {
		if (!anchor) {
			setAttributes({ anchor: `hamburger-menu-block-${Date.now()}` });
		}
	}, [anchor]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "hamburger-menu-block")}>
					<TextareaControl
						__nextHasNoMarginBottom
						label={__("Javascript", "hamburger-menu-block")}
						help={__(
							"Enter javascript to be executed when users click on the button",
							"hamburger-menu-block",
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
			<InspectorAdvancedControls>
				<TextControl
					__nextHasNoMarginBottom
					__next40pxDefaultSize
					label="HTML anchor"
					help={__(
						"Specify a unique anchor ID for this block. This allows you to link directly to this block.",
						"hamburger-menu-block",
					)}
					placeholder="hamburger-menu-block-id"
					value={anchor}
					onChange={(nextValue) => {
						setAttributes({
							anchor: nextValue,
						});
					}}
				/>
			</InspectorAdvancedControls>
			<button
				{...props}
				className={props.className + (open ? " open" : "")}
				style={{
					height: size,
					width: size,
					"--block-hamburger-menu-height-ratio": `${size / 4}px`,
					"--block-hamburger-menu-line-height": `${lineHeights[size]}px`,
				}}
			>
				<span />
				<span />
				<span />
			</button>
		</>
	);
}
