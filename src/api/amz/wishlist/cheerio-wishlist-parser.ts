import WishlistParser from "./interfaces/wishlist-parser";
import WishlistBook from "./models/wishlist-book";
import cheerio from 'cheerio'

class CheerioWishlistParser implements WishlistParser {

    $: CheerioStatic

    async extractBooks(document: string): Promise<WishlistBook[]> {

        this.$ = cheerio.load(document)

        const items = this.$('#g-items').find('li')

        const books: WishlistBook[] = []
        items.each((i, el) =>
            books.push(this.extractBookFromElement(el)))

        return books
    }

    extractBookFromElement(el: CheerioElement): WishlistBook {

        const id = this.$(el)
            .attr('data-itemid')

        const title = this.$(el)
            .find('h3').text()

        const author = this.$(el)
            .find(`#item-byline-${id}`)
            .text()
            .split(',')
            .map((value)=>value.replace(RegExp('by '), ""))
            .map((value)=>value.replace(RegExp('\\(.*\\)'), ""))
            .map((value)=> value.trim())

        const currency = this.$(el)
            .find(`#itemPrice_${id}`)
            .find('span')
            .first()
            .text()
            .replace(RegExp('([0-9]+[.,]*)+'), "")

        const price = Number(this.$(el)
            .attr('data-price'))

        const coverUrl = this.$(el)
            .find(`#itemImage_${id} > a > img`)
            .attr('src')

        return {
            id,
            title,
            author,
            currency,
            price,
            coverUrl
        }

    }

}

export default CheerioWishlistParser