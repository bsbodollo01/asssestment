export async function globalApis() {
    // Fetch data from an API
    const res = await fetch('https://super7tech.com/developer_exam/api/peraturan');
    const data = await res.json();
    
    // Pass data to the page component as props
    return {
        props: {
            data,
        },
    };
}
