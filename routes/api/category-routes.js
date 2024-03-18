const router = require('express').Router();
const { Category, Product } = require('../../models');
const asyncHandler = require('../utils/asyncHandler')

router.get('/', asyncHandler(async (req, res) => {
  const categoryData = await Category.findAll({
    include: [{ model: Product }]
  });
  res.status(200).json(categoryData);
}));

router.get('/:id',asyncHandler( async (req, res) => {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData)
}));

router.post('/', asyncHandler(async (req, res) => {
  const categoryData = await Category.create({
    category_name: req.body.category_name
  });
  res.status(201).json(categoryData);
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if(!categoryData[0]){
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData)
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if(!categoryData){
      res.status(404).json({ message: 'No category found with this id'})
      return
    }
    res.status(200).json(categoryData)
}));

module.exports = router;
