const { Client } = require('@notionhq/client');

const notion = new Client({
    auth:process.env.NOTION_TOKEN
});
const database_id = process.env.NOTION_DATABASE_ID;

exports.handler = async (event) => {


    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST'
    }

    const { results } = await notion.request(payload);
    const  calcId = (strDate) => {
        return Date.parse(strDate)
    }

    const users = results.map((page) => {


        return {
            id: calcId(page.created_time),
            username: page.properties.username.rich_text[0].text.content,
            name: page.properties.name.rich_text[0].text.content,
            email: page.properties.email.rich_text[0].text.content,
            address: JSON.parse(page.properties.address.rich_text[0].text.content),
            phone: page.properties.phone.rich_text[0].text.content,
            website: page.properties.website.rich_text[0].text.content,
            company: JSON.parse(page.properties.company.rich_text[0].text.content),
        }

    })

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
    };
};

