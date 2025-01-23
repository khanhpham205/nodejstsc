"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
function loadproduct(pros, box) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const pro of pros) {
            const div = document.createElement("div");
            const name = document.createElement("h3");
            const cost = document.createElement("p");
            const img = document.createElement("img");
            div.dataset.id_product = String(pro.id);
            div.classList.add("product", "card");
            img.src = pro.img;
            name.innerText = pro.name;
            cost.innerText = String(pro.cost);
            div.append(img, name, cost);
            box.append(div);
            console.log(name);
        }
    });
}
const boxsp = (_a = document.getElementById("proslist")) === null || _a === void 0 ? void 0 : _a.children[0];
function getProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const re = yield fetch('http://localhost:3000/products/', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            });
            console.log(1);
            const data = yield re.json();
            let result = [];
            data.pros.forEach((productdata) => {
                let po = {
                    id: String(productdata._id),
                    name: String(productdata.name),
                    cost: Number(productdata.cost),
                    img: String(productdata.img),
                    discount: Number(productdata.discount),
                };
                result.push(po);
            });
            return result;
        }
        catch (error) {
            return [];
        }
    });
}
// const dataaa = await getProducts();
// loadproduct( dataaa,boxsp as HTMLElement);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield getProducts();
        console.log(products);
        loadproduct(products, boxsp);
    });
}
init();
const pros = [
    {
        id: "0",
        name: "sanpham0",
        img: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
        discount: 10,
        cost: 100000,
    },
    {
        id: "1",
        name: "sanpham1",
        img: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
        discount: 10,
        cost: 100000,
    },
    {
        id: "2",
        name: "sanpham2",
        img: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
        discount: 10,
        cost: 100000,
    },
    {
        id: "3",
        name: "sanpham3",
        img: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
        discount: 10,
        cost: 100000,
    },
    {
        id: "4",
        name: "sanpham4",
        img: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
        discount: 10,
        cost: 100000,
    },
    {
        id: "5",
        name: "sanpham5",
        img: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
        discount: 10,
        cost: 100000,
    },
    {
        id: "6",
        name: "sanpham6",
        img: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
        discount: 10,
        cost: 100000,
    },
    {
        id: "7",
        name: "sanpham7",
        img: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
        discount: 10,
        cost: 100000,
    },
];
// loadproduct(pros, boxsp as HTMLElement);
