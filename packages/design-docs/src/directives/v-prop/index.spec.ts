import { shallowMount } from '@vue/test-utils';
import vProp from './';

describe('v-prop', () => {
    it('binds and updates properties to elements', async () => {
        const dummyComponent = {
            template: '<div v-prop:foo="bar">Dummy component</div>',
            props: ['bar'],
        };
        const wrapper = shallowMount(dummyComponent, {
            props: {
                bar: 'baz',
            },
            global: {
                directives: {
                    prop: vProp,
                },
            },
        });

        const el = wrapper.element as HTMLDivElement & {
            foo: string;
        };

        expect(el.foo).toEqual('baz');

        await wrapper.setProps({ bar: 'biz' });

        expect(el.foo).toEqual('biz');
    });
});
