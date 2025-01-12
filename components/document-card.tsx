"use client";

import React, { useState } from "react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, LoaderCircle, Pointer } from "lucide-react";
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
import { format } from "date-fns";
import {
	ChangeAdvisorForm,
	ChangeMajorForm,
	ChangeThesisTitleForm,
	EnglishExemptionForm,
	PostponeExamForm,
	RecommendationRequestForm,
	ReEnrollmentForm,
	ReExaminationForm,
	ReferenceLetterForm,
	ReserveAdmissionForm,
	RetakeCourseForm,
	SuspendStudiesForm,
	ThesisExtensionForm,
	WithdrawalForm,
} from "@/components/forms";

interface DocumentCardProps {
	name: string;
	description: string;
	url?: string;
	docxUrl?: string;
	formName: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
	name,
	description,
	url,
	docxUrl,
	formName,
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [formData, setFormData] = useState<{ [key: string]: string }>({});
	const [date, setDate] = React.useState<Date>();
	const [fromDate, setFromDate] = useState<Date>();
	const [toDate, setToDate] = useState<Date>();
	const [newDeadline, setNewDeadline] = useState<Date>();
	const [isLoading, setIsLoading] = useState(false);

	const handleOpenDialog = () => {
		setIsDialogOpen(true);
	};

	const handleDownload = async () => {
		if (!url) return;

		window.open(url, "_self", "noopener,noreferrer");
	};

	const handleInputChange = (fieldId: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[fieldId]: value,
		}));
	};

	const handleSubmit = async () => {
		if (!docxUrl) return;
		setIsLoading(true);
		try {
			const formattedDate = date ? format(date, "dd/MM/yyyy") : "";

			setFormData((prevData) => ({
				...prevData,
				dob: formattedDate,
				fromDate: fromDate ? format(fromDate, "dd/MM/yyyy") : "",
				toDate: toDate ? format(toDate, "dd/MM/yyyy") : "",
				newDeadline: newDeadline ? format(newDeadline, "dd/MM/yyyy") : "",
			}));
			const response = await fetch("/api/generate-doc", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({ url: docxUrl, formData }),
			});

			console.log(response);

			if (response.ok) {
				const blob = await response.blob();
				const link = document.createElement("a");
				link.href = window.URL.createObjectURL(blob);
				link.download = `${formName}.docx`;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				setIsDialogOpen(false);
			} else {
				console.error("Failed to generate document");
			}
		} catch (error) {
			console.error("Error generating document:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const renderFormFields = () => {
		switch (formName) {
			case "Đơn xin chuyển ngành":
				return (
					<ChangeMajorForm
						handleInputChange={handleInputChange}
						date={date}
						setDate={setDate}
					/>
				);
			case "Đơn xin tạm ngưng và bảo lưu kết quả học tập":
				return (
					<SuspendStudiesForm
						handleInputChange={handleInputChange}
						date={date}
						setDate={setDate}
						fromDate={fromDate}
						setFromDate={setFromDate}
						toDate={toDate}
						setToDate={setToDate}
					/>
				);
			case "Đơn xin thôi học":
				return (
					<WithdrawalForm
						handleInputChange={handleInputChange}
						date={date}
						setDate={setDate}
						fromDate={fromDate}
						setFromDate={setFromDate}
					/>
				);
			case "Đơn xin bảo lưu kết quả trúng tuyển":
				return (
					<ReserveAdmissionForm
						handleInputChange={handleInputChange}
						date={date}
						setDate={setDate}
						fromDate={fromDate}
						setFromDate={setFromDate}
						toDate={toDate}
						setToDate={setToDate}
					/>
				);
			case "Đơn xin hoãn thi":
				return <PostponeExamForm handleInputChange={handleInputChange} />;
			case "Đơn xin học lại":
				return <RetakeCourseForm handleInputChange={handleInputChange} />;
			case "Đơn xin nhập học lại":
				return (
					<ReEnrollmentForm
						handleInputChange={handleInputChange}
						date={date}
						setDate={setDate}
					/>
				);
			case "Đơn phúc khảo":
				return (
					<ReExaminationForm
						handleInputChange={handleInputChange}
						date={date}
						setDate={setDate}
					/>
				);
			case "Đơn xin miễn học Anh văn":
				return <EnglishExemptionForm handleInputChange={handleInputChange} />;
			case "Mẫu đơn xin đổi giáo viên hướng dẫn khóa luận tốt nghiệp":
				return <ChangeAdvisorForm handleInputChange={handleInputChange} />;
			case "Mẫu đơn xin đổi tên đề tài khóa luận tốt nghiệp":
				return <ChangeThesisTitleForm handleInputChange={handleInputChange} />;
			case "Mẫu đơn xin gia hạn thời gian thực hiện khóa luận tốt nghiệp":
				return (
					<ThesisExtensionForm
						handleInputChange={handleInputChange}
						newDeadline={newDeadline}
						setNewDeadline={setNewDeadline}
					/>
				);
			case "Giấy đề nghị":
				return (
					<RecommendationRequestForm
						handleInputChange={handleInputChange}
						date={date}
						setDate={setDate}
					/>
				);
			case "Giấy giới thiệu":
				return <ReferenceLetterForm handleInputChange={handleInputChange} />;
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
			<CardFooter
				className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:${
					docxUrl ? "grid-cols-2" : "grid-cols-1"
				} gap-2`}
			>
				<Button
					variant="outline"
					size="sm"
					className="flex items-center"
					onClick={handleDownload}
				>
					<Download className="h-4 w-4 mr-1" />
					Tải về
				</Button>
				{docxUrl && (
					<Button
						variant="ghost"
						size="sm"
						className="flex items-center"
						onClick={handleOpenDialog}
					>
						<Pointer className="h-4 w-4 mr-1" />
						Dùng biểu mẫu
					</Button>
				)}
			</CardFooter>
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className="sm:max-w-[1200px]">
					<DialogHeader>
						<DialogTitle>{name}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					<form className="grid gap-4 py-4">{renderFormFields()}</form>
					<DialogFooter>
						<Button type="button" onClick={handleSubmit} disabled={isLoading}>
							{isLoading && (
								<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
							)}
							Submit
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</Card>
	);
};

export default DocumentCard;
