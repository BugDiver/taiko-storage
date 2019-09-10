const { openBrowser, goto, closeBrowser, storage: { localStorage } } = require('taiko');

jest.setTimeout(30000);

beforeAll(async () => {
    await openBrowser();
});

afterAll(async () => {
    await closeBrowser();
});

test('Should set item in storage', async () => {
    await goto('https://gauge.org/');
    await localStorage.setItem('key', 'value');
    expect(await localStorage.hasItem('key')).toBe(true);
});

test('Should get item from storage', async () => {
    await goto('https://gauge.org/');
    await localStorage.setItem('key', 'value');
    expect(await localStorage.getItem('key')).toBe('value');
});

test('Should remove item from storage', async () => {
    await goto('https://gauge.org/');
    await localStorage.setItem('key', 'value');
    expect(await localStorage.getItem('key')).toBe('value');
});

test('Should clear local storage', async () => {
    await goto('https://gauge.org/');
    await localStorage.setItem('key', 'value');
    expect(await localStorage.hasItem('key')).toBe(true);
    await localStorage.removeItem('key');
    expect(await localStorage.hasItem('key')).toBe(false);
});
