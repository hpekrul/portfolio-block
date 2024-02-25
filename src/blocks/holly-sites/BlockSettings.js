import React from "react";
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {ColorPalette, PanelRow} from "@wordpress/components";




export class BlockSettings extends React.Component {

	render(){


		const {attributes, setAttributes} = this.props;

		return (
			<InspectorControls>
				<PanelColorSettings
					title="Colors"
					colorSettings={[
						{label: "Text Color",
							value: attributes.textColor,
							onChange: textColor => setAttributes({textColor})
						},
						{label: "Heading Color",
							value: attributes.headingColor,
							onChange: headingColor => setAttributes({headingColor})
						}

					]}
				></PanelColorSettings>
				<PanelRow>
					Hover Color
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={[
							{name: 'light red', color: 'rgba(255,0,0, 0.7)'},
							{name: 'light purple', color: '#ef67ef70'},
							{name: 'light lilac', color: '#B1B1F570'},
							{name: 'transparent black', color: 'rgba(0, 0, 0, 0.9)'},
						]}
						 value={attributes.layOverColor}
						onChange={layOverColor => setAttributes({layOverColor})}
						disableCustomColors={true}
					/>
				</PanelRow>
				<PanelRow>
					Button Color
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={[
							{name: 'black', color: '#000000'},
							{name: 'light purple', color: 'rgba(196,109,196)'},
							{name: 'light lilac', color: 'rgba(133,133,224)'},
							{name: 'white', color: '#ffffff'},
						]}
						value={attributes.buttonrColor}
						onChange={buttonColor => setAttributes({buttonColor})}
						disableCustomColors={true}
					/>
				</PanelRow>
			</InspectorControls>
		)
	}
}
