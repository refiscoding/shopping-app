class Product {
    constructor(id, ownerId, title, ImageUrl, description, price) {
        this.id = id;
        this.ownerId = ownerId;
        this.ImageUrl = ImageUrl;
        this.title = title;
        this.description = description;
        this.price = price;
    }
}

export default Product;