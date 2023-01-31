import { describe, expect, it } from 'vitest';
import { svgToFaIconDefinition } from './svg-helper';

describe('SvgHelper', () => {
	it('should return an IconDefinition with default values when no valid SVG is passed', () => {
		const svg = '';
		const prefix = 'vit';
		const iconName = 'unit';
		const unicode = 'e001';

		const iconDef = svgToFaIconDefinition(svg, prefix, iconName, unicode);

		expect(iconDef).toEqual({
			prefix,
			iconName,
			icon: [0, 0, [], unicode, ''],
		});
	});

	it('should return a valid IconDefinition', () => {
		const width = 20;
		const height = 20;
		const svgPath =
			'M5 9C4.44772 9 4 9.44772 4 10V15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 ' +
			'15.5523 16 15V5C16 4.44772 15.5523 4 15 4H10C9.44772 4 9 4.44772 9 5V8C9 8.55228 8.55228 ' +
			'9 8 9H5Z';
		const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" \
fill="none" xmlns="http://www.w3.org/2000/svg">\n\
<path d="${svgPath}" fill="#1196E1"/>\n\
</svg>\n`;
		const prefix = 'vit';
		const iconName = 'svelte';
		const unicode = 'e002';

		const iconDef = svgToFaIconDefinition(svg, prefix, iconName, unicode);

		expect(iconDef).toEqual({
			prefix,
			iconName,
			icon: [width, height, [], unicode, svgPath],
		});
	});
});
