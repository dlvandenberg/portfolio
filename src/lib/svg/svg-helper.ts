import type { IconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { parse, type ElementNode, type Node } from 'svg-parser';

export const svgToFaIconDefinition = (
	svg: string,
	prefix: string,
	iconName: string,
	unicode: string,
): IconDefinition => {
	const values = getSvgPropertyValues(svg);

	return {
		prefix: prefix as IconPrefix,
		iconName: iconName as IconName,
		icon: [values.width, values.height, [], unicode, values.svgPath],
	};
};

const getSvgPropertyValues = (svg: string): { width: number; height: number; svgPath: string } => {
	let width: string | number = 0;
	let height: string | number = 0;
	const svgPath: string[] = [];

	try {
		const parsed = parse(svg);

		const [rootElement] = parsed.children.filter(isElementNode);
		if (rootElement) {
			width = rootElement.properties?.width ?? 0;
			height = rootElement.properties?.height ?? 0;

			rootElement.children.filter(isPathNode).forEach((path) => svgPath.push(path.properties.d));
		}
	} catch (error) {
		console.log('Could not parse SVG');
	}

	return {
		width: +width,
		height: +height,
		svgPath: svgPath.join(' '),
	};
};

const isElementNode = (value: Node): value is ElementNode => value.type === 'element';

const isPathNode = (
	value: string | Node,
): value is {
	type: 'element';
	tagName: 'path';
	properties: { d: string };
	children: Node[];
} =>
	typeof value === 'object' &&
	value.type === 'element' &&
	value.tagName === 'path' &&
	!!value.properties &&
	'd' in value.properties &&
	typeof value.properties.d === 'string';
