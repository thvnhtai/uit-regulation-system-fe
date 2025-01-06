"use client";

import React, { useState } from "react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Pointer } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface DocumentCardProps {
	name: string;
	description: string;
	url?: string;
	formName: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
	name,
	description,
	url,
	formName,
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleOpenDialog = () => {
		setIsDialogOpen(true);
	};

	const handleDownload = async () => {
		if (!url) return;

		window.open(url, "_self", "noopener,noreferrer");
	};

	const renderFormFields = () => {
		switch (formName) {
			case "Đơn xin chuyển ngành":
				return (
					<>
						<Label htmlFor="current-major">Current Major</Label>
						<Input id="current-major" placeholder="Enter your current major" />
						<Label htmlFor="desired-major">Desired Major</Label>
						<Input id="desired-major" placeholder="Enter your desired major" />
					</>
				);
			case "Đơn xin chuyển trường":
				return (
					<>
						<Label htmlFor="current-school">Current School</Label>
						<Input
							id="current-school"
							placeholder="Enter your current school"
						/>
						<Label htmlFor="desired-school">Desired School</Label>
						<Input
							id="desired-school"
							placeholder="Enter your desired school"
						/>
					</>
				);
			case "Đơn xin tạm ngưng và bảo lưu kết quả học tập":
				return (
					<>
						<Label htmlFor="reason">Reason for Suspension</Label>
						<Input id="reason" placeholder="Enter your reason for suspension" />
						<Label htmlFor="duration">Duration of Suspension</Label>
						<Input
							id="duration"
							type="text"
							placeholder="Enter the duration (e.g., 1 semester)"
						/>
					</>
				);
			case "Đơn xin thôi học":
				return (
					<>
						<Label htmlFor="reason-withdrawal">Reason for Withdrawal</Label>
						<Input
							id="reason-withdrawal"
							placeholder="Enter your reason for withdrawal"
						/>
					</>
				);
			case "Đơn xin bảo lưu kết quả trúng tuyển":
				return (
					<>
						<Label htmlFor="reason-reservation">Reason for Reservation</Label>
						<Input
							id="reason-reservation"
							placeholder="Enter your reason for reservation"
						/>
						<Label htmlFor="start-date">Desired Start Date</Label>
						<Input
							id="start-date"
							type="date"
							placeholder="Enter your desired start date"
						/>
					</>
				);

			case "Đơn xin hoãn thi":
				return (
					<>
						<Label htmlFor="course-name">Course Name</Label>
						<Input id="course-name" placeholder="Enter the course name" />
						<Label htmlFor="original-exam-date">Original Exam Date</Label>
						<Input
							id="original-exam-date"
							type="date"
							placeholder="Enter the original exam date"
						/>
						<Label htmlFor="reason-postponement">Reason for Postponement</Label>
						<Input
							id="reason-postponement"
							placeholder="Enter your reason for postponement"
						/>
						<Label htmlFor="requested-exam-date">Requested Exam Date</Label>
						<Input
							id="requested-exam-date"
							type="date"
							placeholder="Enter the requested exam date"
						/>
					</>
				);
			case "Đơn xin học lại":
				return (
					<>
						<Label htmlFor="course-name">Course Name</Label>
						<Input id="course-name" placeholder="Enter the course name" />
						<Label htmlFor="semester">Semester</Label>
						<Input id="semester" placeholder="Enter the semester" />
					</>
				);
			case "Đơn xin nhập học lại":
				return (
					<>
						<Label htmlFor="reason-readmission">Reason for Readmission</Label>
						<Input
							id="reason-readmission"
							placeholder="Enter your reason for readmission"
						/>
						<Label htmlFor="previous-suspension-date">
							Previous Suspension/Withdrawal Date
						</Label>
						<Input
							id="previous-suspension-date"
							type="date"
							placeholder="Enter the date of your previous suspension/withdrawal"
						/>
					</>
				);

			case "Đơn phúc khảo":
				return (
					<>
						<Label htmlFor="course-name">Course Name</Label>
						<Input id="course-name" placeholder="Enter the course name" />
						<Label htmlFor="exam-date">Exam Date</Label>
						<Input
							id="exam-date"
							type="date"
							placeholder="Enter the exam date"
						/>
						<Label htmlFor="reason-appeal">Reason for Appeal</Label>
						<Input
							id="reason-appeal"
							placeholder="Enter your reason for appeal"
						/>
						<Label htmlFor="original-grade">Original Grade</Label>
						<Input
							id="original-grade"
							placeholder="Enter your original grade"
						/>
					</>
				);
			case "Đơn điều chỉnh đăng ký học phần":
				return (
					<>
						<Label htmlFor="course-to-add">Course to Add</Label>
						<Input
							id="course-to-add"
							placeholder="Enter the course you want to add"
						/>
						<Label htmlFor="course-to-drop">Course to Drop</Label>
						<Input
							id="course-to-drop"
							placeholder="Enter the course you want to drop"
						/>
						<Label htmlFor="reason-adjustment">Reason for Adjustment</Label>
						<Input
							id="reason-adjustment"
							placeholder="Enter your reason for adjustment"
						/>
					</>
				);
			case "Đơn xin miễn học Anh văn":
				return (
					<>
						<Label htmlFor="english-certificate">English Certificate</Label>
						<Input
							id="english-certificate"
							placeholder="Enter your English certificate (e.g., IELTS, TOEFL)"
						/>
						<Label htmlFor="certificate-score">Certificate Score</Label>
						<Input
							id="certificate-score"
							placeholder="Enter your certificate score"
						/>
					</>
				);
			case "Đơn xin thi lại":
				return (
					<>
						<Label htmlFor="course-name">Course Name</Label>
						<Input id="course-name" placeholder="Enter the course name" />
						<Label htmlFor="exam-date">Exam Date</Label>
						<Input
							id="exam-date"
							type="date"
							placeholder="Enter the exam date"
						/>
						<Label htmlFor="reason-retake">Reason for Retake</Label>
						<Input
							id="reason-retake"
							placeholder="Enter your reason for retake"
						/>
					</>
				);
			case "Mẫu đơn xin đổi giáo viên hướng dẫn khóa luận tốt nghiệp":
				return (
					<>
						<Label htmlFor="thesis-title">Thesis Title</Label>
						<Input id="thesis-title" placeholder="Enter your thesis title" />
						<Label htmlFor="current-advisor">Current Advisor</Label>
						<Input
							id="current-advisor"
							placeholder="Enter your current advisor's name"
						/>
						<Label htmlFor="new-advisor">New Advisor</Label>
						<Input
							id="new-advisor"
							placeholder="Enter your new advisor's name"
						/>
						<Label htmlFor="reason-change-advisor">Reason for Change</Label>
						<Input
							id="reason-change-advisor"
							placeholder="Enter your reason for change of advisor"
						/>
					</>
				);
			case "Mẫu đơn xin đổi tên đề tài khóa luận tốt nghiệp":
				return (
					<>
						<Label htmlFor="current-thesis-title">Current Thesis Title</Label>
						<Input
							id="current-thesis-title"
							placeholder="Enter your current thesis title"
						/>
						<Label htmlFor="new-thesis-title">New Thesis Title</Label>
						<Input
							id="new-thesis-title"
							placeholder="Enter your new thesis title"
						/>
						<Label htmlFor="reason-change-title">Reason for Change</Label>
						<Input
							id="reason-change-title"
							placeholder="Enter your reason for change of title"
						/>
					</>
				);
			case "Mẫu đơn xin gia hạn thời gian thực hiện khóa luận tốt nghiệp":
				return (
					<>
						<Label htmlFor="thesis-title">Thesis Title</Label>
						<Input id="thesis-title" placeholder="Enter your thesis title" />
						<Label htmlFor="original-deadline">Original Deadline</Label>
						<Input
							id="original-deadline"
							type="date"
							placeholder="Enter the original deadline"
						/>
						<Label htmlFor="requested-deadline">Requested Deadline</Label>
						<Input
							id="requested-deadline"
							type="date"
							placeholder="Enter the requested deadline"
						/>
						<Label htmlFor="reason-extension">Reason for Extension</Label>
						<Input
							id="reason-extension"
							placeholder="Enter your reason for extension"
						/>
					</>
				);
			case "Mẫu báo cáo khóa luận tốt nghiệp":
				return (
					<>
						<Label htmlFor="notes">Notes</Label>
						<Input id="notes" placeholder="Enter any notes" />
					</>
				);
			case "Hình thức trình bày khóa luận tốt nghiệp":
				return (
					<>
						<Label htmlFor="notes">Notes</Label>
						<Input id="notes" placeholder="Enter any notes" />
					</>
				);
			case "Đề cương chi tiết khóa luận tốt nghiệp":
				return (
					<>
						<Label htmlFor="notes">Notes</Label>
						<Input id="notes" placeholder="Enter any notes" />
					</>
				);
			case "Giấy đề nghị":
				return (
					<>
						<Label htmlFor="notes">Notes</Label>
						<Input id="notes" placeholder="Enter any notes" />
					</>
				);
			case "Giấy giới thiệu":
				return (
					<>
						<Label htmlFor="notes">Notes</Label>
						<Input id="notes" placeholder="Enter any notes" />
					</>
				);
			default:
				return (
					<>
						<Label htmlFor="additional-info">Additional Information</Label>
						<Input
							id="additional-info"
							placeholder="Enter any additional information"
						/>
					</>
				);
		}
	};

	return (
		<Card className="w-full max-w-sm h-full flex flex-col justify-between bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
			<CardHeader className="flex flex-row items-center space-x-6 pb-2">
				<div>
					<h3 className="text-lg font-semibold text-gray-800">{name}</h3>
					<p className="text-sm text-gray-500">{description}</p>
				</div>
			</CardHeader>
			<CardFooter className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
				<Button
					variant="outline"
					size="sm"
					className="flex items-center"
					onClick={handleDownload}
				>
					<Download className="h-4 w-4 mr-1" />
					Tải về
				</Button>
				<Button
					variant="ghost"
					size="sm"
					className="flex items-center"
					onClick={handleOpenDialog}
				>
					<Pointer className="h-4 w-4 mr-1" />
					Dùng biểu mẫu
				</Button>
			</CardFooter>
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{name}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					<form className="grid gap-4 py-4">{renderFormFields()}</form>
					<DialogFooter>
						<Button type="submit">Submit</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</Card>
	);
};

export default DocumentCard;
