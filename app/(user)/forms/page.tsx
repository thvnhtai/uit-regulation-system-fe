import DocumentList from "@/components/containers/document-list";
import UserLayout from "@/layouts/user-layout";
import React from "react";

const FormsPage = () => {
	return (
		<UserLayout>
			<div className="min-h-screen p-12">
				<DocumentList />
			</div>
		</UserLayout>
	);
};

export default FormsPage;
