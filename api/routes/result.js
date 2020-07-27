const { Router } = require('express')
const qs = require('querystring')

const GetResult = require('../../utils/getResult')

const router = Router()

router.get('/', async (req, res, next) => {
    // const { enrollment, examId } = req.body
    const enrollment = '150670119596'
    const examId = '2389'
    const result = await GetResult.fromEnrollment(enrollment, examId)
    res.json(result)
})

module.exports = router
