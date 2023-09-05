import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from "googleapis";

type SheetForm = {
    fName: string
    lName: string
    email: string
    phone: string
    state: string
    city: string
    model: string
    colour: string
    own: string
    bikeOwned: string
    currentTimeDate: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' });
    }

    const body = req.body as SheetForm;

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL1,
                private_key: process.env.GOOGLE_PRIVATE_KEY1?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID1,
            range: 'A1:K1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.fName, body.lName, body.email, body.phone, body.state, body.city, body.model, body.colour, body.own, body.bikeOwned, body.currentTimeDate]
                ]
            }
        });

        return res.status(201).json({
            data: response.data
        });
    } catch (e) {
        console.log(e);
        // return res.status(e.code).send({message: e.message})
    }
}
