var express = require("express");
var router = express.Router();
var cors = require('cors')
const connectDB = require('../models/database.js')
var pros = [
    {
        id:1,
        name:'sanpham1',
        cost:999
    },
    {
        id:2,
        name:'sanpham2',
        cost:999
    },
    {
        id:3,
        name:'sanpham3',
        cost:999
    },
    {
        id:4,
        name:'sanpham4',
        cost:999
    }
]

// http://localhost:3000/products/

router.get("/",cors(),async (req, res) => {
    try {   
        const db = await connectDB();
        const products = db.collection('products');
        const data = await products.find().toArray();
        res.status(200).json({ status: true,pros:data});
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});

router.get("/:id", async(req, res)=>{
    try {   
        const id = req.params.id;
        const db = await connectDB();
        const products = db.collection('products');
        const data = await products.find().toArray();
        const re = data.filter(e=>e._id==id)
        
        res.status(200).json({ status: true,pro:re});
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});
router.post("/add", async(req, res)=>{
    try {
        const db = await connectDB();
        const products = db.collection('products');
        const data = await products.find().toArray();

        const {name,cost,img,discount} = req.body
        
        if(!name || !cost || !img || !discount){
            // return res.status(500).json({ status: false,message:'thong tin nhap vao khong dung'});
        }
        const newpro = {
            name,
            cost,
            img,
            discount
        }
        products.insertOne(newpro,(e)=>{if (e) throw e;})

        return res.status(201).json({status:true,message:'them san pham thanh cong'})
    }catch (error) {
        return res.status(500).json({status:false,message:'khong the them san pham'})
    }
});
router.put("/edit/:id", function (req, res, next) {
    try {
        const id = req.params.id
        const {Pdname,Pdcost} = req.body;
        const idOfPro = catalogs.findIndex(e=>e.id==parseInt(id));

        const adpro = {
            id,
            name:String(Pdname),
            cost:Number(Pdcost)
        }
        catalogs[idOfPro]=adpro
        res.status(200).json({ status: true, newCatalogs:pros,itemcatalogy:adpro});
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});
router.delete("/delete/:id", function (req, res, next) {
    try {
        const id = req.params.id;
        const proid = pros.findIndex(e=>e.id=== parseInt(id))
        
        pros.splice(proid,1)
        return res.status(201).json({status:true,message:'xoa san pham thanh cong',newPros:pros})
    }catch (error) {
        return res.status(500).json({status:false,message:'khong the xoa san pham'})
    }
});





module.exports = router;