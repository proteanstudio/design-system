import debounce from './';

describe('debounce', () => {
    it('debounces at default 100ms', async () => {
        vi.useFakeTimers();
        const setTimeoutSpy = vi.spyOn(window, 'setTimeout');
        const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');

        const fn = vi.fn();
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
        expect(setTimeoutSpy).toHaveBeenCalledTimes(2);
        expect(fn).toHaveBeenCalledTimes(0);

        vi.advanceTimersByTime(100);
        expect(fn).toHaveBeenCalledTimes(1);

        debouncedFn();

        expect(clearTimeoutSpy).toHaveBeenCalledTimes(3);
        expect(fn).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(100);
        expect(fn).toHaveBeenCalledTimes(2);

        setTimeoutSpy.mockRestore();
        clearTimeoutSpy.mockRestore();
        vi.useRealTimers();
    });

    it('debounces at with custom time', async () => {
        vi.useFakeTimers();
        const setTimeoutSpy = vi.spyOn(window, 'setTimeout');

        const fn = vi.fn();
        const debouncedFn = debounce(fn, 2);

        debouncedFn();

        expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
        expect(setTimeoutSpy).toHaveBeenCalledWith(fn, 2);
        expect(fn).toHaveBeenCalledTimes(0);

        debouncedFn();

        vi.advanceTimersByTime(2);
        expect(fn).toHaveBeenCalledTimes(1);

        setTimeoutSpy.mockRestore();
        vi.useRealTimers();
    });
});
