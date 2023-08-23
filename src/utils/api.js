export const createApiHandler = (handler) => async (req, res) => {
    try {
        await handler(req, res);
    } catch (error) {
        console.error('API error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};
