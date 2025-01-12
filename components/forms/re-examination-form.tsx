import { DatePicker } from "@/components/shared/date-picker";
import { StudentInfoFields } from "@/components/shared/student-info-fields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProps } from "@/constants/types/form";

const ReExaminationForm: React.FC<FormProps> = ({
	handleInputChange = () => {},
	date,
	setDate,
}) => {
	return (
		<div className="grid gap-4">
			<div className="col-span-2">
				<Label htmlFor="toFaculty">Khoa/Bộ môn</Label>
				<Input
					type="text"
					id="toFaculty"
					name="toFaculty"
					placeholder="Nhập khoa/bộ môn"
					required
					onChange={(e) => handleInputChange("toFaculty", e.target.value)}
				/>
			</div>

			<StudentInfoFields handleInputChange={handleInputChange} />

			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="faculty">Khoa</Label>
					<Input
						type="text"
						id="faculty"
						name="faculty"
						placeholder="Nhập khoa"
						required
						onChange={(e) => handleInputChange("faculty", e.target.value)}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="phone">Điện thoại liên lạc</Label>
					<Input
						type="tel"
						id="phone"
						name="phone"
						placeholder="Nhập số điện thoại"
						required
						onChange={(e) => handleInputChange("phone", e.target.value)}
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="courseName">Đề nghị phúc khảo môn</Label>
					<Input
						type="text"
						id="courseName"
						name="courseName"
						placeholder="Nhập môn học"
						required
						onChange={(e) => handleInputChange("courseName", e.target.value)}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="class">Lớp</Label>
					<Input
						type="text"
						id="class"
						name="class"
						placeholder="Nhập lớp"
						required
						onChange={(e) => handleInputChange("class", e.target.value)}
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="examDate">Ngày thi</Label>
					<DatePicker
						date={date}
						setDate={setDate!}
						handleInputChange={handleInputChange}
						fieldId="examDate"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="examRoom">Phòng thi</Label>
					<Input
						type="text"
						id="examRoom"
						name="examRoom"
						placeholder="Nhập phòng thi"
						required
						onChange={(e) => handleInputChange("examRoom", e.target.value)}
					/>
				</div>
			</div>

			<div className="col-span-2">
				<Label htmlFor="currentScore">Điểm hiện tại (Điểm cuối kỳ)</Label>
				<Input
					type="number"
					id="currentScore"
					name="currentScore"
					placeholder="Nhập điểm hiện tại"
					required
					onChange={(e) => handleInputChange("currentScore", e.target.value)}
				/>
			</div>
		</div>
	);
};

export default ReExaminationForm;
