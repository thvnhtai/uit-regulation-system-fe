import { DatePicker } from "@/components/shared/date-picker";
import { StudentInfoFields } from "@/components/shared/student-info-fields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormProps } from "@/constants/types/form";

const RecommendationRequestForm: React.FC<FormProps> = ({
	handleInputChange = () => {},
	date,
	setDate = () => {},
}) => {
	return (
		<div className="grid gap-4">
			<StudentInfoFields handleInputChange={handleInputChange} />

			<div className="grid grid-cols-2 gap-4">
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
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="dob">Ngày tháng năm sinh</Label>
					<DatePicker
						date={date}
						setDate={setDate}
						handleInputChange={handleInputChange}
						fieldId="dob"
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 col-span-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="phone">Số điện thoại</Label>
					<Input
						type="tel"
						id="phone"
						name="phone"
						placeholder="Nhập số điện thoại"
						required
						onChange={(e) => handleInputChange("phone", e.target.value)}
					/>
				</div>

				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						id="email"
						name="email"
						placeholder="Nhập email"
						required
						onChange={(e) => handleInputChange("email", e.target.value)}
					/>
				</div>
			</div>

			<div className="col-span-2">
				<Label htmlFor="content">Nội dung đề nghị</Label>
				<Textarea
					id="content"
					name="content"
					placeholder="Nhập nội dung đề nghị"
					rows={6}
					required
					onChange={(e) => handleInputChange("content", e.target.value)}
				/>
			</div>
		</div>
	);
};

export default RecommendationRequestForm;
