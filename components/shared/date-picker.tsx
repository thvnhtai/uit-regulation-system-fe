import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

interface DatePickerProps {
	date: Date | undefined;
	setDate: (date: Date | undefined) => void;
	fromDate?: Date;
	toDate?: Date;
	handleInputChange: (fieldId: string, value: string) => void;
	fieldId: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
	date,
	setDate,
	fromDate,
	toDate,
	handleInputChange,
	fieldId,
}) => (
	<Popover>
		<PopoverTrigger asChild>
			<Button
				variant={"outline"}
				className={cn(
					"w-full justify-start text-left font-normal",
					!date && "text-muted-foreground"
				)}
			>
				<CalendarIcon className="mr-2 h-4 w-4" />
				{date ? format(date, "dd/MM/yyyy") : <span>Chọn ngày</span>}
			</Button>
		</PopoverTrigger>
		<PopoverContent className="w-auto p-2" align="end">
			<div className="flex gap-2">
				<Select
					onValueChange={(value) => {
						const newDate = new Date(
							date ? date.getFullYear() : new Date().getFullYear(),
							parseInt(value, 10) - 1,
							date ? date.getDate() : 1
						);
						setDate(newDate);
					}}
					defaultValue={String(
						(date ? date.getMonth() : new Date().getMonth()) + 1
					)}
				>
					<SelectTrigger>
						<SelectValue placeholder="Chọn tháng" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="Chọn tháng" disabled hidden>
							Chọn tháng
						</SelectItem>
						{Array.from({ length: 12 }, (_, i) => (
							<SelectItem key={i + 1} value={String(i + 1)}>
								{i + 1}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Select
					onValueChange={(value) => {
						const newDate = new Date(
							parseInt(value, 10),
							date ? date.getMonth() : new Date().getMonth(),
							date ? date.getDate() : 1
						);
						setDate(newDate);
					}}
					defaultValue={String((date || new Date()).getFullYear())}
				>
					<SelectTrigger>
						<SelectValue placeholder="Chọn năm" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="Chọn năm" disabled hidden>
							Chọn năm
						</SelectItem>
						{Array.from(
							{ length: 100 },
							(_, i) => new Date().getFullYear() - i
						).map((year) => (
							<SelectItem key={year} value={String(year)}>
								{year}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<Calendar
				mode="single"
				selected={date}
				onSelect={(selectedDate) => {
					if (selectedDate) {
						setDate(selectedDate);
						handleInputChange(fieldId, selectedDate.toISOString());
					}
				}}
				fromDate={fromDate}
				toDate={toDate}
				month={date}
				initialFocus
			/>
		</PopoverContent>
	</Popover>
);
