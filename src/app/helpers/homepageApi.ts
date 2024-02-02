export async function homepageApis() {
    // Fetch data from an API
    const res = await fetch('https://super7tech.com/developer_exam/api/homePage');
    const homePage = await res.json();
    return {
        homePage
    };
}
