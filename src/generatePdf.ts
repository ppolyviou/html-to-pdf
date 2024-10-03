import axios from "axios";
import {renderToString} from "react-dom/server";
import helloWorldTemplate from "./helloWorldTemplate";
import fs from "fs";

const generatePdf = async() => {
	// transform react to html string
	const html = renderToString(helloWorldTemplate());
    
	// POST request to PDFGate api to generate the pdf
	const response = await axios.post("https://api.pdfgate.com/v1/generate/pdf",
	    {
	        html,
	        pageSizeType: "a4",
	    },
	    {
	        headers: {
	            "Content-Type": "application/json",
	            "Authorization": "Bearer PDFGATE_API_KEY",
	        },
		   responseType: "stream",
	    }
	);

	const fileStream = fs.createWriteStream("my-file.pdf");
	response.data.pipe(fileStream);
}

generatePdf();
