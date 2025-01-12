import { DatePicker } from "@/components/shared/date-picker";
import { StudentInfoFields } from "@/components/shared/student-info-fields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormProps } from "@/constants/types/form";

const ReserveAdmissionForm: React.FC<FormProps> = ({
	handleInputChange = () => {},
	date,
	setDate,
	fromDate,
	setFromDate,
	toDate,
	setToDate,
}) => {
	return (
		<div className="grid gap-4">
			<StudentInfoFields handleInputChange={handleInputChange} />

			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="dob">Sinh ngày</Label>
					<DatePicker
						date={date}
						setDate={setDate!}
						handleInputChange={handleInputChange}
						fieldId="dob"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
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

			<div className="col-span-2">
				<Label htmlFor="department">Khoa</Label>
				<Input
					type="text"
					id="department"
					name="department"
					placeholder="Nhập khoa"
					required
					onChange={(e) => handleInputChange("department", e.target.value)}
				/>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="registrationNumber">Số báo danh</Label>
					<Input
						type="text"
						id="registrationNumber"
						name="registrationNumber"
						placeholder="Nhập số báo danh"
						required
						onChange={(e) =>
							handleInputChange("registrationNumber", e.target.value)
						}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="examYear">Kỳ thi tuyển sinh năm</Label>
					<Input
						type="number"
						id="examYear"
						name="examYear"
						placeholder="Nhập năm thi tuyển sinh"
						required
						onChange={(e) => handleInputChange("examYear", e.target.value)}
					/>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4">
				<div className="col-span-3 sm:col-span-1">
					<Label htmlFor="score1">Điểm thi môn 1</Label>
					<Input
						type="number"
						id="score1"
						name="score1"
						placeholder="Nhập điểm môn 1"
						required
						onChange={(e) => handleInputChange("score1", e.target.value)}
					/>
				</div>
				<div className="col-span-3 sm:col-span-1">
					<Label htmlFor="score2">Điểm thi môn 2</Label>
					<Input
						type="number"
						id="score2"
						name="score2"
						placeholder="Nhập điểm môn 2"
						required
						onChange={(e) => handleInputChange("score2", e.target.value)}
					/>
				</div>
				<div className="col-span-3 sm:col-span-1">
					<Label htmlFor="score3">Điểm thi môn 3</Label>
					<Input
						type="number"
						id="score3"
						name="score3"
						placeholder="Nhập điểm môn 3"
						required
						onChange={(e) => handleInputChange("score3", e.target.value)}
					/>
				</div>
			</div>

			<div className="col-span-2">
				<Label htmlFor="reason">Nay vì lý do</Label>
				<Textarea
					id="reason"
					name="reason"
					placeholder="Nhập lý do"
					rows={3}
					required
					onChange={(e) => handleInputChange("reason", e.target.value)}
				/>
			</div>

			<div className="grid grid-cols-3 col-span-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="fromDate">Bảo lưu kết quả từ ngày</Label>
					<DatePicker
						date={fromDate}
						setDate={setFromDate!}
						handleInputChange={handleInputChange}
						fieldId="fromDate"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="toDate">Đến ngày</Label>
					<DatePicker
						date={toDate}
						setDate={setToDate!}
						handleInputChange={handleInputChange}
						fieldId="toDate"
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
			</div>
		</div>
	);
};

export default ReserveAdmissionForm;
