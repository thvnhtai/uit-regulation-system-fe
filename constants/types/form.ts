export interface FormProps {
	handleInputChange?: (fieldId: string, value: string) => void;
	date?: Date | undefined;
	setDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
	fromDate?: Date | undefined;
	setFromDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
	toDate?: Date | undefined;
	setToDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
	newDeadline?: Date | undefined;
	setNewDeadline?: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
