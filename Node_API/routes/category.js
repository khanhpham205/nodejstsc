var express = require("express");
var router = express.Router();

var catalogs = [
    {
        id: 1,
        name: "ban phim",
    },
    {
        id: 2,
        name: "chuot",
    },
    {
        id: 3,
        name: "lot chuot",
    },
    {
        id: 4,
        name: "tai nghe",
    },
];

// http://localhost:3000/catalory/
router.get("/", function (req, res, next) {
    try {
        res.status(200).json({ status: true, body:catalogs});
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});
router.get("/:id", function (req, res, next) {
    try {
        const id = req.params.id
        const idOfCata = catalogs.findIndex(e=>e.id==parseInt(id));
        res.status(200).json({ status: true, body:catalogs[idOfCata]});
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});
router.post("/add", function (req, res, next) {
    try {
        const {name} = req.body
        const catanew = {
            id: catalogs.length+1,
            name
        }
        catalogs.push(catanew)
        res.status(200).json({ status: true, newCatalogs:catalogs,itemcatalogs:catanew});
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});
router.put("/edit/:id", function (req, res, next) {
    try {
        const id = req.params.id
        const idOfCata = catalogs.findIndex(e=>e.id==parseInt(id));

        const {name} = req.body
        const editedcata= {
            id,
            name
        }
        catalogs[idOfCata]=editedcata
        res.status(200).json({ status: true, newCatalogs:catalogs,itemcatalogy:editedcata});
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});
router.delete("/delete/:id", function (req, res, next) {
    try {
        const id = req.params.id
        const idOfCata = catalogs.findIndex(e=>e.id==parseInt(id));

        catalogs.splice(idOfCata,1)
        res.status(200).json({ status: true, newCatalogs:catalogs});
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});




module.exports = router;
