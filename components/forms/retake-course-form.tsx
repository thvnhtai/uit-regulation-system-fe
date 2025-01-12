import { StudentInfoFields } from "@/components/shared/student-info-fields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProps } from "@/constants/types/form";

const RetakeCourseForm: React.FC<FormProps> = ({
	handleInputChange = () => {},
}) => {
	return (
		<div className="grid gap-4">
			<StudentInfoFields handleInputChange={handleInputChange} />

			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="studentYear">Sinh viên khóa</Label>
					<Input
						type="text"
						id="studentYear"
						name="studentYear"
						placeholder="Nhập khóa học"
						required
						onChange={(e) => handleInputChange("studentYear", e.target.value)}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="department">Khoa/Bộ môn</Label>
					<Input
						type="text"
						id="department"
						name="department"
						placeholder="Nhập khoa/bộ môn"
						required
						onChange={(e) => handleInputChange("department", e.target.value)}
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="prevSuspendedSemester">Học kỳ đã bảo lưu</Label>
					<Input
						type="text"
						id="prevSuspendedSemester"
						name="prevSuspendedSemester"
						placeholder="Nhập học kỳ đã bảo lưu"
						required
						onChange={(e) =>
							handleInputChange("prevSuspendedSemester", e.target.value)
						}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="prevSuspendedYear">Năm học</Label>
					<Input
						type="text"
						id="prevSuspendedYear"
						name="prevSuspendedYear"
						placeholder="Nhập năm học đã bảo lưu"
						required
						onChange={(e) =>
							handleInputChange("prevSuspendedYear", e.target.value)
						}
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="startSemester">Học kỳ bắt đầu học lại</Label>
					<Input
						type="text"
						id="startSemester"
						name="startSemester"
						placeholder="Nhập học kỳ bắt đầu học lại"
						required
						onChange={(e) => handleInputChange("startSemester", e.target.value)}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="startYear">Năm học</Label>
					<Input
						type="text"
						id="startYear"
						name="startYear"
						placeholder="Nhập năm học bắt đầu học lại"
						required
						onChange={(e) => handleInputChange("startYear", e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default RetakeCourseForm;
