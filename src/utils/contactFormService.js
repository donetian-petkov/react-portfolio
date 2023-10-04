export const sendEmail = async (email) => {

    const response = await fetch("https://portfolio-react.donetianpetkov.com/mail/contact.php", {
        method: "POST",
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email)
    });

    return response.json();

}