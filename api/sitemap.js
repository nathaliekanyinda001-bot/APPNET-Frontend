export default async function handler(req, res) {

    try {

        const response = await fetch(
            "https://appnet-backend.onrender.com/sitemap.xml"
        );


        const xml = await response.text();


        res.setHeader(
            "Content-Type",
            "application/xml"
        );


        res.status(200).send(xml);


    } catch(error) {

        console.error(error);


        res.status(500).send(
            "Erreur récupération sitemap"
        );

    }

}