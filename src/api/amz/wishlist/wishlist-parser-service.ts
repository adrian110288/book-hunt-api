import WishlistBook from "./models/wishlist-book"
import to from 'await-to-js'
import axios, { AxiosResponse, AxiosError } from 'axios'
import cheerio from 'cheerio'
import ApiError from '../../../util/api-error'

async function getWishlistBooks(wishlist: string): Promise<WishlistBook[]> {

    return new Promise<WishlistBook[]>(async (resolve, _) => {

        const [error, response] = await to<AxiosResponse, AxiosError>(
            axios.get(`ht://www.amazon.co.uk/hz/wishlist/ls/${wishlist}`))

        if (error) throw new ApiError(500, "Cannot download html")

        const $ = cheerio.load(response.data)

        const itemDetails = $('#g-items').find('.g-item-details')

        const books: WishlistBook[] = []

        itemDetails.each((i, item) => {

            const bookTitle = $(item).find('h3 > a').attr('title')

            books.push({
                id: "string",
                title: bookTitle,
                author: "string",
                price: 4.12,
                cover: "string"
            })

        })

        resolve(books)

    })

}

export default getWishlistBooks