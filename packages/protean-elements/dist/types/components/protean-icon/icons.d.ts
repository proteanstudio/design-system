import { //eslint-disable-line
VNode } from '../../stencil-public-runtime';
import { Dict } from '@/types';
interface Icon {
  markup: () => VNode;
}
declare const icons: Dict<Icon>;
export default icons;
