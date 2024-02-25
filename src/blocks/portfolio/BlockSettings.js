import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {
	ColorPalette,
	PanelBody,
	PanelRow,
	GradientPicker, ComboboxControl,

} from "@wordpress/components";
import {formatBold, formatItalic, link } from '@wordpress/icons';
import { useState } from 'react';



export class BlockSettings extends React.Component {

	render(){


		const {attributes, setAttributes} = this.props;

		return (
			<InspectorControls>
				<PanelBody title="Basic" initialOpen={true}>
					<PanelRow>
						Button Color
					</PanelRow>
					<PanelRow>
						<ColorPalette
							colors={[
								{name: 'darkBlue', color: '#070736'},
								{name: 'maroon', color: '#410941'},
								{name: 'lilac', color: '#B1B1F5'}
							]}
							value={attributes.myButton}
							onChange={myButton => setAttributes({myButton})}
							disableCustomColors={true}
						/>
					</PanelRow>
					<PanelRow>
						Text Size
					</PanelRow>
				<PanelRow>
					<ComboboxControl label="Heading Font Size"
									 value={attributes.font}
									 onChange={font => setAttributes({font})}
									 options = {[
						{
							value: 'small',
							label: 'Small',
						},
						{
							value: 'normal',
							label: 'Normal',
						},
						{
							value: 'large',
							label: 'Large',
						},
						]}
					/>
				</PanelRow>
					<PanelRow>
						Background Gradient
					</PanelRow>
					<PanelRow>
						<GradientPicker value={attributes.currentGradient}
										onChange={currentGradient => setAttributes({currentGradient})}
										gradients={ [
											{
												name: 'JShine',
												gradient:
													'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
												slug: 'jshine',
											},
											{
												name: 'Moonlit Asteroid',
												gradient:
													'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
												slug: 'moonlit-asteroid',
											},
											{
												name: 'Rastafarie',
												gradient:
													'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
												slug: 'rastafari',
											},
										] }
										/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		)
	}
}
