import { createApiHandler } from 'utils/api';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


export default createApiHandler(async (req, res) => {

    const completion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: req.body.text,
        max_tokens: 30,
    });

    res.status(200).json(completion.choices[0].text);
});
