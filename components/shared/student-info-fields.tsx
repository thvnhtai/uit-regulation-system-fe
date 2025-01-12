import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StudentInfoFieldsProps {
	handleInputChange: (fieldId: string, value: string) => void;
}

export const StudentInfoFields: React.FC<StudentInfoFieldsProps> = ({
	handleInputChange,
}) => (
	<div className="grid grid-cols-2 gap-4">
		<div className="col-span-2 sm:col-span-1">
			<Label htmlFor="fullName">Tôi tên là</Label>
			<Input
				type="text"
				id="fullName"
				name="fullName"
				placeholder="Nhập họ và tên"
				required
				onChange={(e) => handleInputChange("fullName", e.target.value)}
			/>
		</div>
		<div className="col-span-2 sm:col-span-1">
			<Label htmlFor="studentId">MSSV</Label>
			<Input
				type="number"
				id="studentId"
				name="studentId"
				placeholder="Nhập MSSV"
				required
				onChange={(e) => handleInputChange("studentId", e.target.value)}
			/>
		</div>
	</div>
);
