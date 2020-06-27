import WishlistBook from "../models/wishlist-book";

interface WishlistService {

    getWishlistBooks(wishlist: string): Promise<WishlistBook[]>
}

export default WishlistService