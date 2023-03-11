export type RequiredKeys<T extends { [key: string]: unknown }> = { [P in keyof T]: boolean };

export const isObject = <T extends { [key: string]: unknown }>(
	keys: RequiredKeys<T>,
	value: unknown,
): value is T => {
	return (
		!!value &&
		typeof value === 'object' &&
		Object.entries(keys)
			.filter(([, required]) => required)
			.every(([key]) => key in value)
	);
};
