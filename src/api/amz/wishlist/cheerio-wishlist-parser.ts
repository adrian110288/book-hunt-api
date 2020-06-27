import WishlistParser from "./interfaces/wishlist-parser";
import WishlistBook from "./models/wishlist-book";
import cheerio from 'cheerio'

class CheerioWishlistParser implements WishlistParser {

    $: CheerioStatic

    async extractBooks(document: string): Promise<WishlistBook[]> {

        this.$ = cheerio.load(document)

        const itemDetails = this.$('#g-items').find('.g-item-details')

        const books: WishlistBook[] = []
        itemDetails.each((i, el) => books.push(this.extractBoookFromElement(el)))

        return books
    }

    extractBoookFromElement(el: CheerioElement): WishlistBook {

        const bookTitle = this.$(el).find('h3 > a').attr('title')

        return {
            id: "string",
            title: bookTitle,
            author: "string",
            price: 4.12,
            cover: "string"
        }

    }

}

export default CheerioWishlistParser