import { StudentInfoFields } from "@/components/shared/student-info-fields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProps } from "@/constants/types/form";

const EnglishExemptionForm: React.FC<FormProps> = ({
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
			</div>

			<div className="col-span-2">
				<Label htmlFor="classProgram">Lớp/Chương trình</Label>
				<Input
					type="text"
					id="classProgram"
					name="classProgram"
					placeholder="Nhập lớp/chương trình"
					required
					onChange={(e) => handleInputChange("classProgram", e.target.value)}
				/>
			</div>

			<div className="col-span-2">
				<Label htmlFor="englishCourse">Học phần Anh văn xin miễn</Label>
				<Input
					type="text"
					id="englishCourse"
					name="englishCourse"
					placeholder="Nhập học phần Anh văn xin miễn"
					required
					onChange={(e) => handleInputChange("englishCourse", e.target.value)}
				/>
			</div>

			<div className="col-span-2">
				<Label htmlFor="certificate">Đính kèm là chứng chỉ</Label>
				<Input
					type="text"
					id="certificate"
					name="certificate"
					placeholder="Nhập chứng chỉ đính kèm"
					required
					onChange={(e) => handleInputChange("certificate", e.target.value)}
				/>
			</div>
		</div>
	);
};

export default EnglishExemptionForm;
