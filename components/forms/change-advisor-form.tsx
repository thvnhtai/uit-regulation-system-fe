import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormProps } from "@/constants/types/form";

const ChangeAdvisorForm: React.FC<FormProps> = ({
	handleInputChange = () => {},
}) => {
	return (
		<div className="grid gap-4">
			<div className="col-span-2">
				<Label htmlFor="toFaculty">Kính gửi: - Khoa</Label>
				<Input
					type="text"
					id="toFaculty"
					name="toFaculty"
					placeholder="Nhập tên khoa"
					required
					onChange={(e) => handleInputChange("toFaculty", e.target.value)}
				/>
			</div>

			<div className="grid grid-cols-3 col-span-2 gap-4">
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="fullName1">Tôi tên (1)</Label>
					<Input
						type="text"
						id="fullName1"
						name="fullName1"
						placeholder="Nhập họ và tên"
						required
						onChange={(e) => handleInputChange("fullName1", e.target.value)}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="studentId1">MSSV (1)</Label>
					<Input
						type="number"
						id="studentId1"
						name="studentId1"
						placeholder="Nhập MSSV"
						required
						onChange={(e) => handleInputChange("studentId1", e.target.value)}
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<Label htmlFor="phone1">Điện thoại liên lạc (1)</Label>
					<Input
						type="tel"
						id="phone1"
						name="phone1"
						placeholder="Nhập số điện thoại"
						required
						onChange={(e) => handleInputChange("phone1", e.target.value)}
					/>
				</div>
			</div>

			<div className="grid grid-cols-3 col-span-2 gap-4">
				<div className="col-span-1 sm:col-span-1">
					<Label htmlFor="fullName2">Tôi tên (2)</Label>
					<Input
						type="text"
						id="fullName2"
						name="fullName2"
						placeholder="Nhập họ và tên"
						onChange={(e) => handleInputChange("fullName2", e.target.value)}
					/>
				</div>
				<div className="col-span-1 sm:col-span-1">
					<Label htmlFor="studentId2">MSSV (2)</Label>
					<Input
						type="number"
						id="studentId2"
						name="studentId2"
						placeholder="Nhập MSSV"
						onChange={(e) => handleInputChange("studentId2", e.target.value)}
					/>
				</div>
				<div className="col-span-1 sm:col-span-1">
					<Label htmlFor="phone2">Điện thoại liên lạc (2)</Label>
					<Input
						type="tel"
						id="phone2"
						name="phone2"
						placeholder="Nhập số điện thoại"
						onChange={(e) => handleInputChange("phone2", e.target.value)}
					/>
				</div>
			</div>

			<div className="grid grid-cols-3 col-span-2 gap-4">
				<div className="col-span-3 sm:col-span-1">
					<Label htmlFor="studentYear">Hiện là sinh viên khóa</Label>
					<Input
						type="text"
						id="studentYear"
						name="studentYear"
						placeholder="Nhập khóa học"
						required
						onChange={(e) => handleInputChange("studentYear", e.target.value)}
					/>
				</div>
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
					<Label htmlFor="educationSystem">Hệ Đào tạo</Label>
					<Input
						type="text"
						id="educationSystem"
						name="educationSystem"
						placeholder="Nhập hệ đào tạo"
						required
						onChange={(e) =>
							handleInputChange("educationSystem", e.target.value)
						}
					/>
				</div>
			</div>

			<div className="col-span-2 grid grid-cols-3 gap-2 items-center">
				<Label htmlFor="thesisTitle" className="col-span-3">
					Tên đề tài
				</Label>
				<Input
					type="text"
					id="thesisTitle"
					name="thesisTitle"
					placeholder="Nhập tên đề tài"
					required
					maxLength={255}
					className="col-span-3"
					onChange={(e) => handleInputChange("thesisTitle", e.target.value)}
				/>
			</div>
			<div className="col-span-2 grid grid-cols-3 gap-2 items-center">
				<Label htmlFor="currentAdvisor" className="col-span-1">
					Giảng viên hướng dẫn hiện tại
				</Label>
				<Input
					type="text"
					id="currentAdvisor"
					name="currentAdvisor"
					placeholder="Nhập tên giảng viên hướng dẫn hiện tại"
					required
					className="col-span-2"
					onChange={(e) => handleInputChange("currentAdvisor", e.target.value)}
				/>
			</div>

			<div className="col-span-2 grid grid-cols-3 gap-2 items-center">
				<Label htmlFor="newAdvisor" className="col-span-1">
					Giảng viên hướng dẫn mới
				</Label>
				<Input
					type="text"
					id="newAdvisor"
					name="newAdvisor"
					placeholder="Nhập tên giảng viên hướng dẫn mới"
					required
					className="col-span-2"
					onChange={(e) => handleInputChange("newAdvisor", e.target.value)}
				/>
			</div>

			<div className="col-span-2">
				<Label htmlFor="reason">Lý do đổi GVHD</Label>
				<Textarea
					id="reason"
					name="reason"
					placeholder="Nhập lý do"
					rows={5}
					required
					onChange={(e) => handleInputChange("reason", e.target.value)}
				/>
			</div>
		</div>
	);
};

export default ChangeAdvisorForm;
