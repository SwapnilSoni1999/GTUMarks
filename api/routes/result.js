const { Router } = require('express')

const GTUResult = require('../../utils/gtuResult')

const router = Router()

router.post('/', async (req, res, next) => {
    try {
        const { enrollment, examId } = req.body
        const result = await GTUResult.fromEnrollment(enrollment, examId)
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: "Internal server error!" })
    }
})

module.exports = router
