const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');
const asyncHandler = require('../utils/asyncHandler')

// get all products
router.get('/', asyncHandler(async (req, res) => {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    })
    res.status(200).json(productData);
}));

// get one product
router.get('/:id', asyncHandler( async (req, res) => {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    })
    res.status(200).json(productData)
}));

// create new product
router.post('/', asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);

  if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map(tag_id => ({
          product_id: product.id,
          tag_id,
      }));
      const productTagIds = await ProductTag.bulkCreate(productTagIdArr);
      return res.status(200).json(productTagIds);
  }

  res.status(200).json(product);
}));

// update product
router.put('/:id', asyncHandler(async (req, res) => {
  // Update product data
  await Product.update(req.body, {
      where: {
          id: req.params.id,
      },
  });

  if (req.body.tagIds && req.body.tagIds.length) {
      // Find existing product tags
      const productTags = await ProductTag.findAll({
          where: { product_id: req.params.id }
      });

      // Create filtered list of new tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
          .filter(tag_id => !productTagIds.includes(tag_id))
          .map(tag_id => ({
              product_id: req.params.id,
              tag_id,
          }));

      // Figure out which ones to remove
      const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);

      // Run both actions
      await Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
      ]);
  }
  const updatedProduct = await Product.findByPk(req.params.id);
  res.json(updatedProduct);
}));

//delete a product
router.delete('/:id', asyncHandler(async (req, res) => {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    if(!productData){
      res.status(404).json({ message: 'No product found with this id'})
      return
    }
    res.status(200).json(productData)
}));

module.exports = router;
