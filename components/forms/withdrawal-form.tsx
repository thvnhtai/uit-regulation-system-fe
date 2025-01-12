import { DatePicker } from "@/components/shared/date-picker";
import { StudentInfoFields } from "@/components/shared/student-info-fields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormProps } from "@/constants/types/form";

const WithdrawalForm: React.FC<FormProps> = ({
	handleInputChange = () => {},
	date,
	setDate = () => {},
	fromDate,
	setFromDate = () => {},
}) => (
	<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 divide-x divide-gray-200">
		<div className="col-span-1">
			<div className="grid gap-2">
				<StudentInfoFields handleInputChange={handleInputChange} />

				<div className="col-span-1">
					<Label htmlFor="currentDepartment">Khoa</Label>
					<Input
						type="text"
						id="currentDepartment"
						name="currentDepartment"
						placeholder="Nhập tên khoa"
						required
						onChange={(e) =>
							handleInputChange("currentDepartment", e.target.value)
						}
					/>
				</div>
				<div className="col-span-1">
					<Label htmlFor="dob">Sinh ngày</Label>
					<DatePicker
						date={date}
						setDate={setDate}
						handleInputChange={handleInputChange}
						fieldId="dob"
					/>
				</div>
				<div className="col-span-1">
					<Label htmlFor="birthPlace">Nơi sinh</Label>
					<Input
						type="text"
						id="birthPlace"
						name="birthPlace"
						placeholder="Nhập nơi sinh"
						required
						onChange={(e) => handleInputChange("birthPlace", e.target.value)}
					/>
				</div>
			</div>
		</div>
		<div className="col-span-1">
			<div className="grid gap-2 sm:pl-4">
				<div className="col-span-1">
					<Label htmlFor="fromDate">Thôi học kể từ ngày</Label>
					<DatePicker
						date={fromDate}
						setDate={setFromDate}
						handleInputChange={handleInputChange}
						fieldId="fromDate"
					/>
				</div>
				<div className="col-span-1">
					<Label htmlFor="academicYear">Niên học</Label>
					<Input
						type="text"
						id="academicYear"
						name="academicYear"
						placeholder="Nhập niên học"
						required
						onChange={(e) => handleInputChange("academicYear", e.target.value)}
					/>
				</div>
				<div className="col-span-1">
					<Label htmlFor="reason">Vì lý do</Label>
					<Textarea
						id="reason"
						name="reason"
						placeholder="Nhập lý do"
						required
						onChange={(e) => handleInputChange("reason", e.target.value)}
					/>
				</div>
			</div>
		</div>
	</div>
);

export default WithdrawalForm;
