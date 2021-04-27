export function templateLinksFromMarkdown(markdown: string) {
    const getLink = (link: string) => `<a style="text-decoration: none;" href="#card_${link}"> ${link} </a>`;

    return markdown.replace(/\slink:(.*?)\s/g, `${getLink('$1')}`);
}

export default templateLinksFromMarkdown;