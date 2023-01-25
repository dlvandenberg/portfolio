export const formatDate = (date: string | undefined): string | undefined => {
	return date
		? new Date(date).toLocaleDateString('nl-NL', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
		  })
		: undefined;
};
