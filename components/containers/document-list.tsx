"use client";

import { useEffect, useState } from "react";
import { formsService } from "@/services/forms.service";
import DocumentCard from "@/components/document-card";
import { BanIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Form {
	_id: string;
	name: string;
	description: string;
	formTypeId: FormType;
	formTypeName: string;
	url: string;
}

interface FormType {
	_id: string;
	name: string;
}

export default function DocumentList() {
	const [forms, setForms] = useState<Form[]>([]);
	const [groupedForms, setGroupedForms] = useState<{ [key: string]: Form[] }>(
		{}
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [formTypes, setFormTypes] = useState<FormType[]>([]);
	const [selectedFormTypeId, setSelectedFormTypeId] = useState<string | null>(
		null
	);

	useEffect(() => {
		const fetchForms = async () => {
			try {
				const data = await formsService.getAllForms({});
				setForms(data);

				const uniqueFormTypes = new Set<string>();
				const types: FormType[] = [];
				data.forEach((form: Form) => {
					if (!uniqueFormTypes.has(form.formTypeId._id)) {
						uniqueFormTypes.add(form.formTypeId._id);
						types.push(form.formTypeId);
					}
				});
				setFormTypes(types);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError("An error occurred while fetching forms.");
				}
			} finally {
				setLoading(false);
			}
		};

		fetchForms();
	}, []);

	useEffect(() => {
		const grouped: { [key: string]: Form[] } = {};
		forms.forEach((form) => {
			const typeId = form.formTypeId._id;
			if (!grouped[typeId]) {
				grouped[typeId] = [];
			}
			grouped[typeId].push(form);
		});
		setGroupedForms(grouped);
	}, [forms]);

	const handleFormTypeSelect = (formTypeId: string | null) => {
		setSelectedFormTypeId(formTypeId);
	};

	const handleClearFilter = () => {
		setSelectedFormTypeId(null);
	};

	const filteredGroupedForms = selectedFormTypeId
		? { [selectedFormTypeId]: groupedForms[selectedFormTypeId] }
		: groupedForms;

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-xl font-bold">Danh sách biểu mẫu</h1>

				<div className="flex items-center">
					{selectedFormTypeId && (
						<Button
							variant="secondary"
							size="sm"
							className="ml-4 rounded-full w-8 h-8"
							onClick={handleClearFilter}
						>
							<BanIcon className="h-4 w-4" />
						</Button>
					)}

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" className="ml-4">
								Bộ lọc
								<ChevronDown className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-64">
							<DropdownMenuLabel>Lọc loại biểu mẫu</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{formTypes.map((formType) => (
								<DropdownMenuItem
									key={formType._id}
									onClick={() => handleFormTypeSelect(formType._id)}
									className={`px-4 py-2 ${
										formType._id === selectedFormTypeId ? "bg-gray-100" : ""
									}`}
								>
									{formType.name}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			<div>
				{Object.keys(filteredGroupedForms).map((formTypeId) => (
					<div key={formTypeId} className="mb-8">
						<div className=" my-8">
							<h2 className="text-lg font-medium">
								{filteredGroupedForms[formTypeId][0]?.formTypeName}
							</h2>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
							{filteredGroupedForms[formTypeId].map((form) => (
								<DocumentCard
									key={form._id}
									name={form.name}
									description={form.description}
									url={form.url}
									formName={form.name}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
