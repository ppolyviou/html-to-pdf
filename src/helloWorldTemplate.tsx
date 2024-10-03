import React from "react";

const style = `
	body {
		background: whitesmoke;
		color: #eb4034;
	}

	.hello {
		padding: 20px;
		font-size: 20px;
	}
`;

const helloWorldTemplate = () => {
   return (
       <html>
			<head>
				<title>Hello world ReactJS PDF</title>
				<style>{style}</style>
			</head>
			<body>
				<p className="hello">Hello world!</p>
			</body>
		</html>
   );
};

export default helloWorldTemplate;
