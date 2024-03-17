const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll( {
      include: [{ model: Product }]
    })
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500).json(error)
  }
  
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk( req.params.id, {
      include: [{ model: Product }]
    })
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
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
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
