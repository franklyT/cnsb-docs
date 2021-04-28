import templateLinksFromMarkdown from './templateLinksFromMarkdown';

describe("templateLinksFromMarkdown", () => {
  test("it should produce a link element from a given link:element string", () => {
    expect(templateLinksFromMarkdown(" link:abc ")).toEqual(`<a style="text-decoration: none;" href="#card_abc"> abc </a>`);
  });
});
