import WishlistBook from "./models/wishlist-book"
import to from 'await-to-js'
import axios, { AxiosResponse, AxiosError } from 'axios'
import cheerio from 'cheerio'
import ApiError from '../../../util/errors/api-error'
import WishlistService from "./interfaces/wishlist-service"
import WishlistParser from "./interfaces/wishlist-parser"

class WishlistServiceImpl implements WishlistService {

    constructor(private readonly wishlistParser: WishlistParser) {}

    async getWishlistBooks(wishlist: string): Promise<WishlistBook[]> {

        let error: Error
        let html: string

        [error, html] = await to(this.getWishlistHtml(wishlist))
        if (error) throw error

        let books: WishlistBook[]

        [error, books] = await to(this.wishlistParser.extractBooks(html))
        if (error) throw error

        return books
    }

    async getWishlistHtml(wishlist: string): Promise<string> {

        const [error, response] = await to<AxiosResponse<string>, AxiosError>(
            axios.get(`https://www.amazon.co.uk/hz/wishlist/ls/${wishlist}`))

        if (error) throw new ApiError("Cannot download html")
        else return response.data as string

    }

}

export default WishlistServiceImpl