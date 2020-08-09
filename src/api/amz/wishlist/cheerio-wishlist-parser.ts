import WishlistBook from "./models/wishlist-book";
import cheerio from 'cheerio'

async function extractBookFromElement(el: CheerioElement, $: CheerioStatic): Promise<WishlistBook> {

    const id = $(el)
        .attr('data-itemid')

    const title = $(el)
        .find('h3').text()

    const author = $(el)
        .find(`#item-byline-${id}`)
        .text()
        .split(',')
        .map((value: string) => value.replace(RegExp('by '), ""))
        .map((value: string) => value.replace(RegExp('\\(.*\\)'), ""))
        .map((value: string) => value.trim())

    const currency = $(el)
        .find(`#itemPrice_${id}`)
        .find('span')
        .first()
        .text()
        .replace(RegExp('([0-9]+[.,]*)+'), "")

    const price = Number($(el)
        .attr('data-price'))

    const coverUrl = $(el)
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

async function extractBooks(document: string): Promise<WishlistBook[]> {

    const $ = cheerio.load(document)

    const items = $('#g-items').find('li')

    const books: WishlistBook[] = []
    items.each(async (i: number, el: CheerioElement) =>
        books.push(await extractBookFromElement(el, $)))

    return books
}

export default extractBooks
