const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const asyncHandler = require('../utils/asyncHandler')

// The `/api/tags` endpoint

router.get('/', asyncHandler(async (req, res) => {
    const tagData = await Tag.findAll( {
      include: [{ model: Product }]
    })
    res.status(200).json(tagData)
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const tagData = await Tag.findByPk( req.params.id, {
      include: [{ model: Product }]
    })
    res.status(200).json(tagData)
}));

router.post('/', asyncHandler(async (req, res) => {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.status(200).json(tagData)
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const TagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if(!TagData[0]){
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(TagData)
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    if(!tagData){
      res.status(404).json({ message: 'No tag found with this id'})
      return
    }
    res.status(200).json(tagData)
}));

module.exports = router;
