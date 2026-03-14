// Formato: 01 / Ene / 2026 12:00:00
const spanishFormatDate = (fullDate) => {
	const spanishMonths = [
		'Ene', 
		'Feb', 
		'Mar', 
		'Abr', 
		'May', 
		'Jun', 
		'Jul', 
		'Ago', 
		'Sep', 
		'Oct', 
		'Nov', 
		'Dic'
	];
	const date = new Date(fullDate);
	const day = String(date.getDate()).padStart(2, '0');
	const month = spanishMonths[date.getMonth()];
	const year = date.getFullYear();
	// Convertir a formato 12 horas con AM/PM
	const hours24 = date.getHours();
	const ampm = hours24 >= 12 ? 'pm' : 'am';
	const hours12 = hours24 % 12 || 12; // Convertir 0 a 12
	const hours = String(hours12).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	//
	return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
};

export const dateFormate = {
	spanishFormatDate
};
