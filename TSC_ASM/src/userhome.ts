type product = {
    id: string;
    name: string;
    cost: number;
    img: string;
    discount: number;
};

async function loadproduct(pros: product[], box: HTMLElement) {
    for(const pro of pros){
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
        console.log(name)
    }
}

const boxsp = document.getElementById("proslist")?.children[0];

async function getProducts() {
    try {
        const re = await fetch('http://localhost:3000/products/',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        console.log(1);
        const data = await re.json();
        let result: product[] = [];
        
        data.pros.forEach((productdata: any) => {
            let po: product = {
                id: String(productdata._id),
                name: String(productdata.name),
                cost: Number(productdata.cost),
                img: String(productdata.img),
                discount: Number(productdata.discount),
            };
            result.push(po);
        });
        return result as product[];
    } catch (error) {
        return [];
    }
}

// const dataaa = await getProducts();
// loadproduct( dataaa,boxsp as HTMLElement);
async function init() {
    const products = await getProducts();
    console.log(products)
    loadproduct(products, boxsp as HTMLElement);
}
init();

const pros: product[] = [
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
