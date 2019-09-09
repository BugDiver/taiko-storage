const { openBrowser, goto, closeBrowser, storage: { local } } = require('taiko');

jest.setTimeout(30000);

beforeAll(async () => {
    await openBrowser();
});

afterAll(async () => {
    await closeBrowser();
});

test('Should set item in storage', async () => {
    await goto('https://gauge.org/');
    await local.setItem('key', 'value');
    expect(await local.hasItem('key')).toBe(true);
});

test('Should get item from storage', async () => {
    await goto('https://gauge.org/');
    await local.setItem('key', 'value');
    expect(await local.getItem('key')).toBe('value');
});

test('Should remove item from storage', async () => {
    await goto('https://gauge.org/');
    await local.setItem('key', 'value');
    expect(await local.getItem('key')).toBe('value');
});

test('Should clear local storage', async () => {
    await goto('https://gauge.org/');
    await local.setItem('key', 'value');
    expect(await local.hasItem('key')).toBe(true);
    await local.removeItem('key');
    expect(await local.hasItem('key')).toBe(false);
});
