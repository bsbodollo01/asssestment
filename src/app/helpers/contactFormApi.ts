export async function sendInquiry (params: any) {
	try {
		const response = await fetch('https://super7tech.com/developer_exam/api/sendMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(params)
		});
		const responseData = await response.json();

		if (response.ok) {
			return new Response(
                JSON.stringify({
                    success: true,
                    error: false,
                    message: responseData.status,
                    data: responseData.property
                }),
                { status: 200 }
            );
		} else {
			return new Response(
                JSON.stringify({
                    success: false,
                    error: true,
                    message: responseData.status,
                    data: responseData.property
                }),
                { status: 500 }
            );
		}
	} catch (error: any) {
		throw new Error(`Error during creating: ${error.message}`);
	}
};