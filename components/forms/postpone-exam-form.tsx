import { StudentInfoFields } from "@/components/shared/student-info-fields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormProps } from "@/constants/types/form";

const PostponeExamForm: React.FC<FormProps> = ({
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

			<div className="grid grid-cols-3 col-span-2 gap-4">
				<div className="col-span-3 sm:col-span-1">
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
				<div className="col-span-3 sm:col-span-1">
					<Label htmlFor="semester">Học kỳ</Label>
					<Input
						type="text"
						id="semester"
						name="semester"
						placeholder="Nhập học kỳ"
						required
						onChange={(e) => handleInputChange("semester", e.target.value)}
					/>
				</div>
				<div className="col-span-3 sm:col-span-1">
					<Label htmlFor="academicYear">Năm học</Label>
					<Input
						type="text"
						id="academicYear"
						name="academicYear"
						placeholder="Nhập năm học"
						required
						onChange={(e) => handleInputChange("academicYear", e.target.value)}
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 col-span-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="reason">Lý do xin hoãn thi</Label>
					<Textarea
						id="reason"
						name="reason"
						placeholder="Nhập lý do xin hoãn thi"
						rows={5}
						required
						onChange={(e) => handleInputChange("reason", e.target.value)}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="postponedCourses">Các học phần xin hoãn</Label>
					<Textarea
						id="postponedCourses"
						name="postponedCourses"
						placeholder="Nhập các học phần xin hoãn"
						rows={5}
						required
						onChange={(e) =>
							handleInputChange("postponedCourses", e.target.value)
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default PostponeExamForm;
