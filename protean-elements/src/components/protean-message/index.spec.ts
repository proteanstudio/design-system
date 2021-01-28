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

        const decorators = Array.from(
            root.shadowRoot.querySelectorAll('.decorator'),
        );

        expect(decorators).toHaveLength(2);
        expect(decorators[0]).toHaveClass('top');
        expect(decorators[0]).toEqualAttribute(
            'xmlns',
            'http://www.w3.org/2000/svg',
        );
        expect(decorators[0]).toEqualAttribute('viewBox', '0 0 125 125');
        expect(decorators[0]).toEqualAttribute('aria-hidden', 'true');

        expect(decorators[1]).toHaveClass('bottom');

        const statusIcon = root.shadowRoot.querySelector('protean-icon');

        expect(statusIcon).toEqualAttribute('type', 'status-error-filled');
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

    it('correctly computes icon', async () => {
        const instance = new ProteanMessage();

        instance.type = 'foo';
        expect(instance.icon).toEqual('status-info-filled');

        instance.type = 'info';
        expect(instance.icon).toEqual('status-info-filled');

        instance.type = 'success';
        expect(instance.icon).toEqual('status-success-filled');

        instance.type = 'warning';
        expect(instance.icon).toEqual('status-warning-filled');

        instance.type = 'error';
        expect(instance.icon).toEqual('status-error-filled');
    });
});
