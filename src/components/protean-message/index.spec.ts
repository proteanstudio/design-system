import { newSpecPage } from '@stencil/core/testing';
import { ProteanMessage } from '.';

describe('protean-message', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [ProteanMessage],
            html:
                '<protean-message type="error">Success Message</protean-message>',
        });

        const messageContainer = root.shadowRoot.querySelector(
            '.message-container',
        );

        expect(messageContainer).toHaveClass('error');
        expect(messageContainer).toEqualAttribute('role', 'alert');
    });

    it('correctly computes type', async () => {
        const instance = new ProteanMessage();

        instance.type = 'foo';
        expect(instance.computedType).toEqual('info');

        instance.type = 'info';
        expect(instance.computedType).toEqual('info');

        instance.type = 'success';
        expect(instance.computedType).toEqual('success');

        instance.type = 'warning';
        expect(instance.computedType).toEqual('warning');

        instance.type = 'error';
        expect(instance.computedType).toEqual('error');
    });

    it('correctly computes role', async () => {
        const instance = new ProteanMessage();

        instance.level = 'foo';
        expect(instance.role).toEqual('alert');

        instance.level = 'status';
        expect(instance.role).toEqual('status');

        instance.level = undefined;
        expect(instance.role).toEqual('alert');

        instance.level = 'alert';
        expect(instance.role).toEqual('alert');
    });
});
