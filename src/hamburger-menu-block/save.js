import { useBlockProps } from "@wordpress/block-editor";
import { lineHeights } from "./edit";

export default function save({ attributes }) {
	const { size, anchor } = attributes;

	return (
		<button
			{...useBlockProps.save()}
			style={{
				height: size,
				width: size,
				"--block-hamburger-menu-height-ratio": `${size / 4}px`,
				"--block-hamburger-menu-line-height": `${lineHeights[size]}px`,
			}}
			id={anchor ? anchor : undefined}
		>
			<span />
			<span />
			<span />
		</button>
	);
}
