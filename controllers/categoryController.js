import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

const getCategorys = asyncHandler(async (req, res) => {
    
    const categories = await Product.distinct('category');
    res.json({ categories });
  });

  export {
    getCategorys,
    
  };
  