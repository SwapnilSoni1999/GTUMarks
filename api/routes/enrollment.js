const { Router } = require('express')

const router = Router()

router.get('/:enrollment', async (req, res, next) => {
    const { enrollment } = req.params
    
})

module.exports = router
