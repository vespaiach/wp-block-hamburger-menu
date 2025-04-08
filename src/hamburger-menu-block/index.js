import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import edit from "./edit";
import save from "./save";
import metadata from "./block.json";

const icon = (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0_429_11066)">
			<path
				d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
				stroke="#292929"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_429_11066">
				<rect
					width="24"
					height="24"
					fill="white"
					transform="translate(0 0.000915527)"
				/>
			</clipPath>
		</defs>
	</svg>
);

registerBlockType(metadata.name, { icon, edit, save });
