export async function komisiApis() {
    const res = await fetch('https://super7tech.com/developer_exam/api/komisi');
    const komisiData = await res.json();
        
    return {
        komisiData,
    };
}
