const router = require('express').Router()
const tool = require('../tools/tool')
const path = require('path')



router.get('/', (req, res) => {
    res.sendFile(path.resolve('views/index.html') )
})//end


router.post('/', (req, res) => {
   
    if(req.body.value === '' || req.body.value === null){
        res.status(407).json({msg:'Data empty...'})
        return false
    }

    let text = String(req.body.value)
    res.status(200).json({suma:tool.sumSimilarities(text, text.length)})
})//end



module.exports = router


