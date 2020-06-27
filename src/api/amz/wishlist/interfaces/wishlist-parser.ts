import WishlistBook from "../models/wishlist-book";

interface WishlistParser {

    extractBooks(document: string): Promise<WishlistBook[]>
}

export default WishlistParser