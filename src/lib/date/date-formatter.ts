export const formatDate = (date: string | undefined | Date): string | undefined => {
	return date ? (typeof date === 'string' ? format(new Date(date)) : format(date)) : undefined;
};

function format(date: Date): string {
	return date.toLocaleDateString('nl-NL', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
}
