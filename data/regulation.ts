export interface Regulation {
	id: string;
	title: string;
	content: string;
	issuedDate: string;
	effectiveDate: string;
	status: string;
	lastUpdated: string;
	documentNumber: string;
	highlightedTerms?: string[];
}

export const regulations: Regulation[] = [
	{
		id: "1",
		documentNumber: "Khoản 1, Điều 16",
		title:
			"QUY CHẾ ĐÀO TẠO THEO HỌC CHẾ TÍN CHỈ CHO HỆ ĐẠI HỌC CHÍNH QUY CỦA TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN",
		content:
			"Điều 16. Xử lý học vụ 1. Cảnh báo học vụ Sinh viên bị cảnh báo học vụ nếu vi phạm một trong những trường hợp sau đây: - Không hoàn thành nghĩa vụ học phí đúng quy định. - Có ĐTBHK dưới 3,0 hoặc điểm trung bình của liên tiếp 2 học kỳ gần nhất đều dưới 4,0. Thời hạn cảnh báo học vụ kéo dài trong một học kỳ chính tiếp theo. Sinh viên sẽ được tự động xóa hình thức xử lý khi kết thúc thời hạn.",
		issuedDate: "25/10/2018",
		effectiveDate: "30/10/2018",
		status: "Còn hiệu lực",
		lastUpdated: "29/11/2018",
		highlightedTerms: ["học vụ", "cảnh báo", "học phí", "xử lý", "học kỳ"],
	},
	{
		id: "2",
		documentNumber: "Khoản 1, Điều 33",
		title: "Điều kiện xét tốt nghiệp và công nhận tốt nghiệp",
		content:
			"Mỗi năm Trường có 4 đợt xét tốt nghiệp và cấp bằng tốt nghiệp đại học, lịch xét tốt nghiệp được ghi trong kế hoạch năm học. Để được Trường xét cấp bằng tốt nghiệp, sinh viên nộp hồ sơ đề nghị xét tốt nghiệp khi đã đáp ứng đủ các điều kiện sau đây: - Cho đến thời điểm xét tốt nghiệp, sinh viên không đang trong thời gian bị truy cứu trách nhiệm hình sự hoặc bị kỷ luật từ mức đình chỉ học tập trở lên. - Đã hoàn thành nghĩa vụ học phí. - Đã hoàn thành các môn học, tích lũy đủ số tín chỉ theo đúng chương trình đào tạo. - Đã hoàn thành các môn học Giáo dục thể chất. - Có chứng chỉ Giáo dục quốc phòng-An ninh. - Đạt chuẩn ngoại ngữ xét tốt nghiệp. - Đạt điểm rèn luyện tích lũy tối thiểu là 50 điểm. - Đã hoàn trả sách mượn cho Thư viện.",
		issuedDate: "25/10/2018",
		effectiveDate: "30/10/2018",
		status: "Còn hiệu lực",
		lastUpdated: "29/11/2018",
		highlightedTerms: [
			"tốt nghiệp",
			"học phí",
			"tín chỉ",
			"giáo dục thể chất",
			"sách mượn",
		],
	},
	{
		id: "3",
		documentNumber: "Khoản 2, Điều 3",
		title: "Các loại học phần",
		content:
			"Điều 3. Môn học 2. Các loại học phần - Học phần tích lũy: là học phần mà sinh viên có kết quả tổng kết học phần được từ 5 điểm trở lên. - Học phần bắt buộc: là học phần bắt buộc sinh viên phải học và tích lũy theo ngành hoặc chuyên ngành đã chọn. - Học phần tự chọn: là học phần sinh viên có thể đăng ký học hay không tùy theo nguyện vọng. - Học phần chung (Giáo dục quốc phòng-An ninh, Giáo dục Thể chất, Lý luận chính trị, Ngoại ngữ,…) là các học phần được giảng dạy và học tập chung cho các ngành theo quy định của Bộ GD&ĐT và hướng dẫn của ĐHQG-HCM. - Học phần tự chọn định hướng: là học phần mà sinh viên phải chọn trong các học phần quy định cho một ngành học cụ thể.",
		issuedDate: "25/10/2018",
		effectiveDate: "30/10/2018",
		status: "Còn hiệu lực",
		lastUpdated: "29/11/2018",
		highlightedTerms: [
			"học phần",
			"tích lũy",
			"bắt buộc",
			"tự chọn",
			"giáo dục quốc phòng",
		],
	},
	{
		id: "4",
		documentNumber: "Khoản 1, Điều 4",
		title: "Tín chỉ học tập - Tín chỉ học phí",
		content:
			"Điều 4. Tín chỉ học tập - Tín chỉ học phí 1. Tín chỉ học tập: - Tín chỉ học tập: là đơn vị dùng để xác định thời gian, khối lượng học tập của sinh viên và khối lượng giảng dạy của giảng viên, đồng thời là đơn vị dùng để đánh giá kết quả học tập của sinh viên dựa trên số lượng tín chỉ học tập đã tích lũy được. - Một tiết học được tính quy chuẩn bằng 50 phút. - Một tín chỉ học tập được quy định bằng 15 tiết học lý thuyết; 30 tiết thảo luận trên lớp, thí nghiệm, thực hành tại phòng máy theo phương thức học tập trực tiếp hoặc trực tuyến hoặc 45 – 60 tiết thực tập, kiến tập, chuẩn bị khoá luận.",
		issuedDate: "25/10/2018",
		effectiveDate: "30/10/2018",
		status: "Còn hiệu lực",
		lastUpdated: "29/11/2018",
		highlightedTerms: ["tín chỉ", "học phí", "học tập", "thực tập", "kiến tập"],
	},
	{
		id: "5",
		documentNumber: "Khoản 2, Điều 4",
		title: "Tín chỉ học phí - Nguyên tắc xác định học phí",
		content:
			"Điều 4. Tín chỉ học phí (TCHP): là đơn vị dùng để lượng hóa chi phí của các hoạt động giảng dạy tính cho từng học phần. Số TCHP của mỗi học phần được xác định căn cứ vào đề cương và cách thức tổ chức học phần; cụ thể như sau: - Phần giảng dạy lý thuyết tại lớp: 15 tiết tương đương với 1 TCHP. - Phần giảng dạy thực hành, thí nghiệm, thảo luận: Học phần thực hành HT1 : 1 TCTH tương đương 2 TCHP. Học phần thực hành HT2 : 1 TCTH tương đương 1 TCHP.",
		issuedDate: "25/10/2018",
		effectiveDate: "30/10/2018",
		status: "Còn hiệu lực",
		lastUpdated: "29/11/2018",
		highlightedTerms: [
			"học phí",
			"TCHP",
			"giảng dạy",
			"thực hành",
			"thí nghiệm",
		],
	},
];

export const categories = Array.from(
	new Set(
		regulations
			.map((reg) => {
				const parts = reg.documentNumber.split(",");
				return parts.length > 1 ? parts[1].trim() : null;
			})
			.filter((category): category is string => category !== null) // Loại bỏ giá trị null
	)
);
