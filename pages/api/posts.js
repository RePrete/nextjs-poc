export default function handler(req, res) {
    res.status(200).json({
        data: [
            {
                id: 1,
                title: 'What a magic'
            },
            {
                id: 2,
                title: 'Please don\'t use nextjs'
            }
        ]
    })
}