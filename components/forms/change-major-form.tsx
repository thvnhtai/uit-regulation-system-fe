import { DatePicker } from "@/components/shared/date-picker";
import { StudentInfoFields } from "@/components/shared/student-info-fields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormProps } from "@/constants/types/form";

const ChangeMajorForm: React.FC<FormProps> = ({
	handleInputChange = () => {},
	date,
	setDate = () => {},
}) => {
	return (
		<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-x divide-gray-200">
			<div className="col-span-1 md:col-span-1">
				<div className="grid gap-2">
					<StudentInfoFields handleInputChange={handleInputChange} />

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
					<div className="col-span-1">
						<Label htmlFor="entranceExamScore">Tổng điểm thi tuyển sinh</Label>
						<Input
							type="number"
							id="entranceExamScore"
							name="entranceExamScore"
							placeholder="Nhập tổng điểm thi tuyển sinh (từ 0 đến 30)"
							min="0"
							max="30"
							required
							onChange={(e) =>
								handleInputChange("entranceExamScore", e.target.value)
							}
						/>
					</div>
				</div>
			</div>
			<div className="col-span-1 md:col-span-1">
				<div className="grid gap-2 sm:pl-4">
					<div className="col-span-1">
						<Label htmlFor="currentMajor">Hiện là sinh viên ngành</Label>
						<Input
							type="text"
							id="currentMajor"
							name="currentMajor"
							placeholder="Nhập ngành hiện tại"
							required
							onChange={(e) =>
								handleInputChange("currentMajor", e.target.value)
							}
						/>
					</div>
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
						<Label htmlFor="currentMajorEntryScore">
							Điểm đầu vào Ngành đang học
						</Label>
						<Input
							type="number"
							id="currentMajorEntryScore"
							name="currentMajorEntryScore"
							placeholder="Nhập điểm đầu vào"
							min="0"
							required
							onChange={(e) =>
								handleInputChange("currentMajorEntryScore", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1">
						<Label htmlFor="desiredMajor">Ngành xin chuyển đến</Label>
						<Input
							type="text"
							id="desiredMajor"
							name="desiredMajor"
							placeholder="Nhập ngành chuyển đến"
							required
							onChange={(e) =>
								handleInputChange("desiredMajor", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1">
						<Label htmlFor="desiredDepartment">Khoa</Label>
						<Input
							type="text"
							id="desiredDepartment"
							name="desiredDepartment"
							placeholder="Nhập tên khoa"
							required
							onChange={(e) =>
								handleInputChange("desiredDepartment", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1">
						<Label htmlFor="desiredMajorEntryScore">
							Điểm đầu vào ngành chuyển đến
						</Label>
						<Input
							type="number"
							id="desiredMajorEntryScore"
							name="desiredMajorEntryScore"
							placeholder="Nhập điểm đầu vào"
							min="0"
							required
							onChange={(e) =>
								handleInputChange("desiredMajorEntryScore", e.target.value)
							}
						/>
					</div>
				</div>
			</div>

			<div className="col-span-1 md:col-span-1">
				<div className="grid gap-2 sm:pl-4">
					<div className="col-span-1">
						<Label htmlFor="desiredMajorConfirmation">
							Tôi mong muốn được chuyển sang ngành
						</Label>
						<Input
							type="text"
							id="desiredMajorConfirmation"
							name="desiredMajorConfirmation"
							placeholder="Nhập tên ngành chuyển đến"
							required
							onChange={(e) =>
								handleInputChange("desiredMajorConfirmation", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1">
						<Label htmlFor="startSemester">Bắt đầu từ học kỳ</Label>
						<Input
							type="text"
							id="startSemester"
							name="startSemester"
							placeholder="Nhập học kỳ (e.g., 1, 2, Hè)"
							required
							onChange={(e) =>
								handleInputChange("startSemester", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1">
						<Label htmlFor="academicYear">Năm học</Label>
						<Input
							type="text"
							id="academicYear"
							name="academicYear"
							placeholder="Nhập năm học (e.g., 2023-2024)"
							required
							onChange={(e) =>
								handleInputChange("academicYear", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1">
						<Label htmlFor="reason">Vì lý do</Label>
						<Textarea
							id="reason"
							name="reason"
							placeholder="Nhập lý do"
							required
							rows={5}
							onChange={(e) => handleInputChange("reason", e.target.value)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangeMajorForm;
