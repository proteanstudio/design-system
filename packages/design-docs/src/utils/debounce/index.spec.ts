import wait from '@/test-helpers/wait';
import debounce from './';

describe('debounce', () => {
    it('debounces at default 100ms', async () => {
        const setTimeoutSpy = jest.spyOn(window, 'setTimeout');
        const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');

        const fn = jest.fn();
        const debouncedFn = debounce(fn);

        expect(typeof debouncedFn).toBe('function');

        debouncedFn();

        expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
        expect(clearTimeoutSpy).toHaveBeenCalledWith(undefined);
        expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
        expect(setTimeoutSpy).toHaveBeenCalledWith(fn, 100);
        expect(fn).toHaveBeenCalledTimes(0);

        debouncedFn();

        expect(clearTimeoutSpy).toHaveBeenCalledTimes(2);
        expect(clearTimeoutSpy.mock.calls[1][0]).toEqual(2);
        expect(setTimeoutSpy).toHaveBeenCalledTimes(2);
        expect(fn).toHaveBeenCalledTimes(0);

        await wait(100);
        expect(fn).toHaveBeenCalledTimes(1);

        debouncedFn();

        expect(clearTimeoutSpy).toHaveBeenCalledTimes(3);
        expect(clearTimeoutSpy.mock.calls[2][0]).toEqual(3);
        expect(fn).toHaveBeenCalledTimes(1);

        await wait(100);
        expect(fn).toHaveBeenCalledTimes(2);

        setTimeoutSpy.mockRestore();
        clearTimeoutSpy.mockRestore();
    });

    it('debounces at with custom time', async () => {
        const setTimeoutSpy = jest.spyOn(window, 'setTimeout');

        const fn = jest.fn();
        const debouncedFn = debounce(fn, 2);

        debouncedFn();

        expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
        expect(setTimeoutSpy).toHaveBeenCalledWith(fn, 2);
        expect(fn).toHaveBeenCalledTimes(0);

        debouncedFn();

        await wait(2);
        expect(fn).toHaveBeenCalledTimes(1);

        debouncedFn();

        setTimeoutSpy.mockRestore();
    });
});