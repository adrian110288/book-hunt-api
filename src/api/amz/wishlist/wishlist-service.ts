import WishlistBook from "./models/wishlist-book"
import to from 'await-to-js'
import axios, {AxiosError, AxiosResponse} from 'axios'
import ApiError from '../../../util/errors/api-error'
import extractBooks from "./cheerio-wishlist-parser";

async function getWishlistBooks(wishlist: string): Promise<WishlistBook[]> {

    let error: Error
    let html: string

    [error, html] = await to(getWishlistHtml(wishlist))
    if (error) throw error

    let books: WishlistBook[]

    [error, books] = await to(extractBooks(html))
    if (error) throw error

    return books
}

async function getWishlistHtml(wishlist: string): Promise<string> {

    const [error, response] = await to<AxiosResponse<string>, AxiosError>(
        axios.get(`https://www.amazon.co.uk/hz/wishlist/ls/${wishlist}`))

    if (error) throw new ApiError("Cannot download html")
    else return response.data as string

}

export default getWishlistBooks
