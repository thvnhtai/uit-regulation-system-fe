import { StudentInfoFields } from "@/components/shared/student-info-fields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormProps } from "@/constants/types/form";

const ReferenceLetterForm: React.FC<FormProps> = ({
	handleInputChange = () => {},
}) => {
	return (
		<div className="grid gap-4">
			<StudentInfoFields handleInputChange={handleInputChange} />

			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="studentYear">Đang học năm thứ</Label>
					<Input
						type="text"
						id="studentYear"
						name="studentYear"
						placeholder="Nhập năm học"
						required
						onChange={(e) => handleInputChange("studentYear", e.target.value)}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="major">Ngành</Label>
					<Input
						type="text"
						id="major"
						name="major"
						placeholder="Nhập ngành học"
						required
						onChange={(e) => handleInputChange("major", e.target.value)}
					/>
				</div>
			</div>

			<div className="col-span-2">
				<Label htmlFor="contactPurpose">Đến liên hệ về việc</Label>
				<Textarea
					id="contactPurpose"
					name="contactPurpose"
					placeholder="Nhập mục đích liên hệ"
					rows={3}
					required
					onChange={(e) => handleInputChange("contactPurpose", e.target.value)}
				/>
			</div>

			<div className="col-span-2">
				<Label htmlFor="companyName">
					Đề nghị Quý Cơ quan/Công ty giúp đỡ sinh viên
				</Label>
				<Input
					type="text"
					id="companyName"
					name="companyName"
					placeholder="Nhập tên cơ quan/công ty"
					required
					onChange={(e) => handleInputChange("companyName", e.target.value)}
				/>
			</div>
		</div>
	);
};

export default ReferenceLetterForm;
